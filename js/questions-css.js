window.QUESTIONS_CSS = [
  // ---------- INICIANTE ----------
  {
    level: "iniciante",
    question: "Qual propriedade CSS define a cor do texto de um elemento?",
    explicacao: "A propriedade é apenas color — sem prefixo. Ela também é herdada pelos elementos filhos, então definir no <body> vale para a página toda.",
    options: ["text-color", "font-color", "color", "text-style"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS define a cor de fundo de um elemento?",
    explicacao: "background-color aceita nome (red), hexadecimal (#ff0000) e rgba(), que permite transparência. Existe também o atalho background, que reúne várias propriedades.",
    options: ["background-color", "back-color", "fill-color", "bg"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS alinha o texto ao centro dentro de um elemento?",
    explicacao: "text-align: center centraliza o conteúdo em linha (texto e imagens) dentro do elemento. Para centralizar o próprio bloco na página, use margin: 0 auto.",
    options: ["align-text: middle", "text-align: center", "center: text", "justify: center"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS controla o espaçamento EXTERNO de um elemento, fora de sua borda?",
    explicacao: "margin é o espaço de fora, entre o elemento e os vizinhos; padding é o espaço de dentro, entre a borda e o conteúdo. Margens verticais vizinhas ainda se fundem (colapso).",
    options: ["padding", "spacing", "margin", "gap"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual valor da propriedade display faz um elemento desaparecer completamente do layout da página?",
    explicacao: "display: none remove o elemento do fluxo: ele some e não ocupa espaço. Já visibility: hidden o esconde mas mantém o buraco onde ele estava.",
    options: ["hidden", "invisible", "none", "collapse"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS define a altura de um elemento?",
    explicacao: "height define a altura. Vale conhecer também min-height e max-height, que dão limites sem travar o tamanho — mais seguros em layouts responsivos.",
    options: ["height", "size", "length", "tall"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS deixa os cantos de um elemento arredondados?",
    explicacao: "border-radius funciona mesmo sem borda visível. Com um valor de 50% em um elemento quadrado, você transforma ele em um círculo perfeito.",
    options: ["corner-radius", "round-corner", "border-radius", "edge-radius"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual seletor CSS aplica um estilo a TODOS os elementos de uma página?",
    explicacao: "O asterisco é o seletor universal. É muito usado em * { box-sizing: border-box; } para padronizar o cálculo de tamanho da página inteira.",
    options: ["#all", ".all", "all", "*"],
    correct: 3
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS define o tipo de cursor exibido ao passar o mouse sobre um elemento?",
    explicacao: "cursor: pointer é o mais comum — mostra a mãozinha e sinaliza que algo é clicável. Outros úteis: not-allowed, text, grab e wait.",
    options: ["mouse", "pointer-type", "cursor", "hover-style"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual propriedade CSS controla a transparência (opacidade) de um elemento?",
    explicacao: "opacity vai de 0 (invisível) a 1 (opaco) e afeta o elemento inteiro, filhos inclusive. Para deixar só o fundo transparente, use rgba() no background-color.",
    options: ["opacity", "transparency", "visibility", "alpha"],
    correct: 0
  },

  // ---------- INTERMEDIÁRIO ----------
  {
    level: "intermediario",
    question: "Qual unidade de medida CSS é relativa ao tamanho da fonte do elemento PAI?",
    explicacao: "1em é o tamanho da fonte do pai, então em aninhado acumula (2em dentro de 2em vira 4x). Já rem sempre se baseia na raiz (<html>), o que evita esse efeito bola de neve.",
    options: ["px", "rem", "em", "vh"],
    correct: 2
  },
  {
    level: "intermediario",
    question: "Em relação a que elemento position: absolute posiciona um elemento?",
    explicacao: "Ele se posiciona pelo ancestral mais próximo que tenha position diferente de static. Se nenhum tiver, ele usa a página inteira — por isso costuma-se pôr position: relative no pai.",
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
    explicacao: "gap cria espaço apenas ENTRE os itens, sem sobrar margem nas pontas — bem mais simples que dar margin em cada filho e depois remover a do último.",
    options: ["gap", "spacing", "margin-between", "space"],
    correct: 0
  },
  {
    level: "intermediario",
    question: "O que box-sizing: border-box altera no cálculo de largura e altura de um elemento?",
    explicacao: "Com border-box, width: 200px significa 200px no total, já contando padding e borda. Sem ele (content-box), o padding é somado por fora e o elemento fica maior que o esperado.",
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
    explicacao: "O sinal > seleciona só filhos diretos. Já div p (com espaço) pega qualquer <p> descendente, mesmo aninhado vários níveis abaixo.",
    options: ["div p", "div > p", "div + p", "div ~ p"],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Para que serve a media query @media (max-width: 768px)?",
    explicacao: "max-width significa \"até essa largura\", então o estilo vale em telas menores. É a base do design responsivo: um layout que se adapta ao tamanho do dispositivo.",
    options: [
      "Aplica os estilos apenas em telas maiores que 768px",
      "Aplica os estilos quando a largura da tela for de até 768px (responsivo)",
      "Define que a página terá exatamente 768px de largura",
      "Desativa o CSS em telas pequenas"
    ],
    correct: 1
  },

  {
    level: "intermediario",
    question: "Como se usa o valor guardado em uma variável CSS (custom property) como --cor-principal?",
    explicacao: "A variável é criada com dois traços (--cor-principal: azul) e usada com a função var(--cor-principal). Assim você troca a cor em um lugar só e a mudança vale para a página inteira.",
    options: [
      "cor: --cor-principal",
      "cor: var(--cor-principal)",
      "cor: $cor-principal",
      "cor: get(--cor-principal)"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual é a diferença entre position: fixed e position: sticky?",
    explicacao: "fixed gruda na tela desde sempre e nunca sai do lugar ao rolar. sticky começa normal, no fluxo da página, e só passa a grudar quando você rola e ele atinge a posição definida (por exemplo, top: 0).",
    options: [
      "Não há diferença, são sinônimos",
      "fixed fica preso à janela o tempo todo; sticky rola junto e só gruda ao atingir a posição definida",
      "sticky fica preso à janela o tempo todo; fixed nunca gruda",
      "fixed só funciona em imagens e sticky só em textos"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual a diferença entre visibility: hidden e display: none?",
    explicacao: "Com visibility: hidden o elemento fica invisível mas continua ocupando o espaço dele no layout. Com display: none ele some por completo e o espaço é fechado pelos outros elementos.",
    options: [
      "São exatamente iguais",
      "visibility: hidden esconde o elemento mas mantém o espaço ocupado; display: none remove o elemento do layout",
      "display: none apenas deixa o elemento transparente",
      "visibility: hidden apaga o elemento do HTML"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Para que serve a propriedade z-index?",
    explicacao: "z-index define a ordem de empilhamento: quem tem número maior aparece na frente. Ele só faz efeito em elementos posicionados (relative, absolute, fixed ou sticky), nunca em position: static.",
    options: [
      "Define a largura do elemento na tela",
      "Controla qual elemento fica na frente ou atrás quando eles se sobrepõem",
      "Aumenta o zoom do elemento",
      "Define a ordem dos elementos dentro de um flex container"
    ],
    correct: 1
  },

  // ---------- AVANÇADO (código) ----------
  {
    level: "avancado",
    type: "code",
    question: 'Escreva uma regra CSS que deixe o texto de todos os elementos com classe "destaque" em negrito e com a cor azul.',
    explicacao: "O ponto (.) indica classe. Cada declaração dentro das chaves segue o padrão propriedade: valor; — e o ponto e vírgula separa uma da outra.",
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
    explicacao: "No flexbox, justify-content alinha no eixo principal (horizontal por padrão) e align-items no eixo cruzado (vertical). Os dois em center resolvem a centralização perfeita.",
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
    explicacao: "Aqui img é um seletor de tipo: atinge todas as tags <img> da página de uma vez, sem precisar de classe nenhuma.",
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
    explicacao: "Os estilos vão DENTRO da media query, e dentro deles vem o seletor. É como uma condição: \"se a tela for até 600px, então aplique estas regras\".",
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
    explicacao: "O box-shadow segue a ordem: deslocamento X, deslocamento Y, desfoque e cor. Usar rgba() com alpha baixo (0.15) deixa a sombra sutil e natural.",
    placeholder: ".card {\n  padding: 16px;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.15);\n  border-radius: 12px;\n}",
    solution: ".card {\n  padding: 16px;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.15);\n  border-radius: 12px;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /\.card\{[^}]*padding:16px[^}]*\}/.test(n)
        && /box-shadow:[^;{}]+/.test(n)
        && /border-radius:12px/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Crie a variável CSS --cor-principal com o valor #3498db dentro de :root e depois use ela como cor de fundo (background-color) da classe "botao".',
    explicacao: "Variáveis CSS são criadas com dois traços na frente do nome e costumam ficar em :root, que representa a página toda. Para usar o valor guardado, chame var(--nome-da-variavel).",
    placeholder: ":root {\n  --cor-principal: #3498db;\n}\n\n.botao {\n  background-color: var(--cor-principal);\n}",
    solution: ":root {\n  --cor-principal: #3498db;\n}\n\n.botao {\n  background-color: var(--cor-principal);\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /:root\{[^}]*--cor-principal:#3498db[^}]*\}/.test(n)
        && /\.botao\{[^}]*background(-color)?:var\(--cor-principal\)[^}]*\}/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Faça a classe "caixa" ter uma transição (transition) de opacidade de 0.5s e, ao passar o mouse por cima (:hover), ficar com opacity 0.5.',
    explicacao: "A transition fica na regra normal do elemento, não no :hover — assim a animação acontece tanto ao entrar quanto ao sair com o mouse. O :hover apenas diz qual é o valor final.",
    placeholder: ".caixa {\n  opacity: 1;\n  transition: opacity 0.5s;\n}\n\n.caixa:hover {\n  opacity: 0.5;\n}",
    solution: ".caixa {\n  opacity: 1;\n  transition: opacity 0.5s;\n}\n\n.caixa:hover {\n  opacity: 0.5;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /\.caixa\{[^}]*transition:(opacity|all) 0?\.5s[^}]*\}/.test(n)
        && /\.caixa:hover\{[^}]*opacity:0?\.5[^}]*\}/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Escreva uma regra para a classe "galeria" que crie um grid de 3 colunas iguais com 10px de espaço entre os itens.',
    explicacao: "Com display: grid, o grid-template-columns define as colunas. repeat(3, 1fr) é um atalho para 1fr 1fr 1fr, ou seja, três colunas dividindo o espaço igualmente.",
    placeholder: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}",
    solution: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /\.galeria\{[^}]*display:grid[^}]*\}/.test(n)
        && /grid-template-columns:(repeat\(3,1fr\)|1fr 1fr 1fr)/.test(n)
        && /gap:10px/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma regra que, ao passar o mouse por cima de qualquer tag <button>, deixe o fundo verde (green) e mostre o cursor de mãozinha (pointer).",
    explicacao: ":hover é uma pseudoclasse: ela descreve um estado do elemento, e não um elemento diferente. Por isso vem colada no seletor, como em button:hover.",
    placeholder: "button:hover {\n  background-color: green;\n  cursor: pointer;\n}",
    solution: "button:hover {\n  background-color: green;\n  cursor: pointer;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /button:hover\{[^}]*background(-color)?:(green|#008000)[^}]*\}/.test(n)
        && /button:hover\{[^}]*cursor:pointer[^}]*\}/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Escreva uma regra para a classe "lista" que empilhe os itens em coluna usando flexbox, com 20px de espaço entre eles.',
    explicacao: "Por padrão o flex coloca os itens lado a lado (row). Com flex-direction: column eles passam a ficar um embaixo do outro, e o gap cuida do espaço entre eles.",
    placeholder: ".lista {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}",
    solution: ".lista {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /\.lista\{[^}]*display:flex[^}]*\}/.test(n)
        && /flex-direction:column/.test(n)
        && /gap:20px/.test(n);
    }
  }
];
