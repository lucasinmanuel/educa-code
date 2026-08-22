(function () {
  const grid = document.getElementById("learnGrid");
  const summaryList = document.getElementById("summaryList");

  // ---------- Realce de sintaxe ----------
  const KEYWORDS = {
    js: ["const", "let", "var", "function", "return", "if", "else", "for", "while", "async",
      "await", "class", "new", "import", "from", "export", "default", "try", "catch",
      "throw", "typeof", "this", "true", "false", "null", "undefined"],
    java: ["public", "private", "protected", "class", "interface", "static", "void", "return",
      "if", "else", "for", "while", "new", "import", "package", "extends", "implements",
      "try", "catch", "throws", "final", "String", "int", "double", "boolean", "true", "false", "null"],
    python: ["def", "return", "if", "elif", "else", "for", "while", "import", "from", "class",
      "try", "except", "raise", "with", "as", "in", "not", "and", "or", "True", "False", "None", "print"],
    sql: ["SELECT", "FROM", "WHERE", "INSERT", "INTO", "VALUES", "UPDATE", "SET", "DELETE",
      "CREATE", "TABLE", "PRIMARY", "KEY", "FOREIGN", "REFERENCES", "NOT", "NULL", "UNIQUE",
      "JOIN", "ON", "AND", "OR", "INTEGER", "TEXT", "REAL"],
    yaml: ["name", "on", "jobs", "steps", "runs-on", "uses", "run"],
    docker: ["FROM", "WORKDIR", "COPY", "RUN", "EXPOSE", "CMD", "ENV", "ADD", "ENTRYPOINT"]
  };

  const COMMENT_PREFIX = {
    js: "//", java: "//", python: "#", sql: "--", yaml: "#", docker: "#", json: null, html: null, css: "/*"
  };

  function langFromFile(name) {
    if (name === "Dockerfile") return "docker";
    const ext = name.split(".").pop().toLowerCase();
    const map = {
      js: "js", jsx: "js", java: "java", py: "python", sql: "sql",
      yml: "yaml", yaml: "yaml", json: "json", html: "html", css: "css", txt: "text"
    };
    return map[ext] || "text";
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Realça uma linha por vez (evita tokens quebrados entre linhas).
  function highlightLine(line, lang) {
    const escaped = escapeHtml(line);
    const prefix = COMMENT_PREFIX[lang];

    // Linha inteira de comentário
    if (prefix && escaped.trim().indexOf(prefix) === 0) {
      return '<span class="tok-comment">' + escaped + "</span>";
    }

    const kws = KEYWORDS[lang] || [];
    const parts = ['("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')'];
    if (prefix) {
      const esc = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      parts.push("(" + esc + "[^\\n]*)");
    }
    if (kws.length) parts.push("\\b(" + kws.join("|") + ")\\b");
    parts.push("\\b(\\d+(?:\\.\\d+)?)\\b");

    const re = new RegExp(parts.join("|"), "g");

    return escaped.replace(re, function (match, str, comment, keyword, num) {
      if (str) return '<span class="tok-string">' + str + "</span>";
      if (comment) return '<span class="tok-comment">' + comment + "</span>";
      if (keyword) return '<span class="tok-keyword">' + keyword + "</span>";
      if (num) return '<span class="tok-number">' + num + "</span>";
      return match;
    });
  }

  function renderCode(code, lang) {
    return code.split("\n").map(function (line, i) {
      return '<div class="code-line">' +
        '<span class="ln">' + (i + 1) + "</span>" +
        '<span class="lc">' + (highlightLine(line, lang) || "&nbsp;") + "</span>" +
        "</div>";
    }).join("");
  }

  // ---------- Editor simulado ----------
  const modal = document.getElementById("editorModal");
  const modalTitle = document.getElementById("editorTermName");
  const langTabs = document.getElementById("langTabs");
  const fileList = document.getElementById("fileList");
  const editorTabs = document.getElementById("editorTabs");
  const codeArea = document.getElementById("codeArea");
  const statusLang = document.getElementById("statusLang");
  const statusFile = document.getElementById("statusFile");

  let current = { term: null, lang: null, fileIndex: 0 };

  function openEditor(term) {
    const byLang = window.EXAMPLES[term.id];
    if (!byLang) return;

    current.term = term;
    current.lang = Object.keys(byLang)[0];
    current.fileIndex = 0;

    modalTitle.textContent = term.name;
    renderLangTabs();
    renderFiles();

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function closeEditor() {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  function renderLangTabs() {
    const byLang = window.EXAMPLES[current.term.id];
    langTabs.innerHTML = "";

    Object.keys(byLang).forEach(function (langKey) {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "lang-tab" + (langKey === current.lang ? " active" : "");
      tab.textContent = window.LANG_LABELS[langKey] || langKey;
      tab.addEventListener("click", function () {
        current.lang = langKey;
        current.fileIndex = 0;
        renderLangTabs();
        renderFiles();
      });
      langTabs.appendChild(tab);
    });
  }

  function renderFiles() {
    const files = window.EXAMPLES[current.term.id][current.lang];

    fileList.innerHTML = "";
    editorTabs.innerHTML = "";

    files.forEach(function (file, i) {
      const isActive = i === current.fileIndex;

      const item = document.createElement("li");
      const itemBtn = document.createElement("button");
      itemBtn.type = "button";
      itemBtn.className = "file-item" + (isActive ? " active" : "");
      itemBtn.innerHTML = '<span class="file-dot"></span>' + escapeHtml(file.name);
      itemBtn.addEventListener("click", function () {
        current.fileIndex = i;
        renderFiles();
      });
      item.appendChild(itemBtn);
      fileList.appendChild(item);

      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "editor-tab" + (isActive ? " active" : "");
      tab.textContent = file.name;
      tab.addEventListener("click", function () {
        current.fileIndex = i;
        renderFiles();
      });
      editorTabs.appendChild(tab);
    });

    const file = files[current.fileIndex];
    const lang = langFromFile(file.name);
    codeArea.innerHTML = renderCode(file.code, lang);
    codeArea.scrollTop = 0;
    statusLang.textContent = window.LANG_LABELS[current.lang] || current.lang;
    statusFile.textContent = file.name;
  }

  modal.querySelector(".editor-close").addEventListener("click", closeEditor);
  modal.querySelector(".editor-backdrop").addEventListener("click", closeEditor);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeEditor();
  });

  // ---------- Página ----------
  window.TERMS.forEach(function (term, index) {
    // Índice
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.className = "summary-link";
    link.href = "#" + term.id;
    link.innerHTML =
      '<span class="summary-num">' + (index + 1) + "</span>" +
      '<span class="summary-icon">' + term.icon + "</span>" +
      '<span class="summary-text">' + escapeHtml(term.name) + "</span>";
    li.appendChild(link);
    summaryList.appendChild(li);

    // Card
    const card = document.createElement("article");
    card.className = "term-card";
    card.id = term.id;

    const header = document.createElement("header");
    header.className = "term-header";

    const icon = document.createElement("span");
    icon.className = "term-icon";
    icon.textContent = term.icon;

    const info = document.createElement("div");
    info.className = "term-info";

    const name = document.createElement("h2");
    name.className = "term-name";
    name.textContent = (index + 1) + ". " + term.name;

    const short = document.createElement("p");
    short.className = "term-short";
    short.textContent = term.short;

    info.appendChild(name);
    info.appendChild(short);
    header.appendChild(icon);
    header.appendChild(info);

    if (window.EXAMPLES[term.id]) {
      const exampleBtn = document.createElement("button");
      exampleBtn.type = "button";
      exampleBtn.className = "example-btn";
      exampleBtn.innerHTML = "&lt;/&gt; Ver exemplo";
      exampleBtn.addEventListener("click", function () { openEditor(term); });
      header.appendChild(exampleBtn);
    }

    const figure = document.createElement("figure");
    figure.className = "term-figure";

    const diagram = document.createElement("div");
    diagram.className = "diagram-box";
    diagram.innerHTML = term.svg;

    const caption = document.createElement("figcaption");
    caption.textContent = term.caption;

    figure.appendChild(diagram);
    figure.appendChild(caption);

    card.appendChild(header);
    card.appendChild(figure);
    grid.appendChild(card);
  });

  if (window.applyAcronyms) {
    window.applyAcronyms(summaryList);
    window.applyAcronyms(grid);
  }
})();
