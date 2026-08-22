(function () {
  const MODULES = {
    html: { title: "Quiz de HTML", bank: () => window.QUESTIONS_HTML, cls: "html" },
    css: { title: "Quiz de CSS", bank: () => window.QUESTIONS_CSS, cls: "css" },
    js: { title: "Quiz de JavaScript", bank: () => window.QUESTIONS_JS, cls: "js" }
  };

  const LEVELS = [
    { key: "iniciante", label: "Iniciante" },
    { key: "intermediario", label: "Intermediário" },
    { key: "avancado", label: "Avançado" }
  ];

  // Normaliza código digitado pelo usuário para comparação tolerante a
  // espaços, aspas simples/duplas e ponto-e-vírgula opcional.
  window.normalizeCode = function normalizeCode(input) {
    return (input || "")
      .replace(/'/g, '"')
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\s*([={}():,;<>.+\-*/%!&|])\s*/g, "$1")
      .replace(/;+(?=\}|$)/g, "")
      .toLowerCase();
  };

  const params = new URLSearchParams(window.location.search);
  const moduloKey = params.get("modulo") || "html";
  const nivelKey = LEVELS.some(l => l.key === params.get("nivel")) ? params.get("nivel") : "iniciante";
  const modulo = MODULES[moduloKey] || MODULES.html;

  const fullBank = modulo.bank();
  let questions = fullBank.filter(q => (q.level || "iniciante") === nivelKey);
  const POINTS_PER_QUESTION = 2;
  let scoreMax = questions.length * POINTS_PER_QUESTION;

  const titleEl = document.getElementById("quizTitle");
  const tabsEl = document.getElementById("levelTabs");
  const listEl = document.getElementById("questionList");
  const scoreValueEl = document.getElementById("scoreValue");
  const scoreMaxEl = document.getElementById("scoreMax");
  const resultBanner = document.getElementById("resultBanner");
  const resultText = document.getElementById("resultText");
  const retryBtn = document.getElementById("retryBtn");

  const levelLabel = (LEVELS.find(l => l.key === nivelKey) || LEVELS[0]).label;
  titleEl.textContent = `${modulo.title} — ${levelLabel}`;
  scoreMaxEl.textContent = scoreMax;

  function renderTabs() {
    tabsEl.innerHTML = "";
    LEVELS.forEach(level => {
      const count = fullBank.filter(q => (q.level || "iniciante") === level.key).length;
      const tab = document.createElement("a");
      tab.className = "level-tab" + (level.key === nivelKey ? " active" : "");
      tab.href = `quiz.html?modulo=${moduloKey}&nivel=${level.key}`;
      tab.textContent = `${level.label} (${count})`;
      if (count === 0) tab.classList.add("disabled");
      tabsEl.appendChild(tab);
    });
  }

  let answered = new Array(questions.length).fill(false);
  let score = 0;

  function updateScore() {
    scoreValueEl.textContent = score;
    if (answered.every(Boolean)) {
      showResult();
    }
  }

  function showResult() {
    resultBanner.classList.remove("hidden");
    const pct = scoreMax > 0 ? Math.round((score / scoreMax) * 100) : 0;
    let msg;
    if (pct >= 80) msg = `Excelente! Você acertou ${score} de ${scoreMax} pontos (${pct}%).`;
    else if (pct >= 50) msg = `Bom trabalho! Você fez ${score} de ${scoreMax} pontos (${pct}%). Continue praticando.`;
    else msg = `Você fez ${score} de ${scoreMax} pontos (${pct}%). Revise o conteúdo e tente novamente.`;
    resultText.textContent = msg;
    resultBanner.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function markQuestionResult(qIndex, isCorrect, card, badge, icon) {
    answered[qIndex] = true;
    if (isCorrect) {
      score += POINTS_PER_QUESTION;
      badge.textContent = `${POINTS_PER_QUESTION}/${POINTS_PER_QUESTION}`;
      icon.textContent = "✔";
      icon.classList.add("correct");
      card.classList.add("card-correct");
    } else {
      badge.textContent = `0/${POINTS_PER_QUESTION}`;
      icon.textContent = "✘";
      icon.classList.add("incorrect");
      card.classList.add("card-incorrect");
    }
    updateScore();
  }

  function renderMultipleChoice(q, qIndex, card, badge, icon) {
    const optionsWrap = document.createElement("div");
    optionsWrap.className = "options";

    q.options.forEach((optionText, oIndex) => {
      const option = document.createElement("label");
      option.className = "option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${qIndex}`;
      radio.value = oIndex;

      const circle = document.createElement("span");
      circle.className = "radio-circle";

      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = optionText;

      const mark = document.createElement("span");
      mark.className = "mark";

      option.appendChild(radio);
      option.appendChild(circle);
      option.appendChild(text);
      option.appendChild(mark);

      radio.addEventListener("change", () => {
        if (answered[qIndex]) return;
        const isCorrect = oIndex === q.correct;
        const options = card.querySelectorAll(".option");
        options.forEach((optEl, idx) => {
          optEl.querySelector("input").disabled = true;
          if (idx === oIndex) {
            const m = optEl.querySelector(".mark");
            optEl.classList.add(isCorrect ? "correct" : "incorrect");
            m.textContent = isCorrect ? "✔" : "✘";
          }
        });
        if (!isCorrect) {
          card.querySelector(".correct-answer").classList.remove("hidden");
        }
        markQuestionResult(qIndex, isCorrect, card, badge, icon);
      });

      optionsWrap.appendChild(option);
    });

    card.appendChild(optionsWrap);

    const correctWrap = document.createElement("div");
    correctWrap.className = "correct-answer hidden";

    const correctLabel = document.createElement("p");
    correctLabel.className = "correct-label";
    correctLabel.textContent = "Resposta correta";
    correctWrap.appendChild(correctLabel);

    const correctOption = document.createElement("label");
    correctOption.className = "option correct-option";

    const correctRadio = document.createElement("input");
    correctRadio.type = "radio";
    correctRadio.checked = true;
    correctRadio.disabled = true;

    const correctCircle = document.createElement("span");
    correctCircle.className = "radio-circle";

    const correctText = document.createElement("span");
    correctText.className = "option-text";
    correctText.textContent = q.options[q.correct];

    correctOption.appendChild(correctRadio);
    correctOption.appendChild(correctCircle);
    correctOption.appendChild(correctText);
    correctWrap.appendChild(correctOption);

    card.appendChild(correctWrap);
  }

  function renderCodeQuestion(q, qIndex, card, badge, icon) {
    const codeWrap = document.createElement("div");
    codeWrap.className = "code-wrap";

    const textarea = document.createElement("textarea");
    textarea.className = "code-input";
    textarea.spellcheck = false;
    textarea.placeholder = q.placeholder || "Digite seu código aqui...";
    codeWrap.appendChild(textarea);

    const actions = document.createElement("div");
    actions.className = "code-actions";

    const feedback = document.createElement("span");
    feedback.className = "code-feedback";

    const verifyBtn = document.createElement("button");
    verifyBtn.type = "button";
    verifyBtn.className = "btn btn-primary btn-sm";
    verifyBtn.textContent = "Verificar";

    actions.appendChild(feedback);
    actions.appendChild(verifyBtn);
    codeWrap.appendChild(actions);
    card.appendChild(codeWrap);

    const solutionWrap = document.createElement("div");
    solutionWrap.className = "correct-answer hidden";
    const solutionLabel = document.createElement("p");
    solutionLabel.className = "correct-label";
    solutionLabel.textContent = "Um exemplo de resposta correta";
    const solutionCode = document.createElement("pre");
    solutionCode.className = "solution-code";
    solutionCode.textContent = q.solution || "";
    solutionWrap.appendChild(solutionLabel);
    solutionWrap.appendChild(solutionCode);
    card.appendChild(solutionWrap);

    function verify() {
      if (answered[qIndex]) return;
      const value = textarea.value.trim();
      if (!value) {
        feedback.textContent = "Digite um código antes de verificar.";
        feedback.className = "code-feedback warn";
        return;
      }
      let isCorrect = false;
      try {
        isCorrect = !!q.check(value);
      } catch (e) {
        isCorrect = false;
      }

      textarea.disabled = true;
      verifyBtn.disabled = true;

      if (isCorrect) {
        feedback.textContent = "Correto!";
        feedback.className = "code-feedback ok";
        codeWrap.classList.add("code-correct");
      } else {
        feedback.textContent = "Não foi isso ainda.";
        feedback.className = "code-feedback bad";
        codeWrap.classList.add("code-incorrect");
        solutionWrap.classList.remove("hidden");
      }

      markQuestionResult(qIndex, isCorrect, card, badge, icon);
    }

    verifyBtn.addEventListener("click", verify);
    textarea.addEventListener("keydown", e => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) verify();
    });
  }

  function renderQuestions() {
    listEl.innerHTML = "";

    if (questions.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "Ainda não há perguntas neste nível.";
      listEl.appendChild(empty);
      return;
    }

    questions.forEach((q, qIndex) => {
      const card = document.createElement("section");
      card.className = "q-card";
      card.dataset.index = qIndex;

      const header = document.createElement("div");
      header.className = "q-header";

      const icon = document.createElement("span");
      icon.className = "q-icon";
      header.appendChild(icon);

      const qText = document.createElement("p");
      qText.className = "q-text";
      qText.textContent = q.question;
      header.appendChild(qText);

      const badge = document.createElement("span");
      badge.className = "q-badge";
      badge.textContent = `0/${POINTS_PER_QUESTION}`;
      header.appendChild(badge);

      card.appendChild(header);

      if (q.type === "code") {
        renderCodeQuestion(q, qIndex, card, badge, icon);
      } else {
        renderMultipleChoice(q, qIndex, card, badge, icon);
      }

      listEl.appendChild(card);
    });

    // Reaplica os tooltips de sigla no conteúdo recém-criado.
    if (window.applyAcronyms) window.applyAcronyms(listEl);
  }

  function resetQuiz() {
    answered = new Array(questions.length).fill(false);
    score = 0;
    scoreValueEl.textContent = 0;
    resultBanner.classList.add("hidden");
    renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  retryBtn.addEventListener("click", resetQuiz);

  document.body.classList.add(`theme-${modulo.cls}`);
  renderTabs();
  renderQuestions();
})();
