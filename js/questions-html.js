window.QUESTIONS_HTML = [
  // ---------- INICIANTE ----------
  {
    level: "iniciante",
    question: "Qual tag HTML é utilizada para criar um parágrafo de texto?",
    explicacao: "A tag <p> (de paragraph) agrupa um bloco de texto e o navegador já adiciona um espaço antes e depois dele automaticamente.",
    options: ["<p>", "<text>", "<par>", "<span>"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual tag insere uma quebra de linha sem iniciar um novo parágrafo?",
    explicacao: "<br> apenas quebra a linha, sem criar um novo bloco. É uma tag vazia: não tem </br>. Use com moderação — para separar blocos, prefira <p>.",
    options: ["<break>", "<br>", "<newline>", "<lb>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual atributo da tag <img> define o caminho (endereço) do arquivo de imagem a ser exibido?",
    explicacao: "src (de source, fonte) aponta para o arquivo da imagem. O href é parecido, mas serve para links (<a>) e folhas de estilo (<link>).",
    options: ["href", "src", "path", "link"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag é utilizada para criar uma tabela em HTML?",
    explicacao: "<table> é o container. Dentro dele, <tr> cria cada linha, <th> as células de cabeçalho e <td> as células de dados.",
    options: ["<grid>", "<table>", "<tab>", "<rows>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual elemento de formulário permite que o usuário digite um texto com várias linhas?",
    explicacao: "O <input> é sempre de uma linha só. Para textos longos (um comentário, uma mensagem) use <textarea>, que também pode ser redimensionado.",
    options: ["<input>", "<textarea>", "<multitext>", "<longtext>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag insere uma linha horizontal usada para separar visualmente seções de conteúdo?",
    explicacao: "<hr> significa horizontal rule. Além do traço visual, ele tem significado semântico: indica uma mudança de assunto na página.",
    options: ["<line>", "<divider>", "<hr>", "<split>"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual tag define os itens de uma lista (ordenada ou não ordenada)?",
    explicacao: "<li> é o list item. Ele funciona tanto dentro de <ul> (marcadores) quanto de <ol> (números) — o que muda é só a tag que o envolve.",
    options: ["<item>", "<li>", "<list-item>", "<row>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag é usada para criar uma lista ORDENADA (numerada)?",
    explicacao: "<ol> é de ordered list e numera sozinho os itens. Use quando a ordem importa (uma receita, um passo a passo). Se a ordem não importa, use <ul>.",
    options: ["<ul>", "<ol>", "<list>", "<numlist>"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual tag representa o conteúdo principal e único de uma página, sem repetir em outras páginas do site?",
    explicacao: "<main> marca o conteúdo central da página. Deve aparecer uma única vez e não deve conter coisas repetidas em todas as páginas, como menu ou rodapé.",
    options: ["<main>", "<content>", "<body>", "<primary>"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual atributo do <input> define um texto de exemplo exibido dentro do campo antes de o usuário digitar?",
    explicacao: "O placeholder é só uma dica que some quando o usuário digita. Ele não substitui o <label>: sem label, quem usa leitor de tela pode não saber o que preencher.",
    options: ["hint", "placeholder", "example", "default"],
    correct: 1
  },

  // ---------- INTERMEDIÁRIO ----------
  {
    level: "intermediario",
    question: "Qual prefixo de atributo permite armazenar dados personalizados em um elemento HTML sem afetar sua semântica?",
    explicacao: "Atributos data-* (como data-id=\"7\") guardam informações extras no HTML sem inventar atributos inválidos. No JavaScript você os lê pelo elemento.dataset.",
    options: ["data-*", "custom-*", "x-*", "meta-*"],
    correct: 0
  },
  {
    level: "intermediario",
    question: "Qual tag é utilizada para agrupar as linhas do cabeçalho de uma tabela?",
    explicacao: "<thead> agrupa as linhas de cabeçalho, <tbody> o corpo e <tfoot> o rodapé. Isso ajuda leitores de tela e permite rolar o corpo mantendo o cabeçalho fixo.",
    options: ["<thead>", "<tbody>", "<tfoot>", "<caption>"],
    correct: 0
  },
  {
    level: "intermediario",
    question: "O que a tag <iframe> permite fazer em uma página?",
    explicacao: "O <iframe> embute uma página inteira dentro da sua — é assim que funcionam vídeos do YouTube e mapas incorporados no seu site.",
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
    explicacao: "method define como os dados vão: GET coloca tudo visível na URL; POST envia no corpo da requisição. Para senhas e dados sensíveis, use sempre POST.",
    options: ["action", "method", "type", "protocol"],
    correct: 1
  },
  {
    level: "intermediario",
    question: 'Para que serve usar rel="noopener noreferrer" em um link com target="_blank"?',
    explicacao: "Sem isso, a página aberta consegue acessar a sua através de window.opener e até te redirecionar para um site falso. É uma proteção contra tabnabbing.",
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
    explicacao: "O for do label deve conter o mesmo valor do id do input. Isso aumenta a área clicável e faz o leitor de tela anunciar o rótulo ao focar o campo.",
    options: [
      "Deixa o texto em negrito automaticamente",
      "Melhora a acessibilidade: clicar no texto do label também foca/marca o input",
      "Faz o input enviar os dados automaticamente",
      "Não existe nenhuma vantagem prática"
    ],
    correct: 1
  },

  {
    level: "intermediario",
    question: 'Para que serve a tag <meta name="viewport" content="width=device-width, initial-scale=1"> no <head>?',
    explicacao: "Ela avisa o navegador do celular para usar a largura real da tela em vez de fingir uma tela de desktop. Sem ela, o site responsivo aparece \"encolhido\" no celular.",
    options: [
      "Define o título que aparece na aba do navegador",
      "Faz a página se adaptar corretamente à largura da tela em celulares e tablets",
      "Bloqueia o zoom em todos os dispositivos",
      "Carrega o CSS mais rápido em telas pequenas"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual é a principal diferença entre as tags <div> e <span>?",
    explicacao: "<div> é um elemento de bloco: ocupa toda a largura disponível e quebra a linha. <span> é em linha: fica no meio do texto, ocupando só o espaço do seu conteúdo.",
    options: [
      "<div> só funciona com CSS e <span> só funciona com JavaScript",
      "<div> é um elemento de bloco e <span> é um elemento em linha (inline)",
      "<div> é semântica e <span> é obsoleta",
      "Não há diferença: são sinônimos"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: 'O que o atributo defer faz em uma tag <script src="...">?',
    explicacao: "Com defer o script é baixado em paralelo e só executa depois que o HTML terminou de ser lido, mantendo a ordem dos scripts. Sem ele, o navegador para de montar a página para executar o script.",
    options: [
      "Impede que o script seja carregado",
      "Baixa o script em paralelo e só o executa depois que o HTML foi todo lido",
      "Faz o script executar antes de qualquer HTML",
      "Adia o download do script até o usuário clicar em algo"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: 'Qual é a vantagem de usar <button type="submit">Enviar</button> em vez de <input type="submit" value="Enviar">?',
    explicacao: "O <button> tem tag de abertura e fechamento, então aceita HTML dentro (um ícone, um <strong>). Já o <input> só mostra o texto simples do atributo value.",
    options: [
      "O <button> envia o formulário mais rápido",
      "O <button> aceita conteúdo HTML dentro dele (ícones, outras tags), o <input> só um texto no value",
      "O <input type=\"submit\"> não funciona em navegadores modernos",
      "Só o <button> pode ficar dentro de um <form>"
    ],
    correct: 1
  },

  // ---------- AVANÇADO (código) ----------
  {
    level: "avancado",
    type: "code",
    question: 'Escreva um link <a> que abra "https://exemplo.com" em uma nova aba, com o texto "Exemplo" e boas práticas de segurança (rel).',
    explicacao: "target=\"_blank\" abre em outra aba e o rel=\"noopener noreferrer\" impede que a página aberta acesse a sua — é a dupla recomendada para links externos.",
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
    explicacao: "O alt descreve a imagem para quem não a vê: leitores de tela leem esse texto, e ele aparece na tela se a imagem não carregar. É obrigatório em imagens com conteúdo.",
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
    explicacao: "type=\"email\" faz o navegador validar o formato e mostra o teclado com @ no celular. O required impede o envio em branco, e o name é o nome do campo no servidor.",
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
    explicacao: "Cada item precisa estar dentro de seu próprio <li>, e todos os <li> ficam dentro do <ul>. Texto solto dentro do <ul>, fora de um <li>, é HTML inválido.",
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
    explicacao: "type=\"submit\" faz o botão enviar o formulário. Cuidado: dentro de um <form>, um <button> sem type já é submit por padrão — para um botão comum, escreva type=\"button\".",
    placeholder: '<button type="submit">Enviar</button>',
    solution: '<button type="submit">Enviar</button>',
    check: function (code) {
      const n = window.normalizeCode(code);
      const isButton = /<button[^>]*type="submit"[^>]*>enviar<\/button>/.test(n);
      const isInput = /<input[^>]*type="submit"[^>]*value="enviar"[^>]*>/.test(n);
      return isButton || isInput;
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie uma tabela com um cabeçalho <thead> com as colunas "Nome" e "Idade", e um corpo <tbody> com uma linha contendo "Ana" e "20".',
    explicacao: "No <thead> as células são <th> (cabeçalho) e no <tbody> são <td> (dados). Essa separação ajuda leitores de tela a entenderem o que cada coluna significa.",
    placeholder: "<table>\n  <thead>\n    <tr><th>...</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>...</td></tr>\n  </tbody>\n</table>",
    solution: "<table>\n  <thead>\n    <tr>\n      <th>Nome</th>\n      <th>Idade</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Ana</td>\n      <td>20</td>\n    </tr>\n  </tbody>\n</table>",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<table>/.test(n)
        && /<thead>/.test(n)
        && /<th>nome<\/th>/.test(n)
        && /<th>idade<\/th>/.test(n)
        && /<tbody>/.test(n)
        && /<td>ana<\/td>/.test(n)
        && /<td>20<\/td>/.test(n)
        && /<\/table>/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie um <select> com name="cor" e três opções: "Azul", "Verde" e "Vermelho".',
    explicacao: "O <select> é a caixa de seleção e cada <option> é uma escolha possível. O name fica no <select>, pois é ele quem envia o valor escolhido no formulário.",
    placeholder: '<select name="cor">\n  <option>...</option>\n</select>',
    solution: '<select name="cor">\n  <option value="azul">Azul</option>\n  <option value="verde">Verde</option>\n  <option value="vermelho">Vermelho</option>\n</select>',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<select[^>]*name="cor"[^>]*>/.test(n)
        && /<option[^>]*>azul<\/option>/.test(n)
        && /<option[^>]*>verde<\/option>/.test(n)
        && /<option[^>]*>vermelho<\/option>/.test(n)
        && /<\/select>/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie um menu de navegação <nav> com dois links: "Início" apontando para "index.html" e "Contato" apontando para "contato.html".',
    explicacao: "A tag <nav> marca semanticamente um bloco de navegação. Isso permite que leitores de tela ofereçam \"pular para o menu\" ou \"pular o menu\" direto para o conteúdo.",
    placeholder: '<nav>\n  <a href="...">...</a>\n</nav>',
    solution: '<nav>\n  <a href="index.html">Início</a>\n  <a href="contato.html">Contato</a>\n</nav>',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<nav>/.test(n)
        && /<a[^>]*href="index\.html"[^>]*>início<\/a>/.test(n)
        && /<a[^>]*href="contato\.html"[^>]*>contato<\/a>/.test(n)
        && /<\/nav>/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie um <form> que envie os dados para "/cadastro" usando o método POST, contendo um botão de envio com o texto "Enviar".',
    explicacao: "O action diz PARA ONDE os dados vão e o method diz COMO eles vão. Com POST os dados seguem no corpo da requisição, sem ficar visíveis na URL.",
    placeholder: '<form action="..." method="...">\n  <button type="submit">Enviar</button>\n</form>',
    solution: '<form action="/cadastro" method="post">\n  <button type="submit">Enviar</button>\n</form>',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<form[^>]*action="\/cadastro"[^>]*>/.test(n)
        && /<form[^>]*method="post"[^>]*>/.test(n)
        && /<\/form>/.test(n)
        && /(<button[^>]*>enviar<\/button>|<input[^>]*value="enviar"[^>]*>)/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie um <label> com o texto "Nome" corretamente associado a um <input> de texto que tenha id="nome" e name="nome".',
    explicacao: "O for do <label> precisa ter exatamente o mesmo valor do id do <input>. Assim clicar no texto já foca o campo e o leitor de tela anuncia o rótulo certo.",
    placeholder: '<label for="...">Nome</label>\n<input type="text" id="..." name="...">',
    solution: '<label for="nome">Nome</label>\n<input type="text" id="nome" name="nome">',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /<label[^>]*for="nome"[^>]*>nome<\/label>/.test(n)
        && /<input[^>]*id="nome"[^>]*>/.test(n)
        && /<input[^>]*type="text"[^>]*>/.test(n)
        && /<input[^>]*name="nome"[^>]*>/.test(n);
    }
  }
];
