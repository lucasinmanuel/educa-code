window.QUESTIONS_HTML = [
  // ---------- INICIANTE ----------
  {
    level: "iniciante",
    question: "Qual tag HTML é utilizada para criar um parágrafo de texto?",
    options: ["<p>", "<text>", "<par>", "<span>"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual tag insere uma quebra de linha sem iniciar um novo parágrafo?",
    options: ["<break>", "<br>", "<newline>", "<lb>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual atributo da tag <img> define o caminho (endereço) do arquivo de imagem a ser exibido?",
    options: ["href", "src", "path", "link"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag é utilizada para criar uma tabela em HTML?",
    options: ["<grid>", "<table>", "<tab>", "<rows>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual elemento de formulário permite que o usuário digite um texto com várias linhas?",
    options: ["<input>", "<textarea>", "<multitext>", "<longtext>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag insere uma linha horizontal usada para separar visualmente seções de conteúdo?",
    options: ["<line>", "<divider>", "<hr>", "<split>"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual tag define os itens de uma lista (ordenada ou não ordenada)?",
    options: ["<item>", "<li>", "<list-item>", "<row>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag é usada para criar uma lista ORDENADA (numerada)?",
    options: ["<ul>", "<ol>", "<list>", "<numlist>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag representa o conteúdo principal e único de uma página, sem repetir em outras páginas do site?",
    options: ["<main>", "<content>", "<body>", "<primary>"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual atributo do <input> define um texto de exemplo exibido dentro do campo antes de o usuário digitar?",
    options: ["hint", "placeholder", "example", "default"],
    correct: 1
  },

  // ---------- INTERMEDIÁRIO ----------
  {
    level: "intermediario",
    question: "Qual prefixo de atributo permite armazenar dados personalizados em um elemento HTML sem afetar sua semântica?",
    options: ["data-*", "custom-*", "x-*", "meta-*"],
    correct: 0
  },
  {
    level: "intermediario",
    question: "Qual tag é utilizada para agrupar as linhas do cabeçalho de uma tabela?",
    options: ["<thead>", "<tbody>", "<tfoot>", "<caption>"],
    correct: 0
  },
  {
    level: "intermediario",
    question: "O que a tag <iframe> permite fazer em uma página?",
    options: [
      "Criar uma animação de texto",
      "Embutir outro documento/página dentro da página atual",
      "Aumentar a velocidade de carregamento",
      "Criar um formulário oculto"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual atributo do formulário <form> define o método HTTP usado no envio dos dados (GET ou POST)?",
    options: ["action", "method", "type", "protocol"],
    correct: 1
  },
  {
    level: "intermediario",
    question: 'Para que serve usar rel="noopener noreferrer" em um link com target="_blank"?',
    options: [
      "Para deixar o link sublinhado",
      "Para abrir o link mais rápido",
      "Por segurança: evita que a nova página tenha acesso à página de origem via window.opener",
      "Para impedir que o link seja clicado duas vezes"
    ],
    correct: 2
  },
  {
    level: "intermediario",
    question: "Qual é a vantagem de associar um <label> a um <input> usando o atributo for?",
    options: [
      "Deixa o texto em negrito automaticamente",
      "Melhora a acessibilidade: clicar no texto do label também foca/marca o input",
      "Faz o input enviar os dados automaticamente",
      "Não existe nenhuma vantagem prática"
    ],
    correct: 1
  },

  // ---------- AVANÇADO (código) ----------
  {
    level: "avancado",
    type: "code",
    question: 'Escreva um link <a> que abra "https://exemplo.com" em uma nova aba, com o texto "Exemplo" e boas práticas de segurança (rel).',
    placeholder: '<a href="..." target="_blank" rel="...">Exemplo</a>',
    solution: '<a href="https://exemplo.com" target="_blank" rel="noopener noreferrer">Exemplo</a>',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<a[^>]*href="https:\/\/exemplo\.com"[^>]*>/.test(n)
        && /target="_blank"/.test(n)
        && /rel="[^"]*noopener[^"]*"/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie uma tag <img> com src "gato.png" e texto alternativo "Um gato dormindo".',
    placeholder: '<img src="gato.png" alt="...">',
    solution: '<img src="gato.png" alt="Um gato dormindo">',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<img[^>]*src="gato\.png"[^>]*>/.test(n) && /alt="um gato dormindo"/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie um campo <input> de e-mail, obrigatório, com name="email".',
    placeholder: '<input type="email" name="email" required>',
    solution: '<input type="email" name="email" required>',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<input[^>]*type="email"[^>]*>/.test(n)
        && /name="email"/.test(n)
        && /required/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie uma lista não ordenada (<ul>) com 3 itens: "Café", "Chá" e "Suco".',
    placeholder: "<ul>\n  <li>Café</li>\n  <li>Chá</li>\n  <li>Suco</li>\n</ul>",
    solution: "<ul>\n  <li>Café</li>\n  <li>Chá</li>\n  <li>Suco</li>\n</ul>",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<ul>/.test(n)
        && /<li>café<\/li>/.test(n)
        && /<li>chá<\/li>/.test(n)
        && /<li>suco<\/li>/.test(n)
        && /<\/ul>/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie um botão de envio ("submit") com o texto "Enviar" dentro de um formulário.',
    placeholder: '<button type="submit">Enviar</button>',
    solution: '<button type="submit">Enviar</button>',
    check: function (code) {
      const n = window.normalizeCode(code);
      const isButton = /<button[^>]*type="submit"[^>]*>enviar<\/button>/.test(n);
      const isInput = /<input[^>]*type="submit"[^>]*value="enviar"[^>]*>/.test(n);
      return isButton || isInput;
    }
  }
];
