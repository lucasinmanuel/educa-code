(function () {
  const LINGUAGENS = [
    { key: "html", label: "HTML" },
    { key: "css", label: "CSS" },
    { key: "js", label: "JavaScript" }
  ];

  const selectEl = document.getElementById("desafioSelect");
  const infoEl = document.getElementById("desafioInfo");
  const tabsEl = document.getElementById("codeTabs");
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  const checkBtn = document.getElementById("checkBtn");
  const resetBtn = document.getElementById("resetCodeBtn");
  const resultEl = document.getElementById("checkResult");

  const CHAVE_RASCUNHO = "educacode:pratica:v1";

  let desafio = null;
  let lang = "html";
  let codigo = { html: "", css: "", js: "" };
  let timer = null;
  let esperandoChecagem = false;

  // ---------- rascunho no navegador ----------
  function lerRascunhos() {
    try {
      return JSON.parse(localStorage.getItem(CHAVE_RASCUNHO) || "{}");
    } catch (e) {
      return {};
    }
  }

  function salvarRascunho() {
    try {
      const todos = lerRascunhos();
      todos[desafio.id] = codigo;
      localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(todos));
    } catch (e) {
      // Sem espaço ou aba anônima: o editor continua funcionando sem salvar.
    }
  }

  // ---------- montagem do preview ----------

  // Sem isso, um "</script>" digitado pelo aluno (mesmo dentro de uma string)
  // fecha a tag antes da hora e quebra o preview inteiro. O mesmo vale para
  // "</style>" dentro do CSS.
  function escaparFechamento(texto, tag) {
    return String(texto || "").replace(
      new RegExp("</(" + tag + ")", "gi"),
      "<\\/$1"
    );
  }

  function montarDocumento(comChecks) {
    const testes = comChecks && desafio.checks.length
      ? escaparFechamento(JSON.stringify(desafio.checks), "script")
      : null;

    // O script de checagem roda DENTRO do iframe e devolve o resultado por
    // postMessage. Assim o sandbox continua sem allow-same-origin.
    const scriptChecks = testes ? `
<script>
(function () {
  function rodar() {
    var testes = ${testes};
    var out = testes.map(function (t) {
      try { return { desc: t.desc, ok: !!(new Function(t.teste))() }; }
      catch (e) { return { desc: t.desc, ok: false, erro: String(e.message || e) }; }
    });
    parent.postMessage({ tipo: "educacode-checks", resultados: out }, "*");
  }
  // Deixa o CSS e o script do aluno terminarem antes de avaliar.
  if (document.readyState === "complete") setTimeout(rodar, 60);
  else window.addEventListener("load", function () { setTimeout(rodar, 60); });
})();
<\/script>` : "";

    // Captura erros do código do aluno e mostra no lugar do preview em branco.
    const scriptErros = `
<script>
window.addEventListener("error", function (e) {
  parent.postMessage({ tipo: "educacode-erro", msg: e.message }, "*");
});
<\/script>`;

    return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><style>${escaparFechamento(codigo.css, "style")}</style></head>
<body>
${codigo.html}
${scriptErros}
<script>
try {
${escaparFechamento(codigo.js, "script")}
} catch (e) {
  parent.postMessage({ tipo: "educacode-erro", msg: String(e.message || e) }, "*");
}
<\/script>
${scriptChecks}
</body>
</html>`;
  }

  function atualizarPreview(comChecks) {
    preview.srcdoc = montarDocumento(comChecks);
  }

  function agendarPreview() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      atualizarPreview(false);
      salvarRascunho();
    }, 400);
  }

  // ---------- resultado da verificação ----------
  window.addEventListener("message", function (e) {
    const d = e.data;
    if (!d || typeof d !== "object") return;

    if (d.tipo === "educacode-erro") {
      mostrarErro(d.msg);
      return;
    }

    if (d.tipo === "educacode-checks" && esperandoChecagem) {
      esperandoChecagem = false;
      mostrarResultado(d.resultados);
    }
  });

  function mostrarErro(msg) {
    resultEl.className = "check-result erro";
    resultEl.innerHTML = "";
    const t = document.createElement("p");
    t.className = "check-titulo";
    t.textContent = "Erro no seu JavaScript: " + msg;
    resultEl.appendChild(t);
  }

  function mostrarResultado(resultados) {
    const acertos = resultados.filter(function (r) { return r.ok; }).length;
    const total = resultados.length;
    const completo = acertos === total;

    resultEl.className = "check-result " + (completo ? "sucesso" : "parcial");
    resultEl.innerHTML = "";

    const titulo = document.createElement("p");
    titulo.className = "check-titulo";
    titulo.textContent = completo
      ? "🎉 Desafio concluído! " + acertos + " de " + total + "."
      : "Quase lá — " + acertos + " de " + total + " requisitos.";
    resultEl.appendChild(titulo);

    const lista = document.createElement("ul");
    lista.className = "check-lista";
    resultados.forEach(function (r) {
      const li = document.createElement("li");
      li.className = r.ok ? "ok" : "falhou";
      li.textContent = (r.ok ? "✔ " : "✘ ") + r.desc;
      lista.appendChild(li);
    });
    resultEl.appendChild(lista);

    if (completo && window.Progresso) {
      window.Progresso.salvar("pratica", desafio.id, total, total);
      marcarConcluidos();
    }
  }

  // ---------- interface ----------
  function marcarConcluidos() {
    Array.prototype.forEach.call(selectEl.options, function (op) {
      const d = window.DESAFIOS.find(function (x) { return x.id === op.value; });
      if (!d || !d.checks.length) return;
      const salvo = window.Progresso && window.Progresso.obter("pratica", d.id);
      const feito = salvo && salvo.total > 0 && salvo.melhor === salvo.total;
      op.textContent = (feito ? "✔ " : "") + d.nivel + " · " + d.titulo;
    });
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    LINGUAGENS.forEach(function (l) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "code-tab" + (l.key === lang ? " active" : "");
      b.textContent = l.label;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(l.key === lang));
      b.addEventListener("click", function () {
        codigo[lang] = editor.value;
        lang = l.key;
        renderTabs();
        editor.value = codigo[lang];
        editor.focus();
      });
      tabsEl.appendChild(b);
    });
  }

  function renderInfo() {
    infoEl.innerHTML = "";

    const obj = document.createElement("p");
    obj.className = "desafio-objetivo";
    obj.textContent = desafio.objetivo;
    infoEl.appendChild(obj);

    if (desafio.dicas.length) {
      const det = document.createElement("details");
      det.className = "desafio-dicas";
      const sum = document.createElement("summary");
      sum.textContent = "Ver dicas";
      det.appendChild(sum);
      const ul = document.createElement("ul");
      desafio.dicas.forEach(function (d) {
        const li = document.createElement("li");
        li.textContent = d;
        ul.appendChild(li);
      });
      det.appendChild(ul);
      infoEl.appendChild(det);
    }
  }

  function carregar(id, usarRascunho) {
    desafio = window.DESAFIOS.find(function (d) { return d.id === id; }) || window.DESAFIOS[0];

    const rascunho = usarRascunho ? lerRascunhos()[desafio.id] : null;
    codigo = rascunho
      ? { html: rascunho.html || "", css: rascunho.css || "", js: rascunho.js || "" }
      : { html: desafio.inicial.html, css: desafio.inicial.css, js: desafio.inicial.js };

    lang = "html";
    renderTabs();
    renderInfo();
    editor.value = codigo[lang];

    checkBtn.style.display = desafio.checks.length ? "" : "none";
    resultEl.className = "check-result hidden";
    resultEl.innerHTML = "";

    atualizarPreview(false);
  }

  editor.addEventListener("input", function () {
    codigo[lang] = editor.value;
    agendarPreview();
  });

  // Tab dentro do editor deve indentar, não pular para o próximo campo.
  editor.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const ini = editor.selectionStart;
    const fim = editor.selectionEnd;
    editor.value = editor.value.slice(0, ini) + "  " + editor.value.slice(fim);
    editor.selectionStart = editor.selectionEnd = ini + 2;
    codigo[lang] = editor.value;
    agendarPreview();
  });

  checkBtn.addEventListener("click", function () {
    codigo[lang] = editor.value;
    esperandoChecagem = true;
    resultEl.className = "check-result parcial";
    resultEl.textContent = "Verificando...";
    atualizarPreview(true);

    // Se o iframe não responder (erro grave no HTML do aluno), não trava a UI.
    setTimeout(function () {
      if (!esperandoChecagem) return;
      esperandoChecagem = false;
      resultEl.className = "check-result erro";
      resultEl.textContent = "Não consegui avaliar. Veja se há algum erro no seu código.";
    }, 3000);
  });

  resetBtn.addEventListener("click", function () {
    if (!confirm("Voltar ao código inicial deste desafio? Você vai perder o que escreveu.")) return;
    carregar(desafio.id, false);
    salvarRascunho();
  });

  selectEl.addEventListener("change", function () {
    carregar(selectEl.value, true);
  });

  // ---------- inicialização ----------
  window.DESAFIOS.forEach(function (d) {
    const op = document.createElement("option");
    op.value = d.id;
    op.textContent = d.nivel + " · " + d.titulo;
    selectEl.appendChild(op);
  });

  const inicial = new URLSearchParams(location.search).get("desafio");
  const existe = window.DESAFIOS.some(function (d) { return d.id === inicial; });
  const escolhido = existe ? inicial : window.DESAFIOS[0].id;
  selectEl.value = escolhido;

  marcarConcluidos();
  carregar(escolhido, true);
})();
