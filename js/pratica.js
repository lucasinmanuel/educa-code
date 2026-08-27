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
  const previewTitulo = document.getElementById("previewTitulo");
  const previewDica = document.getElementById("previewDica");

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

  // Desafios de lógica não têm tela: o painel da direita vira um relatório
  // dos casos de teste, que roda a cada tecla digitada.
  function montarDocumentoLogica() {
    const casos = escaparFechamento(JSON.stringify(desafio.casos), "script");
    const fn = JSON.stringify(desafio.funcao);

    return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8">
<style>
  body { margin:0; font-family:"Segoe UI",Arial,sans-serif; font-size:13px; color:#202124; padding:14px; }
  .resumo { font-weight:700; margin:0 0 12px; padding:10px 12px; border-radius:8px; }
  .resumo.ok { background:#e6f4ea; color:#1e7e34; }
  .resumo.nao { background:#fdf1da; color:#8a5a00; }
  .resumo.falta { background:#fce8e6; color:#c5221f; }
  .caso { border:1px solid #e2e4e9; border-radius:8px; padding:9px 11px; margin-bottom:7px; }
  .caso.ok { border-color:#a8d5ba; background:#f4fbf6; }
  .caso.falhou { border-color:#f0b3ad; background:#fef7f6; }
  .linha1 { display:flex; gap:7px; align-items:baseline; }
  .marca { font-weight:700; }
  .caso.ok .marca { color:#1e7e34; }
  .caso.falhou .marca { color:#c5221f; }
  .desc { flex:1; }
  code { font-family:Consolas,"Courier New",monospace; background:#f1f3f6; padding:1px 5px; border-radius:4px; font-size:12px; }
  .detalhe { margin-top:6px; font-size:12px; color:#5f6368; }
  .detalhe b { color:#202124; }
  .erro { color:#c5221f; }
</style>
</head>
<body>
<div id="saida"></div>

<script>
window.__erroAluno = null;
window.addEventListener("error", function (e) { window.__erroAluno = e.message; });
<\/script>

<script>
${escaparFechamento(codigo.js, "script")}
<\/script>

<script>
(function () {
  var casos = ${casos};
  var nome = ${fn};

  function mostra(v) {
    if (typeof v === "string") return '"' + v + '"';
    if (v === undefined) return "undefined";
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  }
  // Normaliza o espaço fino que o toLocaleString("pt-BR") usa em "R$ 1,00",
  // senao a comparacao de texto falharia por um caractere invisivel.
  function norm(v) { return typeof v === "string" ? v.replace(/\\u00A0/g, " ") : v; }
  function iguais(a, b) {
    if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) < 1e-9;
    return JSON.stringify(norm(a)) === JSON.stringify(norm(b));
  }

  var existe = false;
  try { existe = eval("typeof " + nome) === "function"; } catch (e) {}

  var out = casos.map(function (c) {
    if (!existe) return { desc: c.desc, chamada: c.chamada, ok: false, faltando: true };
    try {
      var obtido = eval(c.chamada);
      return { desc: c.desc, chamada: c.chamada, ok: iguais(obtido, c.esperado),
               obtido: mostra(obtido), esperado: mostra(c.esperado) };
    } catch (e) {
      return { desc: c.desc, chamada: c.chamada, ok: false, erro: String(e.message || e) };
    }
  });

  var acertos = out.filter(function (r) { return r.ok; }).length;
  var html = "";

  if (!existe) {
    html += '<p class="resumo falta">A função <code>' + nome + '</code> ainda não existe.' +
      (window.__erroAluno ? '<br><span class="erro">' + window.__erroAluno + '</span>' : '') + '</p>';
  } else {
    var cls = acertos === out.length ? "ok" : "nao";
    html += '<p class="resumo ' + cls + '">' +
      (acertos === out.length ? "Todos os casos passaram — " : "") +
      acertos + " de " + out.length + " casos</p>";
  }

  out.forEach(function (r) {
    html += '<div class="caso ' + (r.ok ? "ok" : "falhou") + '">' +
      '<div class="linha1"><span class="marca">' + (r.ok ? "✔" : "✘") + '</span>' +
      '<span class="desc">' + r.desc + '</span></div>' +
      '<div class="detalhe"><code>' + r.chamada + '</code>';
    if (r.erro) html += '<br><span class="erro">' + r.erro + '</span>';
    else if (!r.ok && !r.faltando) html += '<br>esperado <b>' + r.esperado + '</b> · obtido <b>' + r.obtido + '</b>';
    html += '</div></div>';
  });

  document.getElementById("saida").innerHTML = html;
  parent.postMessage({ tipo: "educacode-checks", resultados: out.map(function (r) {
    return { desc: r.desc, ok: r.ok };
  }) }, "*");
})();
<\/script>
</body>
</html>`;
  }

  function montarDocumento(comChecks) {
    if (desafio.tipo === "logica") return montarDocumentoLogica();

    const testes = comChecks && desafio.checks.length
      ? escaparFechamento(JSON.stringify(desafio.checks), "script")
      : null;

    const preparar = escaparFechamento(desafio.preparar || "", "script");

    // O script de checagem roda DENTRO do iframe e devolve o resultado por
    // postMessage. Assim o sandbox continua sem allow-same-origin.
    // As verificações rodam EM SEQUÊNCIA, e cada uma pode pedir uma espera
    // (`esperar`) — é assim que os desafios com Promise conseguem conferir o
    // estado depois que o carregamento termina.
    const scriptChecks = testes ? `
<script>
(function () {
  function rodar() {
    var testes = ${testes};
    var out = [];
    try { ${preparar} } catch (e) {}

    function proxima(i) {
      if (i >= testes.length) {
        parent.postMessage({ tipo: "educacode-checks", resultados: out }, "*");
        return;
      }
      var t = testes[i];
      // "antes" prepara o cenario (um clique, por exemplo) e so depois espera.
      if (t.antes) { try { (new Function(t.antes))(); } catch (e) {} }

      var executa = function () {
        try { out.push({ desc: t.desc, ok: !!(new Function(t.teste))() }); }
        catch (e) { out.push({ desc: t.desc, ok: false, erro: String(e.message || e) }); }
        proxima(i + 1);
      };
      if (t.esperar) setTimeout(executa, t.esperar);
      else executa();
    }
    proxima(0);
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
      if (!d) return;
      const total = d.tipo === "logica" ? (d.casos || []).length : (d.checks || []).length;
      if (!total) return;

      const salvo = window.Progresso && window.Progresso.obter("pratica", d.id);
      const feito = salvo && salvo.total > 0 && salvo.melhor === salvo.total;
      op.textContent = (feito ? "✔ " : "") + d.titulo;
    });
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    // Desafio de lógica é JS puro: HTML e CSS não entram.
    const langs = desafio.tipo === "logica"
      ? LINGUAGENS.filter(function (l) { return l.key === "js"; })
      : LINGUAGENS;

    langs.forEach(function (l) {
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
      : {
          html: desafio.inicial.html || "",
          css: desafio.inicial.css || "",
          js: desafio.inicial.js || ""
        };

    lang = desafio.tipo === "logica" ? "js" : "html";
    renderTabs();
    renderInfo();
    editor.value = codigo[lang];

    const temVerificacao = desafio.tipo === "logica"
      ? (desafio.casos || []).length > 0
      : (desafio.checks || []).length > 0;
    checkBtn.style.display = temVerificacao ? "" : "none";

    if (previewTitulo) {
      previewTitulo.textContent = desafio.tipo === "logica" ? "Casos de teste" : "Resultado";
    }
    if (previewDica) {
      previewDica.textContent = desafio.tipo === "logica" ? "roda a cada tecla" : "atualiza sozinho";
    }
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
  // Agrupa por etapa do projeto, para o aluno achar o que precisa.
  const grupos = {};
  window.DESAFIOS.forEach(function (d) {
    (grupos[d.nivel] = grupos[d.nivel] || []).push(d);
  });

  Object.keys(grupos).forEach(function (nivel) {
    const grupo = document.createElement("optgroup");
    grupo.label = nivel;
    grupos[nivel].forEach(function (d) {
      const op = document.createElement("option");
      op.value = d.id;
      op.textContent = d.titulo;
      grupo.appendChild(op);
    });
    selectEl.appendChild(grupo);
  });

  const inicial = new URLSearchParams(location.search).get("desafio");
  const existe = window.DESAFIOS.some(function (d) { return d.id === inicial; });
  const escolhido = existe ? inicial : window.DESAFIOS[0].id;
  selectEl.value = escolhido;

  marcarConcluidos();
  carregar(escolhido, true);
})();
