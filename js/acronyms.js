// Dicionário de siglas + motor de tooltip.
// As siglas são detectadas automaticamente no texto da página.
window.ACRONYMS = {
  "HTML": { full: "HyperText Markup Language", pt: "Linguagem de Marcação de HiperTexto — dá a estrutura da página." },
  "CSS": { full: "Cascading Style Sheets", pt: "Folhas de Estilo em Cascata — cuida da aparência." },
  "JS": { full: "JavaScript", pt: "A linguagem que dá comportamento à página." },
  "DOM": { full: "Document Object Model", pt: "Modelo de Objetos do Documento — a árvore que o navegador monta a partir do HTML." },
  "API": { full: "Application Programming Interface", pt: "Interface de Programação de Aplicações — a ponte entre dois sistemas." },
  "HTTP": { full: "HyperText Transfer Protocol", pt: "Protocolo de Transferência de HiperTexto — o idioma entre navegador e servidor." },
  "HTTPS": { full: "HyperText Transfer Protocol Secure", pt: "O mesmo que HTTP, porém criptografado." },
  "URL": { full: "Uniform Resource Locator", pt: "O endereço de um recurso na web." },
  "JSON": { full: "JavaScript Object Notation", pt: "Formato de texto usado para trocar dados entre sistemas." },
  "XML": { full: "eXtensible Markup Language", pt: "Linguagem de marcação para dados, anterior ao JSON." },
  "SQL": { full: "Structured Query Language", pt: "Linguagem de Consulta Estruturada — usada para falar com o banco de dados." },
  "CRUD": { full: "Create, Read, Update, Delete", pt: "As quatro operações básicas sobre dados: criar, ler, editar e apagar." },
  "REST": { full: "Representational State Transfer", pt: "Estilo de arquitetura mais usado para construir APIs." },
  "ORM": { full: "Object-Relational Mapping", pt: "Mapeamento Objeto-Relacional — usa objetos no lugar de SQL puro." },
  "UI": { full: "User Interface", pt: "Interface do Usuário — o que aparece na tela." },
  "UX": { full: "User Experience", pt: "Experiência do Usuário — como é usar o produto." },
  "SPA": { full: "Single Page Application", pt: "Aplicação de Página Única — troca o conteúdo sem recarregar." },
  "PWA": { full: "Progressive Web App", pt: "Site que se instala e funciona como aplicativo." },
  "MVC": { full: "Model-View-Controller", pt: "Modelo-Visão-Controlador — forma de separar as responsabilidades do código." },
  "CLI": { full: "Command Line Interface", pt: "Interface de Linha de Comando — o terminal." },
  "IDE": { full: "Integrated Development Environment", pt: "Ambiente de Desenvolvimento Integrado — como o VS Code." },
  "CDN": { full: "Content Delivery Network", pt: "Rede de servidores que entrega arquivos mais perto do usuário." },
  "DNS": { full: "Domain Name System", pt: "Sistema que traduz um domínio para o endereço IP do servidor." },
  "IP": { full: "Internet Protocol", pt: "O endereço numérico de uma máquina na rede." },
  "JWT": { full: "JSON Web Token", pt: "Token assinado usado para autenticar usuários." },
  "SVG": { full: "Scalable Vector Graphics", pt: "Gráficos Vetoriais Escaláveis — imagem que não perde qualidade." },
  "SEO": { full: "Search Engine Optimization", pt: "Otimização para aparecer melhor nos buscadores." },
  "AJAX": { full: "Asynchronous JavaScript and XML", pt: "Buscar dados do servidor sem recarregar a página." },
  "CI/CD": { full: "Continuous Integration / Continuous Delivery", pt: "Testar e publicar o projeto de forma automática." },
  "MIT": { full: "Massachusetts Institute of Technology", pt: "Licença permissiva criada no MIT: pode usar, copiar e modificar." }
};

(function () {
  const DICT = window.ACRONYMS;

  // Siglas maiores primeiro, para "HTTPS" ganhar de "HTTP".
  const keys = Object.keys(DICT).sort(function (a, b) { return b.length - a.length; });
  const pattern = keys.map(function (k) {
    return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("|");

  // Sensível a maiúsculas: evita casar com palavras comuns ("dom", "ui").
  const RE = new RegExp("(?<![\\w-])(" + pattern + ")(?![\\w-])", "g");

  // Onde NUNCA mexer: código, formulários, o editor simulado e SVG.
  // Dentro de <svg> um <abbr> é HTML inválido e simplesmente não renderiza —
  // envolver o texto ali faria a palavra sumir do diagrama.
  const SKIP = "code, pre, script, style, textarea, input, svg, .code-area, .code-input, " +
    ".solution-code, .acronym, .acronym-tip, .editor-window";

  let tip = null;
  let activeEl = null;

  function buildTip() {
    tip = document.createElement("div");
    tip.className = "acronym-tip";
    tip.id = "acronymTip";
    tip.setAttribute("role", "tooltip");
    tip.innerHTML =
      '<span class="tip-sigla"></span>' +
      '<span class="tip-full"></span>' +
      '<span class="tip-pt"></span>';
    document.body.appendChild(tip);
  }

  function show(el) {
    const sigla = el.dataset.acr;
    const entry = DICT[sigla];
    if (!entry) return;

    activeEl = el;
    tip.querySelector(".tip-sigla").textContent = sigla;
    tip.querySelector(".tip-full").textContent = entry.full;
    tip.querySelector(".tip-pt").textContent = entry.pt;

    tip.classList.add("visible");
    el.setAttribute("aria-describedby", "acronymTip");

    // Mede depois de exibir, para posicionar com o tamanho real.
    const r = el.getBoundingClientRect();
    const t = tip.getBoundingClientRect();

    let left = r.left + r.width / 2 - t.width / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - t.width - 10));

    let top = r.top - t.height - 10;
    const below = top < 10;
    if (below) top = r.bottom + 10;

    tip.classList.toggle("below", below);
    tip.style.left = Math.round(left) + "px";
    tip.style.top = Math.round(top) + "px";
  }

  function hide() {
    if (!tip) return;
    tip.classList.remove("visible");
    if (activeEl) {
      activeEl.removeAttribute("aria-describedby");
      activeEl = null;
    }
  }

  function wrapTextNode(node) {
    const text = node.nodeValue;
    RE.lastIndex = 0;
    if (!RE.test(text)) return;

    RE.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0;
    let m;

    while ((m = RE.exec(text)) !== null) {
      if (m.index > last) {
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      }
      const abbr = document.createElement("abbr");
      abbr.className = "acronym";
      abbr.dataset.acr = m[1];
      abbr.tabIndex = 0;
      abbr.textContent = m[1];
      frag.appendChild(abbr);
      last = m.index + m[1].length;
    }

    if (last < text.length) {
      frag.appendChild(document.createTextNode(text.slice(last)));
    }
    node.parentNode.replaceChild(frag, node);
  }

  window.applyAcronyms = function (root) {
    const scope = root || document.body;
    if (!tip) buildTip();

    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || parent.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(wrapTextNode);
  };

  // Um único listener no documento cobre também o conteúdo criado depois.
  document.addEventListener("mouseover", function (e) {
    const el = e.target.closest && e.target.closest(".acronym");
    if (el) show(el);
  });

  document.addEventListener("mouseout", function (e) {
    const el = e.target.closest && e.target.closest(".acronym");
    if (el && el === activeEl) hide();
  });

  document.addEventListener("focusin", function (e) {
    const el = e.target.closest && e.target.closest(".acronym");
    if (el) show(el);
  });

  document.addEventListener("focusout", function (e) {
    const el = e.target.closest && e.target.closest(".acronym");
    if (el && el === activeEl) hide();
  });

  // Toque: abre no primeiro toque em vez de exigir hover.
  document.addEventListener("click", function (e) {
    const el = e.target.closest && e.target.closest(".acronym");
    if (el) {
      if (el === activeEl && tip.classList.contains("visible")) hide();
      else show(el);
      return;
    }
    hide();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hide();
  });

  window.addEventListener("scroll", hide, { passive: true });
  window.addEventListener("resize", hide);

  document.addEventListener("DOMContentLoaded", function () {
    window.applyAcronyms();
  });
})();
