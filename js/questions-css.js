window.QUESTIONS_CSS = [
  // ---------- INICIANTE ----------
  {
    level: "iniciante",
    question: "Qual propriedade CSS define a cor do texto de um elemento?",
    options: ["text-color", "font-color", "color", "text-style"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS define a cor de fundo de um elemento?",
    options: ["background-color", "back-color", "fill-color", "bg"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS alinha o texto ao centro dentro de um elemento?",
    options: ["align-text: middle", "text-align: center", "center: text", "justify: center"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS controla o espaçamento EXTERNO de um elemento, fora de sua borda?",
    options: ["padding", "spacing", "margin", "gap"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual valor da propriedade display faz um elemento desaparecer completamente do layout da página?",
    options: ["hidden", "invisible", "none", "collapse"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS define a altura de um elemento?",
    options: ["height", "size", "length", "tall"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS deixa os cantos de um elemento arredondados?",
    options: ["corner-radius", "round-corner", "border-radius", "edge-radius"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual seletor CSS aplica um estilo a TODOS os elementos de uma página?",
    options: ["#all", ".all", "all", "*"],
    correct: 3
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS define o tipo de cursor exibido ao passar o mouse sobre um elemento?",
    options: ["mouse", "pointer-type", "cursor", "hover-style"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS controla a transparência (opacidade) de um elemento?",
    options: ["opacity", "transparency", "visibility", "alpha"],
    correct: 0
  },

  // ---------- INTERMEDIÁRIO ----------
  {
    level: "intermediario",
    question: "Qual unidade de medida CSS é relativa ao tamanho da fonte do elemento PAI?",
    options: ["px", "rem", "em", "vh"],
    correct: 2
  },
  {
    level: "intermediario",
    question: "Em relação a que elemento position: absolute posiciona um elemento?",
    options: [
      "Sempre em relação à janela do navegador (viewport)",
      "Em relação ao ancestral posicionado mais próximo (que não seja static)",
      "Em relação ao elemento seguinte na página",
      "Não tem relação com nenhum outro elemento"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual propriedade CSS controla o espaço entre os itens dentro de um container flex ou grid?",
    options: ["gap", "spacing", "margin-between", "space"],
    correct: 0
  },
  {
    level: "intermediario",
    question: "O que box-sizing: border-box altera no cálculo de largura e altura de um elemento?",
    options: [
      "Faz o elemento ignorar a largura definida",
      "Inclui padding e border dentro da largura/altura definidas",
      "Remove a borda do elemento",
      "Nada, é apenas cosmético"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual seletor CSS seleciona apenas os <p> que são filhos diretos de uma <div>?",
    options: ["div p", "div > p", "div + p", "div ~ p"],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Para que serve a media query @media (max-width: 768px)?",
    options: [
      "Aplica os estilos apenas em telas maiores que 768px",
      "Aplica os estilos quando a largura da tela for de até 768px (responsivo)",
      "Define que a página terá exatamente 768px de largura",
      "Desativa o CSS em telas pequenas"
    ],
    correct: 1
  },

  // ---------- AVANÇADO (código) ----------
  {
    level: "avancado",
    type: "code",
    question: 'Escreva uma regra CSS que deixe o texto de todos os elementos com classe "destaque" em negrito e com a cor azul.',
    placeholder: ".destaque {\n  font-weight: bold;\n  color: blue;\n}",
    solution: ".destaque {\n  font-weight: bold;\n  color: blue;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /\.destaque\{[^}]*font-weight:bold[^}]*\}/.test(n)
        && /\.destaque\{[^}]*color:(blue|#00f|#0000ff)[^}]*\}/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Escreva uma regra para o elemento com id "menu" que use display flex e centralize os itens horizontal e verticalmente.',
    placeholder: "#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    solution: "#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /#menu\{[^}]*display:flex[^}]*\}/.test(n)
        && /justify-content:center/.test(n)
        && /align-items:center/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma regra que dê a todas as tags <img> uma borda arredondada de 8px.",
    placeholder: "img {\n  border-radius: 8px;\n}",
    solution: "img {\n  border-radius: 8px;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /img\{[^}]*border-radius:8px[^}]*\}/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma media query que mude a cor de fundo do body para preto quando a largura da tela for menor que 600px.",
    placeholder: "@media (max-width: 600px) {\n  body {\n    background-color: black;\n  }\n}",
    solution: "@media (max-width: 600px) {\n  body {\n    background-color: black;\n  }\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /@media\(max-width:600px\)/.test(n)
        && /body\{[^}]*background(-color)?:(black|#000|#000000)[^}]*\}/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma regra para .card com padding de 16px, uma sombra leve (box-shadow) e cantos arredondados de 12px.",
    placeholder: ".card {\n  padding: 16px;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.15);\n  border-radius: 12px;\n}",
    solution: ".card {\n  padding: 16px;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.15);\n  border-radius: 12px;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /\.card\{[^}]*padding:16px[^}]*\}/.test(n)
        && /box-shadow:[^;{}]+/.test(n)
        && /border-radius:12px/.test(n);
    }
  }
];
