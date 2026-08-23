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

  // O nível é dividido em fases; cada fase é um quiz independente.
  const fases = window.Fases.doNivel(fullBank, nivelKey);
  const faseParam = parseInt(params.get("fase"), 10);
  const pedida = (faseParam >= 1 && faseParam <= fases.length) ? faseParam : 1;

  // Fase trancada não abre nem digitando a URL na mão: cai na última liberada.
  const bloqueada = window.Progresso && !window.Progresso.liberada(moduloKey, nivelKey, pedida);
  const faseNum = bloqueada
    ? window.Progresso.ultimaLiberada(moduloKey, nivelKey, fases.length)
    : pedida;

  let questions = fases[faseNum - 1] || [];
  const POINTS_PER_QUESTION = 2;
  let scoreMax = questions.length * POINTS_PER_QUESTION;

  const titleEl = document.getElementById("quizTitle");
  const tabsEl = document.getElementById("levelTabs");
  const faseTabsEl = document.getElementById("faseTabs");
  const listEl = document.getElementById("questionList");
  const scoreValueEl = document.getElementById("scoreValue");
  const scoreMaxEl = document.getElementById("scoreMax");
  const resultBanner = document.getElementById("resultBanner");
  const resultText = document.getElementById("resultText");
  const retryBtn = document.getElementById("retryBtn");
  const srAnnouncer = document.getElementById("srAnnouncer");
  const bestText = document.getElementById("bestText");
  const bestBadge = document.getElementById("bestBadge");
  const nextFaseBtn = document.getElementById("nextFaseBtn");

  const levelLabel = (LEVELS.find(l => l.key === nivelKey) || LEVELS[0]).label;
  titleEl.textContent = `${modulo.title} — ${levelLabel}`;
  scoreMaxEl.textContent = scoreMax;

  function renderTabs() {
    tabsEl.innerHTML = "";
    LEVELS.forEach(level => {
      const total = window.Fases.doNivel(fullBank, level.key).length;
      const tab = document.createElement("a");
      tab.className = "level-tab" + (level.key === nivelKey ? " active" : "");
      tab.href = `quiz.html?modulo=${moduloKey}&nivel=${level.key}&fase=1`;
      tab.textContent = level.label;
      if (total === 0) tab.classList.add("disabled");
      tabsEl.appendChild(tab);
    });
  }

  function renderFaseTabs() {
    faseTabsEl.innerHTML = "";
    if (fases.length <= 1) return;

    const rotulo = document.createElement("span");
    rotulo.className = "fase-rotulo";
    rotulo.textContent = "Fase";
    faseTabsEl.appendChild(rotulo);

    fases.forEach((perguntas, i) => {
      const n = i + 1;
      const liberada = !window.Progresso || window.Progresso.liberada(moduloKey, nivelKey, n);

      const tab = document.createElement(liberada ? "a" : "span");
      tab.className = "fase-tab" + (n === faseNum ? " active" : "");

      if (liberada) {
        tab.href = `quiz.html?modulo=${moduloKey}&nivel=${nivelKey}&fase=${n}`;
        tab.textContent = String(n);
        tab.title = `Fase ${n} — ${perguntas.length} perguntas`;
        if (window.Progresso && window.Progresso.concluida(moduloKey, nivelKey, n)) {
          tab.classList.add("done");
          tab.title += " (concluída)";
        }
      } else {
        tab.classList.add("locked");
        tab.textContent = "🔒";
        tab.title = `Fase ${n} trancada — conclua a fase ${n - 1} com nota máxima`;
        tab.setAttribute("aria-label", tab.title);
      }

      faseTabsEl.appendChild(tab);
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

    // Guarda o resultado antes de comparar, para o texto refletir o recorde novo.
    let recorde = null;
    if (window.Progresso) {
      const anterior = window.Progresso.obter(moduloKey, nivelKey, faseNum);
      recorde = window.Progresso.salvar(moduloKey, nivelKey, faseNum, score, scoreMax);

      if (score === scoreMax) {
        bestText.textContent = fases.length > 1
          ? `🏆 Fase ${faseNum} concluída com nota máxima!`
          : "🏆 Nível concluído com nota máxima!";
      } else if (anterior && anterior.melhor > score) {
        bestText.textContent = `Seu recorde neste nível continua sendo ${anterior.melhor} de ${scoreMax}.`;
      } else if (anterior && recorde.melhor > anterior.melhor) {
        bestText.textContent = `🎉 Novo recorde! Antes era ${anterior.melhor} de ${scoreMax}.`;
      } else {
        bestText.textContent = `Tentativa ${recorde.tentativas} nesta fase.`;
      }
      bestText.classList.remove("hidden");
    }

    // Caminho natural depois de terminar: seguir para a próxima fase.
    // Ela só libera com nota máxima, então o botão só aparece nesse caso.
    const proximaLiberada = !window.Progresso ||
      window.Progresso.liberada(moduloKey, nivelKey, faseNum + 1);

    if (nextFaseBtn) {
      if (faseNum < fases.length && !proximaLiberada) {
        nextFaseBtn.classList.add("hidden");
        bestText.textContent = `Faça ${scoreMax} de ${scoreMax} nesta fase para destrancar a fase ${faseNum + 1}. 🔒`;
        bestText.classList.remove("hidden");
      } else if (faseNum < fases.length) {
        nextFaseBtn.href = `quiz.html?modulo=${moduloKey}&nivel=${nivelKey}&fase=${faseNum + 1}`;
        nextFaseBtn.textContent = `Fase ${faseNum + 1} →`;
        nextFaseBtn.classList.remove("hidden");
      } else {
        const proximo = LEVELS[LEVELS.findIndex(l => l.key === nivelKey) + 1];
        if (proximo && window.Fases.doNivel(fullBank, proximo.key).length) {
          nextFaseBtn.href = `quiz.html?modulo=${moduloKey}&nivel=${proximo.key}&fase=1`;
          nextFaseBtn.textContent = `Ir para ${proximo.label} →`;
          nextFaseBtn.classList.remove("hidden");
        } else {
          nextFaseBtn.classList.add("hidden");
        }
      }
    }

    resultBanner.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function announce(message) {
    if (!srAnnouncer) return;
    // Limpar antes força o leitor de tela a reanunciar mensagens repetidas.
    srAnnouncer.textContent = "";
    setTimeout(function () { srAnnouncer.textContent = message; }, 60);
  }

  function markQuestionResult(qIndex, isCorrect, card, badge, icon) {
    answered[qIndex] = true;
    const q = questions[qIndex];

    if (isCorrect) {
      score += POINTS_PER_QUESTION;
      badge.textContent = `${POINTS_PER_QUESTION}/${POINTS_PER_QUESTION}`;
      icon.textContent = "✔";
      icon.classList.add("correct");
      card.classList.add("card-correct");
      announce(`Correto. ${POINTS_PER_QUESTION} pontos. Placar: ${score} de ${scoreMax}.`);
    } else {
      badge.textContent = `0/${POINTS_PER_QUESTION}`;
      icon.textContent = "✘";
      icon.classList.add("incorrect");
      card.classList.add("card-incorrect");
      const certa = q.type === "code" ? q.solution : q.options[q.correct];
      announce(`Incorreto. A resposta certa é: ${certa}. Placar: ${score} de ${scoreMax}.`);
    }
    updateScore();
  }

  /** Bloco "Por quê?" — aparece ao responder, tanto no acerto quanto no erro. */
  function buildExplanation(q) {
    if (!q.explicacao) return null;

    const wrap = document.createElement("div");
    wrap.className = "explicacao hidden";

    const label = document.createElement("p");
    label.className = "explicacao-label";
    label.textContent = "Por quê?";

    const texto = document.createElement("p");
    texto.className = "explicacao-texto";
    texto.textContent = q.explicacao;

    wrap.appendChild(label);
    wrap.appendChild(texto);
    return wrap;
  }

  function revealExplanation(card) {
    const bloco = card.querySelector(".explicacao");
    if (bloco) bloco.classList.remove("hidden");
  }

  function renderMultipleChoice(q, qIndex, card, badge, icon) {
    const optionsWrap = document.createElement("div");
    optionsWrap.className = "options";
    // Agrupa as alternativas para o leitor de tela ler "1 de 4" e associar
    // o grupo ao enunciado da pergunta.
    optionsWrap.setAttribute("role", "radiogroup");
    optionsWrap.setAttribute("aria-labelledby", `qtext-${qIndex}`);

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
        revealExplanation(card);
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

    const explicacao = buildExplanation(q);
    if (explicacao) card.appendChild(explicacao);
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

    const explicacao = buildExplanation(q);
    if (explicacao) card.appendChild(explicacao);

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

      revealExplanation(card);
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
      qText.id = `qtext-${qIndex}`;
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

  // Mostra o recorde anterior desta fase, se houver.
  if (window.Progresso && bestBadge) {
    const salvo = window.Progresso.obter(moduloKey, nivelKey, faseNum);
    if (salvo) {
      const concluido = salvo.total > 0 && salvo.melhor === salvo.total;
      bestBadge.textContent = concluido
        ? `🏆 Melhor: ${salvo.melhor}/${salvo.total}`
        : `Melhor: ${salvo.melhor}/${salvo.total}`;
      bestBadge.classList.remove("hidden");
      if (concluido) bestBadge.classList.add("done");
    }
  }

  document.body.classList.add(`theme-${modulo.cls}`);
  renderTabs();
  renderFaseTabs();
  renderQuestions();
})();
