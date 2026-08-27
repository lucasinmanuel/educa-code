// Desafios do Teste Prático, organizados pelas etapas do projeto full-stack.
//
// Dois tipos:
//  - padrão      → o aluno escreve HTML/CSS/JS e as `checks` inspecionam o DOM.
//  - tipo:"logica" → função pura em JS/TS; validada por `casos` de teste reais
//                    (chamada + resultado esperado), não por texto do código.
//
// Tudo roda DENTRO do iframe em sandbox e volta por postMessage.
window.DESAFIOS = [
  {
    id: "livre",
    titulo: "Modo livre",
    nivel: "Playground",
    objetivo: "Sem regras aqui. Escreva o que quiser e veja o resultado na hora.",
    dicas: [],
    inicial: {
      html: '<h1>Olá, mundo!</h1>\n<p>Edite o código e veja a mágica acontecer.</p>\n<button id="btn">Clique em mim</button>',
      css: 'body {\n  font-family: sans-serif;\n  padding: 20px;\n}\n\nh1 {\n  color: #673ab7;\n}',
      js: 'document.getElementById("btn").addEventListener("click", function () {\n  alert("Funcionou!");\n});'
    },
    checks: []
  },

  {
    id: "titulo-paragrafo",
    titulo: "Título e parágrafo",
    nivel: "Etapa 2 · HTML",
    objetivo: 'Crie um <h1> com o texto "Meu Site" e, abaixo dele, um <p> com qualquer texto.',
    dicas: ["A tag <h1> é o título principal", "A tag <p> cria um parágrafo"],
    inicial: { html: "<!-- escreva aqui -->", css: "", js: "" },
    checks: [
      { desc: "Existe um <h1> na página", teste: "return !!document.querySelector('h1')" },
      { desc: 'O <h1> tem o texto "Meu Site"', teste: "var h=document.querySelector('h1'); return !!h && h.textContent.trim().toLowerCase()==='meu site'" },
      { desc: "Existe um <p> com algum texto", teste: "var p=document.querySelector('p'); return !!p && p.textContent.trim().length>0" }
    ]
  },

  {
    id: "lista-frutas",
    titulo: "Lista de frutas",
    nivel: "Etapa 2 · HTML",
    objetivo: "Crie uma lista NÃO ordenada (<ul>) com exatamente 3 itens (<li>).",
    dicas: ["<ul> é a lista, <li> é cada item", "Cada item precisa do seu próprio <li>"],
    inicial: { html: "<!-- escreva aqui -->", css: "", js: "" },
    checks: [
      { desc: "Existe uma <ul> na página", teste: "return !!document.querySelector('ul')" },
      { desc: "A lista tem exatamente 3 itens <li>", teste: "var u=document.querySelector('ul'); return !!u && u.querySelectorAll('li').length===3" },
      { desc: "Nenhum item está vazio", teste: "var i=document.querySelectorAll('ul li'); return i.length>0 && Array.prototype.every.call(i,function(x){return x.textContent.trim().length>0})" }
    ]
  },

  {
    id: "texto-azul",
    titulo: "Texto azul e centralizado",
    nivel: "Etapa 2 · CSS",
    objetivo: "Deixe o <h1> com a cor azul e centralizado na página.",
    dicas: ["A propriedade color muda a cor do texto", "text-align: center centraliza"],
    inicial: {
      html: "<h1>Bem-vindo</h1>",
      css: "h1 {\n  /* escreva aqui */\n}",
      js: ""
    },
    checks: [
      // Aceita qualquer azul (blue, #0000ff, navy, #0066cc...), não só o azul puro.
      { desc: "O <h1> está azul", teste: "var h=document.querySelector('h1'); if(!h) return false; var m=getComputedStyle(h).color.match(/\\d+/g); return !!m && +m[2]>120 && +m[2]>+m[0]+40 && +m[2]>+m[1]+40" },
      { desc: "O <h1> está centralizado", teste: "var h=document.querySelector('h1'); return !!h && getComputedStyle(h).textAlign==='center'" }
    ]
  },

  {
    id: "caixa-card",
    titulo: "Uma caixa com estilo",
    nivel: "Etapa 2 · CSS",
    objetivo: "Estilize a .card com fundo branco, 20px de padding e cantos arredondados de 12px.",
    dicas: ["background-color define o fundo", "padding é o espaço interno", "border-radius arredonda os cantos"],
    inicial: {
      html: '<div class="card">Conteúdo do card</div>',
      css: "body { background: #eee; padding: 20px; }\n\n.card {\n  /* escreva aqui */\n}",
      js: ""
    },
    checks: [
      { desc: "O fundo da .card é branco", teste: "var e=document.querySelector('.card'); if(!e) return false; var b=getComputedStyle(e).backgroundColor; return b==='rgb(255, 255, 255)'" },
      { desc: "O padding é de 20px", teste: "var e=document.querySelector('.card'); return !!e && getComputedStyle(e).paddingTop==='20px'" },
      { desc: "Os cantos têm 12px de arredondamento", teste: "var e=document.querySelector('.card'); return !!e && getComputedStyle(e).borderTopLeftRadius==='12px'" }
    ]
  },

  {
    id: "centralizar-flex",
    titulo: "Centralizar com Flexbox",
    nivel: "Etapa 2 · CSS",
    objetivo: "Use flexbox na .caixa para centralizar o quadrado nos dois eixos (horizontal e vertical).",
    dicas: ["display: flex ativa o flexbox", "justify-content alinha na horizontal", "align-items alinha na vertical"],
    inicial: {
      html: '<div class="caixa">\n  <div class="quadrado"></div>\n</div>',
      css: ".caixa {\n  height: 200px;\n  background: #ede7f6;\n  /* escreva aqui */\n}\n\n.quadrado {\n  width: 60px;\n  height: 60px;\n  background: #673ab7;\n}",
      js: ""
    },
    checks: [
      { desc: "A .caixa usa display: flex", teste: "var e=document.querySelector('.caixa'); return !!e && getComputedStyle(e).display==='flex'" },
      { desc: "Centralizado na horizontal", teste: "var e=document.querySelector('.caixa'); return !!e && getComputedStyle(e).justifyContent==='center'" },
      { desc: "Centralizado na vertical", teste: "var e=document.querySelector('.caixa'); return !!e && getComputedStyle(e).alignItems==='center'" }
    ]
  },

  {
    id: "contador-cliques",
    titulo: "Contador de cliques",
    nivel: "Etapa 2 · DOM",
    objetivo: "Faça o botão somar 1 ao número mostrado no <span id=\"total\"> a cada clique.",
    dicas: [
      "Use addEventListener('click', ...) no botão",
      "Guarde a contagem numa variável com let",
      "Atualize com span.textContent = contagem"
    ],
    inicial: {
      html: '<p>Cliques: <span id="total">0</span></p>\n<button id="btn">Clicar</button>',
      css: "body { font-family: sans-serif; padding: 20px; }",
      js: "// escreva aqui"
    },
    checks: [
      {
        desc: "Depois de 1 clique, mostra 1",
        teste: "var b=document.getElementById('btn'),t=document.getElementById('total'); if(!b||!t) return false; b.click(); return t.textContent.trim()==='1'"
      },
      {
        desc: "Depois de 3 cliques, mostra 3",
        teste: "var b=document.getElementById('btn'),t=document.getElementById('total'); if(!b||!t) return false; b.click(); b.click(); return t.textContent.trim()==='3'"
      }
    ]
  },

  {
    id: "trocar-texto",
    titulo: "Trocar o texto ao clicar",
    nivel: "Etapa 2 · DOM",
    objetivo: 'Ao clicar no botão, o texto do <h1> deve virar "Mudou!".',
    dicas: ["Selecione o h1 com document.querySelector", "Use .textContent para trocar o texto"],
    inicial: {
      html: '<h1 id="titulo">Texto original</h1>\n<button id="btn">Trocar</button>',
      css: "body { font-family: sans-serif; padding: 20px; }",
      js: "// escreva aqui"
    },
    checks: [
      { desc: 'Antes do clique, o título NÃO é "Mudou!"', teste: "var h=document.getElementById('titulo'); return !!h && h.textContent.trim()!=='Mudou!'" },
      { desc: 'Depois do clique, o título vira "Mudou!"', teste: "var b=document.getElementById('btn'),h=document.getElementById('titulo'); if(!b||!h) return false; b.click(); return h.textContent.trim()==='Mudou!'" }
    ]
  },

  {
    id: "lista-dinamica",
    titulo: "Adicionar item na lista",
    nivel: "Etapa 2 · DOM",
    objetivo: "Ao clicar no botão, adicione um novo <li> na lista com o texto digitado no campo.",
    dicas: [
      "Leia o valor do campo com input.value",
      "Crie o elemento com document.createElement('li')",
      "Adicione na lista com lista.appendChild(item)"
    ],
    inicial: {
      html: '<input id="campo" placeholder="Digite algo">\n<button id="btn">Adicionar</button>\n<ul id="lista"></ul>',
      css: "body { font-family: sans-serif; padding: 20px; }\ninput, button { padding: 6px; }",
      js: "// escreva aqui"
    },
    checks: [
      {
        desc: "Adiciona um item com o texto digitado",
        teste: "var c=document.getElementById('campo'),b=document.getElementById('btn'),l=document.getElementById('lista'); if(!c||!b||!l) return false; c.value='Banana'; b.click(); var i=l.querySelectorAll('li'); return i.length===1 && i[0].textContent.trim()==='Banana'"
      },
      {
        // As verificações rodam em sequência no mesmo documento, então o item
        // adicionado pela verificação anterior ainda está na lista.
        desc: "Adiciona mais itens sem apagar os anteriores",
        teste: "var c=document.getElementById('campo'),b=document.getElementById('btn'),l=document.getElementById('lista'); if(!c||!b||!l) return false; c.value='Uva'; b.click(); c.value='Pera'; b.click(); var i=l.querySelectorAll('li'); return i.length===3 && i[2].textContent.trim()==='Pera'"
      }
    ]
  },

  // ==================== ETAPA 1 — Lógica pura (JS/TS) ====================
  // O "núcleo lógico" que a Etapa 1 pede: funções puras, sem DOM,
  // validadas por comportamento.

  {
    id: "validar-email",
    titulo: "Validar e-mail",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "validarEmail",
    objetivo: "Escreva validarEmail(email) que devolve true só se o e-mail tiver algo antes do @, um @, algo depois e um ponto no domínio.",
    dicas: [
      "Uma expressão regular resolve: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/",
      "Também dá para resolver sem regex, usando indexOf e includes",
      "Lembre de tratar entrada vazia ou que não é texto"
    ],
    inicial: { js: "function validarEmail(email) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "aceita um e-mail comum", chamada: 'validarEmail("ana@email.com")', esperado: true },
      { desc: "aceita domínio composto", chamada: 'validarEmail("joao.silva@empresa.com.br")', esperado: true },
      { desc: "recusa sem @", chamada: 'validarEmail("ana.email.com")', esperado: false },
      { desc: "recusa sem domínio", chamada: 'validarEmail("ana@")', esperado: false },
      { desc: "recusa domínio sem ponto", chamada: 'validarEmail("ana@email")', esperado: false },
      { desc: "recusa string vazia", chamada: 'validarEmail("")', esperado: false }
    ]
  },

  {
    id: "validar-senha",
    titulo: "Validar senha forte",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "validarSenha",
    objetivo: "Escreva validarSenha(senha) que devolve true só se tiver no mínimo 8 caracteres, ao menos 1 letra maiúscula, 1 minúscula e 1 número.",
    dicas: [
      "senha.length >= 8 resolve o tamanho",
      "/[A-Z]/.test(senha) diz se tem maiúscula",
      "Combine as quatro condições com &&"
    ],
    inicial: { js: "function validarSenha(senha) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "aceita senha completa", chamada: 'validarSenha("Abcdefg1")', esperado: true },
      { desc: "aceita senha longa", chamada: 'validarSenha("MinhaSenha123")', esperado: true },
      { desc: "recusa curta demais", chamada: 'validarSenha("Ab1")', esperado: false },
      { desc: "recusa sem maiúscula", chamada: 'validarSenha("abcdefg1")', esperado: false },
      { desc: "recusa sem minúscula", chamada: 'validarSenha("ABCDEFG1")', esperado: false },
      { desc: "recusa sem número", chamada: 'validarSenha("Abcdefgh")', esperado: false }
    ]
  },

  {
    id: "formatar-moeda",
    titulo: "Formatar em reais",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "formatarMoeda",
    objetivo: 'Escreva formatarMoeda(valor) que devolve o número como "R$ 1.234,56" — ponto para milhar, vírgula para centavos, sempre 2 casas.',
    dicas: [
      'O jeito curto: valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })',
      "Na mão: use toFixed(2), troque o ponto por vírgula e insira os pontos de milhar",
      "Zero precisa virar R$ 0,00, não R$ 0"
    ],
    inicial: { js: "function formatarMoeda(valor) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "milhar com centavos", chamada: "formatarMoeda(1234.56)", esperado: "R$ 1.234,56" },
      { desc: "completa os centavos", chamada: "formatarMoeda(1234.5)", esperado: "R$ 1.234,50" },
      { desc: "valor pequeno", chamada: "formatarMoeda(9.9)", esperado: "R$ 9,90" },
      { desc: "zero", chamada: "formatarMoeda(0)", esperado: "R$ 0,00" },
      { desc: "milhão", chamada: "formatarMoeda(1000000)", esperado: "R$ 1.000.000,00" }
    ]
  },

  {
    id: "calcular-carrinho",
    titulo: "Total do carrinho",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "calcularTotal",
    objetivo: "Escreva calcularTotal(itens) que soma preco × quantidade de cada item e devolve o total arredondado em 2 casas. Carrinho vazio devolve 0.",
    dicas: [
      "reduce() é feito para isso: itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0)",
      "Cuidado com float: 0.1 * 3 dá 0.30000000000000004",
      "Arredonde no fim com Number(total.toFixed(2))"
    ],
    inicial: { js: "function calcularTotal(itens) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "carrinho vazio", chamada: "calcularTotal([])", esperado: 0 },
      { desc: "um item", chamada: "calcularTotal([{ preco: 10, quantidade: 2 }])", esperado: 20 },
      { desc: "vários itens", chamada: "calcularTotal([{ preco: 10, quantidade: 2 }, { preco: 5.5, quantidade: 4 }])", esperado: 42 },
      { desc: "arredonda o centavo", chamada: "calcularTotal([{ preco: 0.1, quantidade: 3 }])", esperado: 0.3 },
      { desc: "quantidade zero não soma", chamada: "calcularTotal([{ preco: 99, quantidade: 0 }])", esperado: 0 }
    ]
  },

  {
    id: "calcular-frete",
    titulo: "Regra de frete",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "calcularFrete",
    objetivo: "Escreva calcularFrete(peso, uf): Sudeste (SP, RJ, MG, ES) custa 15 + 2 por kg; outros estados, 25 + 3 por kg. Acima de 30 kg devolva null (não entrega).",
    dicas: [
      "Comece pela regra de recusa: if (peso > 30) return null",
      'Um array com ["SP","RJ","MG","ES"] e includes(uf) deixa legível',
      "Some a taxa fixa com o valor por quilo"
    ],
    inicial: { js: "function calcularFrete(peso, uf) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "Sudeste, 2 kg", chamada: 'calcularFrete(2, "SP")', esperado: 19 },
      { desc: "Sudeste, 10 kg", chamada: 'calcularFrete(10, "MG")', esperado: 35 },
      { desc: "outro estado, 2 kg", chamada: 'calcularFrete(2, "BA")', esperado: 31 },
      { desc: "outro estado, 10 kg", chamada: 'calcularFrete(10, "AM")', esperado: 55 },
      { desc: "acima do limite não entrega", chamada: 'calcularFrete(31, "SP")', esperado: null },
      { desc: "exatamente 30 kg ainda entrega", chamada: 'calcularFrete(30, "SP")', esperado: 75 }
    ]
  },

  {
    id: "validar-cpf",
    titulo: "Validar CPF",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "validarCPF",
    objetivo: "Escreva validarCPF(cpf) que confere os dois dígitos verificadores. Aceite com ou sem pontuação e recuse CPFs de dígitos repetidos.",
    dicas: [
      'Limpe a pontuação: cpf.replace(/\\D/g, "")',
      "Precisa ter 11 dígitos e não pode ser tudo igual (111.111.111-11 é inválido)",
      "1º dígito: some os 9 primeiros × pesos 10..2; resto = (soma * 10) % 11; se der 10 ou 11, vira 0",
      "2º dígito: mesma conta com os 10 primeiros × pesos 11..2"
    ],
    inicial: { js: "function validarCPF(cpf) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "CPF válido com pontuação", chamada: 'validarCPF("529.982.247-25")', esperado: true },
      { desc: "o mesmo CPF sem pontuação", chamada: 'validarCPF("52998224725")', esperado: true },
      { desc: "outro CPF válido", chamada: 'validarCPF("111.444.777-35")', esperado: true },
      { desc: "dígito verificador errado", chamada: 'validarCPF("529.982.247-26")', esperado: false },
      { desc: "dígitos repetidos", chamada: 'validarCPF("111.111.111-11")', esperado: false },
      { desc: "quantidade errada de dígitos", chamada: 'validarCPF("123")', esperado: false }
    ]
  },

  // ==================== ETAPA 2 — HTML semântico e CSS responsivo ====================

  {
    id: "html-semantico",
    titulo: "Estrutura semântica",
    nivel: "Etapa 2 · HTML",
    objetivo: "Monte o esqueleto da página com as tags semânticas que a Etapa 2 pede: <header> com um <nav> dentro, um <main> e um <footer>.",
    dicas: [
      "O <nav> vai DENTRO do <header>",
      "Só pode existir um <main> na página",
      "Leitores de tela usam essas tags para pular direto ao conteúdo"
    ],
    inicial: { html: "<!-- escreva aqui -->", css: "", js: "" },
    checks: [
      { desc: "Existe um <header>", teste: "return !!document.querySelector('header')" },
      { desc: "O <nav> está dentro do <header>", teste: "return !!document.querySelector('header nav')" },
      { desc: "Existe um <main>", teste: "return document.querySelectorAll('main').length===1" },
      { desc: "Existe um <footer>", teste: "return !!document.querySelector('footer')" }
    ]
  },

  {
    id: "form-acessivel",
    titulo: "Formulário acessível",
    nivel: "Etapa 2 · HTML",
    objetivo: 'Crie um campo de e-mail obrigatório com id="email", associado a um <label for="email">, dentro de um <form>.',
    dicas: [
      "O for do label precisa ter o mesmo valor do id do input",
      'type="email" já faz o navegador validar o formato',
      "required impede o envio em branco"
    ],
    inicial: { html: "<form>\n  <!-- escreva aqui -->\n</form>", css: "", js: "" },
    checks: [
      { desc: "Existe um <form>", teste: "return !!document.querySelector('form')" },
      { desc: 'O input tem id="email" e type="email"', teste: "var i=document.getElementById('email'); return !!i && i.type==='email'" },
      { desc: "O input é obrigatório", teste: "var i=document.getElementById('email'); return !!i && i.required===true" },
      { desc: "Existe um label ligado ao campo", teste: "var l=document.querySelector('label[for=\"email\"]'); return !!l && l.textContent.trim().length>0" }
    ]
  },

  {
    id: "css-variaveis",
    titulo: "Variáveis CSS",
    nivel: "Etapa 2 · CSS",
    objetivo: 'Declare --cor-primaria: #673ab7 em :root e use var(--cor-primaria) como fundo do .botao. A Etapa 2 pede paleta centralizada em variáveis.',
    dicas: [
      "Variáveis moram em :root { --nome: valor; }",
      "Para usar: background-color: var(--cor-primaria);",
      "Trocar a paleta inteira vira mudar uma linha só"
    ],
    inicial: {
      html: '<button class="botao">Enviar</button>',
      css: ":root {\n  /* declare aqui */\n}\n\n.botao {\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  /* use a variável aqui */\n}",
      js: ""
    },
    checks: [
      { desc: "A variável --cor-primaria existe em :root", teste: "return getComputedStyle(document.documentElement).getPropertyValue('--cor-primaria').trim().toLowerCase()==='#673ab7'" },
      { desc: "O .botao usa essa cor de fundo", teste: "var b=document.querySelector('.botao'); if(!b) return false; var c=getComputedStyle(b).backgroundColor; return c==='rgb(103, 58, 183)'" }
    ]
  },

  {
    id: "css-mobile-first",
    titulo: "Mobile-first com media query",
    nivel: "Etapa 2 · CSS",
    objetivo: "Escreva mobile-first: .cards em uma coluna por padrão e, a partir de 768px, em três colunas com CSS Grid.",
    dicas: [
      "Mobile-first = o estilo base é o do celular, sem media query",
      "@media (min-width: 768px) aplica só em telas maiores",
      "grid-template-columns: repeat(3, 1fr) cria as três colunas"
    ],
    inicial: {
      html: '<div class="cards">\n  <div class="card">1</div>\n  <div class="card">2</div>\n  <div class="card">3</div>\n</div>',
      css: ".card { background: #ede7f6; padding: 20px; }\n\n.cards {\n  display: grid;\n  /* base: celular */\n}\n\n/* agora a media query */",
      js: ""
    },
    checks: [
      { desc: "O .cards usa display: grid", teste: "var e=document.querySelector('.cards'); return !!e && getComputedStyle(e).display==='grid'" },
      { desc: "No celular fica em 1 coluna", teste: "var e=document.querySelector('.cards'); if(!e) return false; return getComputedStyle(e).gridTemplateColumns.split(' ').length===1" },
      { desc: "Existe uma media query com min-width", teste: "var t=''; for(var i=0;i<document.styleSheets.length;i++){try{var r=document.styleSheets[i].cssRules;for(var j=0;j<r.length;j++)t+=r[j].cssText;}catch(e){}} return /min-width/.test(t) && /repeat\\(3|1fr 1fr 1fr/.test(t)" }
    ]
  },

  // ==================== ETAPA 2 — DOM e feedback visual ====================

  {
    id: "form-feedback",
    titulo: "Validar formulário na tela",
    nivel: "Etapa 2 · DOM",
    objetivo: 'Ao enviar o formulário, se o e-mail for inválido mostre "E-mail inválido" no #erro e NÃO limpe o campo. Se for válido, o #erro fica vazio. É a Etapa 1 ligada na interface.',
    dicas: [
      "Escute o evento 'submit' do form e chame e.preventDefault()",
      "Reaproveite a lógica: um e-mail válido tem algo antes do @, um @ e um ponto no domínio",
      "Escreva a mensagem com erro.textContent"
    ],
    inicial: {
      html: '<form id="form">\n  <input id="email" type="text" placeholder="seu@email.com">\n  <button type="submit">Enviar</button>\n</form>\n<p id="erro"></p>',
      css: "body { font-family: sans-serif; padding: 20px; }\n#erro { color: #c5221f; font-weight: bold; }",
      js: "// escreva aqui"
    },
    checks: [
      {
        desc: "E-mail inválido mostra a mensagem",
        teste: "var f=document.getElementById('form'),i=document.getElementById('email'),e=document.getElementById('erro'); if(!f||!i||!e) return false; i.value='abc'; f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})); return e.textContent.trim()==='E-mail inválido'"
      },
      {
        desc: "E-mail válido limpa a mensagem",
        teste: "var f=document.getElementById('form'),i=document.getElementById('email'),e=document.getElementById('erro'); if(!f||!i||!e) return false; i.value='ana@email.com'; f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})); return e.textContent.trim()===''"
      },
      {
        desc: "A página não recarrega (preventDefault)",
        teste: "var f=document.getElementById('form'); if(!f) return false; var ev=new Event('submit',{cancelable:true,bubbles:true}); f.dispatchEvent(ev); return ev.defaultPrevented===true"
      }
    ]
  },

  // ==================== ETAPA 3 — Async, loading e erro ====================

  {
    id: "async-carregar",
    titulo: "Carregar dados com loading",
    nivel: "Etapa 3 · Async",
    objetivo: 'Ao clicar em "Carregar", mostre "Carregando..." no #status, espere a função buscarProdutos() (já pronta) e depois liste os nomes em <li> dentro da #lista, deixando o #status vazio.',
    dicas: [
      "buscarProdutos() devolve uma Promise — use async/await ou .then()",
      "Escreva 'Carregando...' ANTES do await, não depois",
      "No fim, limpe o status e crie um <li> para cada produto"
    ],
    inicial: {
      html: '<button id="btn">Carregar</button>\n<p id="status"></p>\n<ul id="lista"></ul>',
      css: "body { font-family: sans-serif; padding: 20px; }\n#status { color: #5f6368; }",
      js: "// Simula a API (na Etapa 3 isso vira o HttpClient do Angular)\nfunction buscarProdutos() {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve([{ nome: \"Teclado\" }, { nome: \"Mouse\" }, { nome: \"Monitor\" }]);\n    }, 300);\n  });\n}\n\n// escreva aqui"
    },
    checks: [
      {
        desc: "Mostra 'Carregando...' logo ao clicar",
        teste: "var b=document.getElementById('btn'),s=document.getElementById('status'); if(!b||!s) return false; b.click(); return s.textContent.trim()==='Carregando...'"
      },
      {
        // `esperar` dá tempo para a Promise resolver antes de conferir.
        esperar: 800,
        desc: "Depois lista os 3 produtos",
        teste: "var l=document.getElementById('lista'); return !!l && l.querySelectorAll('li').length===3"
      },
      {
        desc: "O status fica vazio no fim",
        teste: "var s=document.getElementById('status'); return !!s && s.textContent.trim()===''"
      }
    ]
  },

  {
    id: "async-erro",
    titulo: "Tratar erro da API",
    nivel: "Etapa 3 · Async",
    objetivo: 'A função buscarProdutos() sempre falha. Trate o erro e mostre "Não foi possível carregar" no #status, com a classe "erro" aplicada nele.',
    dicas: [
      "Com async/await, envolva a chamada em try/catch",
      "No catch, escreva a mensagem e adicione a classe: status.classList.add('erro')",
      "Nunca deixe o usuário olhando uma tela vazia sem explicação"
    ],
    inicial: {
      html: '<button id="btn">Carregar</button>\n<p id="status"></p>\n<ul id="lista"></ul>',
      css: "body { font-family: sans-serif; padding: 20px; }\n.erro { color: #c5221f; font-weight: bold; }",
      js: "// Esta API sempre falha — de proposito\nfunction buscarProdutos() {\n  return new Promise(function (_, reject) {\n    setTimeout(function () { reject(new Error(\"500\")); }, 300);\n  });\n}\n\n// escreva aqui"
    },
    // Roda antes das verificações: dispara o clique que provoca a falha.
    preparar: "var b=document.getElementById('btn'); if (b) b.click();",
    checks: [
      {
        esperar: 800,
        desc: "Mostra a mensagem de erro",
        teste: "var s=document.getElementById('status'); return !!s && s.textContent.trim()==='Não foi possível carregar'"
      },
      {
        desc: "A classe 'erro' foi aplicada",
        teste: "var s=document.getElementById('status'); return !!s && s.classList.contains('erro')"
      },
      {
        desc: "A lista continua vazia",
        teste: "var l=document.getElementById('lista'); return !!l && l.querySelectorAll('li').length===0"
      }
    ]
  },

  // ==================== ETAPA 1 — mais regras de negócio ====================

  {
    id: "gerar-slug",
    titulo: "Gerar slug de URL",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "gerarSlug",
    objetivo: 'Escreva gerarSlug(texto) que transforma "Camiseta Preta" em "camiseta-preta": sem acento, tudo minúsculo, e qualquer sequência de caractere estranho vira um hífen. Sem hífen sobrando nas pontas.',
    dicas: [
      'Tirar acento: texto.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "")',
      'Trocar o que não for letra ou número: .replace(/[^a-z0-9]+/g, "-")',
      'Limpar as pontas no fim: .replace(/^-+|-+$/g, "")'
    ],
    inicial: { js: "function gerarSlug(texto) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "espaço vira hífen", chamada: 'gerarSlug("Camiseta Preta")', esperado: "camiseta-preta" },
      { desc: "remove acentos", chamada: 'gerarSlug("Café com Leite")', esperado: "cafe-com-leite" },
      { desc: "colapsa espaços repetidos", chamada: 'gerarSlug("  Espaços  Extras ")', esperado: "espacos-extras" },
      { desc: "descarta pontuação", chamada: 'gerarSlug("Já!!! Foi?")', esperado: "ja-foi" },
      { desc: "mantém números", chamada: 'gerarSlug("Notebook 15 polegadas")', esperado: "notebook-15-polegadas" }
    ]
  },

  {
    id: "buscar-termo",
    titulo: "Busca por termo",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "buscarPorTermo",
    objetivo: "Escreva buscarPorTermo(produtos, termo) que devolve só os produtos cujo nome contém o termo, ignorando maiúsculas. Termo vazio devolve a lista inteira. É a lógica da barra de busca da Etapa 3.",
    dicas: [
      "filter() devolve um array novo, sem mexer no original",
      "Compare tudo em minúsculo: nome.toLowerCase().includes(termo.toLowerCase())",
      "Trate o termo vazio logo no começo"
    ],
    inicial: { js: "function buscarPorTermo(produtos, termo) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "acha pelo começo do nome", chamada: 'buscarPorTermo([{ nome: "Teclado" }, { nome: "Mouse" }], "tec")', esperado: [{ nome: "Teclado" }] },
      { desc: "ignora maiúsculas", chamada: 'buscarPorTermo([{ nome: "Teclado" }, { nome: "Mouse" }], "MOUSE")', esperado: [{ nome: "Mouse" }] },
      { desc: "acha no meio do nome", chamada: 'buscarPorTermo([{ nome: "Cabo HDMI" }, { nome: "Monitor" }], "hdmi")', esperado: [{ nome: "Cabo HDMI" }] },
      { desc: "termo vazio devolve tudo", chamada: 'buscarPorTermo([{ nome: "Teclado" }, { nome: "Mouse" }], "")', esperado: [{ nome: "Teclado" }, { nome: "Mouse" }] },
      { desc: "sem resultado devolve lista vazia", chamada: 'buscarPorTermo([{ nome: "Teclado" }], "geladeira")', esperado: [] }
    ]
  },

  {
    id: "paginar",
    titulo: "Paginar resultados",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "paginar",
    objetivo: "Escreva paginar(itens, pagina, porPagina) que devolve só a fatia daquela página. A primeira página é a 1 (não a 0). Página que não existe devolve lista vazia.",
    dicas: [
      "slice(inicio, fim) recorta sem alterar o array original",
      "Como a página começa em 1, o início é (pagina - 1) * porPagina",
      "slice já devolve [] sozinho quando o início passa do fim"
    ],
    inicial: { js: "function paginar(itens, pagina, porPagina) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "primeira página", chamada: "paginar([1, 2, 3, 4, 5], 1, 2)", esperado: [1, 2] },
      { desc: "página do meio", chamada: "paginar([1, 2, 3, 4, 5], 2, 2)", esperado: [3, 4] },
      { desc: "última página incompleta", chamada: "paginar([1, 2, 3, 4, 5], 3, 2)", esperado: [5] },
      { desc: "página que não existe", chamada: "paginar([1, 2, 3], 9, 2)", esperado: [] },
      { desc: "lista vazia", chamada: "paginar([], 1, 10)", esperado: [] }
    ]
  },

  {
    id: "ordenar-por",
    titulo: "Ordenar sem estragar o original",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "ordenarPor",
    objetivo: "Escreva ordenarPor(lista, campo) que devolve uma NOVA lista ordenada pelo campo numérico, em ordem crescente. A lista original não pode ser alterada.",
    dicas: [
      "sort() altera o array original — essa é a pegadinha do exercício",
      "Copie antes: [...lista].sort(...) ou lista.slice().sort(...)",
      "Para números, o comparador é (a, b) => a[campo] - b[campo]"
    ],
    inicial: { js: "function ordenarPor(lista, campo) {\n  // escreva aqui\n}" },
    casos: [
      { desc: "ordena por preço", chamada: 'ordenarPor([{ preco: 30 }, { preco: 10 }, { preco: 20 }], "preco")', esperado: [{ preco: 10 }, { preco: 20 }, { preco: 30 }] },
      { desc: "já ordenada continua igual", chamada: 'ordenarPor([{ preco: 1 }, { preco: 2 }], "preco")', esperado: [{ preco: 1 }, { preco: 2 }] },
      { desc: "NÃO altera a lista original", chamada: '(function () { var a = [{ preco: 30 }, { preco: 10 }]; ordenarPor(a, "preco"); return a[0].preco; })()', esperado: 30 },
      { desc: "funciona com outro campo", chamada: 'ordenarPor([{ qtd: 5 }, { qtd: 1 }], "qtd")', esperado: [{ qtd: 1 }, { qtd: 5 }] },
      { desc: "lista vazia", chamada: 'ordenarPor([], "preco")', esperado: [] }
    ]
  },

  {
    id: "agrupar-por",
    titulo: "Agrupar por categoria",
    nivel: "Etapa 1 · Lógica",
    tipo: "logica",
    funcao: "agruparPor",
    objetivo: 'Escreva agruparPor(lista, campo) que devolve um objeto onde cada chave é um valor do campo e o valor é o array dos itens daquele grupo.',
    dicas: [
      "reduce() com um objeto {} como valor inicial",
      "Se a chave ainda não existe, crie com um array vazio antes de empurrar o item",
      "acc[chave] = acc[chave] || []; acc[chave].push(item);"
    ],
    inicial: { js: "function agruparPor(lista, campo) {\n  // escreva aqui\n}" },
    casos: [
      {
        desc: "agrupa em duas categorias",
        chamada: 'agruparPor([{ tipo: "fruta", n: "uva" }, { tipo: "doce", n: "bolo" }, { tipo: "fruta", n: "pera" }], "tipo")',
        esperado: { fruta: [{ tipo: "fruta", n: "uva" }, { tipo: "fruta", n: "pera" }], doce: [{ tipo: "doce", n: "bolo" }] }
      },
      {
        desc: "um grupo só",
        chamada: 'agruparPor([{ uf: "SP" }, { uf: "SP" }], "uf")',
        esperado: { SP: [{ uf: "SP" }, { uf: "SP" }] }
      },
      { desc: "lista vazia devolve objeto vazio", chamada: 'agruparPor([], "tipo")', esperado: {} }
    ]
  },

  // ==================== ETAPA 2 — mais HTML e CSS ====================

  {
    id: "tabela-semantica",
    titulo: "Tabela com cabeçalho",
    nivel: "Etapa 2 · HTML",
    objetivo: "Monte uma tabela com <thead> (uma linha de <th>: Produto e Preço) e <tbody> com 2 linhas de <td>.",
    dicas: [
      "<th> é célula de cabeçalho; <td> é célula de dado",
      "Separar thead e tbody ajuda leitor de tela e permite rolar só o corpo",
      "Cada linha fica dentro de um <tr>"
    ],
    inicial: { html: "<table>\n  <!-- escreva aqui -->\n</table>", css: "", js: "" },
    checks: [
      { desc: "A tabela tem <thead> e <tbody>", teste: "return !!document.querySelector('table thead') && !!document.querySelector('table tbody')" },
      { desc: "O cabeçalho tem 2 <th>", teste: "return document.querySelectorAll('thead th').length===2" },
      { desc: "O corpo tem 2 linhas", teste: "return document.querySelectorAll('tbody tr').length===2" },
      { desc: "As linhas usam <td>, não <th>", teste: "return document.querySelectorAll('tbody td').length>=4 && document.querySelectorAll('tbody th').length===0" }
    ]
  },

  {
    id: "imagem-acessivel",
    titulo: "Imagem com legenda",
    nivel: "Etapa 2 · HTML",
    objetivo: "Coloque a imagem dentro de um <figure>, com texto alternativo no alt e uma <figcaption> descrevendo a foto.",
    dicas: [
      "O alt é lido por quem não enxerga a imagem; a figcaption aparece na tela para todos",
      "A <figcaption> vai dentro do <figure>, junto da <img>",
      "Um alt vazio só se justifica em imagem puramente decorativa"
    ],
    inicial: {
      html: '<!-- use esta imagem -->\n<!-- <img src="https://via.placeholder.com/200x120"> -->',
      css: "body { font-family: sans-serif; padding: 20px; }\nfigcaption { color: #5f6368; font-size: 14px; }",
      js: ""
    },
    checks: [
      { desc: "Existe um <figure>", teste: "return !!document.querySelector('figure')" },
      { desc: "A <img> está dentro do figure", teste: "return !!document.querySelector('figure img')" },
      { desc: "A imagem tem alt preenchido", teste: "var i=document.querySelector('figure img'); return !!i && i.getAttribute('alt') && i.getAttribute('alt').trim().length>3" },
      { desc: "Existe uma <figcaption> com texto", teste: "var f=document.querySelector('figure figcaption'); return !!f && f.textContent.trim().length>0" }
    ]
  },

  {
    id: "header-flex",
    titulo: "Cabeçalho com Flexbox",
    nivel: "Etapa 2 · CSS",
    objetivo: "Deixe o header com a logo na esquerda e o menu na direita, alinhados verticalmente no centro.",
    dicas: [
      "display: flex coloca os filhos lado a lado",
      "justify-content: space-between joga um para cada ponta",
      "align-items: center alinha na vertical"
    ],
    inicial: {
      html: '<header>\n  <span class="logo">Minha Loja</span>\n  <nav><a href="#">Início</a> <a href="#">Produtos</a></nav>\n</header>',
      css: "body { margin: 0; font-family: sans-serif; }\n\nheader {\n  background: #ede7f6;\n  padding: 16px 24px;\n  /* escreva aqui */\n}",
      js: ""
    },
    checks: [
      { desc: "O header usa display: flex", teste: "var h=document.querySelector('header'); return !!h && getComputedStyle(h).display==='flex'" },
      { desc: "Logo e menu vão para as pontas", teste: "var h=document.querySelector('header'); return !!h && getComputedStyle(h).justifyContent==='space-between'" },
      { desc: "Alinhados no centro na vertical", teste: "var h=document.querySelector('header'); return !!h && getComputedStyle(h).alignItems==='center'" }
    ]
  },

  {
    id: "foco-visivel",
    titulo: "Foco visível no teclado",
    nivel: "Etapa 2 · CSS",
    objetivo: "Dê ao .botao um contorno visível quando ele recebe foco pelo teclado, usando :focus-visible. Sem isso, quem navega por Tab não enxerga onde está.",
    dicas: [
      ":focus-visible aplica só na navegação por teclado, não no clique do mouse",
      "Use outline com no mínimo 2px, e outline-offset para dar respiro",
      "Nunca deixe outline: none sem colocar outro indicador no lugar"
    ],
    inicial: {
      html: '<button class="botao">Enviar</button>\n<p>Aperte Tab para testar.</p>',
      css: "body { font-family: sans-serif; padding: 20px; }\n\n.botao {\n  background: #673ab7;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n}\n\n/* escreva aqui */",
      js: ""
    },
    checks: [
      {
        desc: "Existe uma regra com :focus-visible",
        teste: "var t=''; for(var i=0;i<document.styleSheets.length;i++){try{var r=document.styleSheets[i].cssRules;for(var j=0;j<r.length;j++)t+=r[j].cssText;}catch(e){}} return /focus-visible/.test(t)"
      },
      {
        desc: "Ela define um outline visível",
        teste: "var t=''; for(var i=0;i<document.styleSheets.length;i++){try{var r=document.styleSheets[i].cssRules;for(var j=0;j<r.length;j++){if(/focus-visible/.test(r[j].cssText)) t+=r[j].cssText;}}catch(e){}} return /outline/.test(t) && !/outline:\\s*none/.test(t)"
      }
    ]
  },

  // ==================== ETAPA 2 — mais DOM ====================

  {
    id: "modal",
    titulo: "Abrir e fechar modal",
    nivel: "Etapa 2 · DOM",
    objetivo: 'O #modal começa com a classe "escondido". Ao clicar em #abrir, remova a classe; ao clicar em #fechar, coloque de volta.',
    dicas: [
      "classList.remove('escondido') e classList.add('escondido')",
      "Um modal de verdade também fecha com a tecla Esc — tente depois",
      "Nada de bibliotecas: a Etapa 2 pede JavaScript puro"
    ],
    inicial: {
      html: '<button id="abrir">Abrir</button>\n\n<div id="modal" class="escondido">\n  <p>Salvo com sucesso!</p>\n  <button id="fechar">Fechar</button>\n</div>',
      css: "body { font-family: sans-serif; padding: 20px; }\n#modal { background: #e6f4ea; padding: 20px; border-radius: 8px; margin-top: 16px; }\n.escondido { display: none; }",
      js: "// escreva aqui"
    },
    checks: [
      { desc: "Começa escondido", teste: "var m=document.getElementById('modal'); return !!m && m.classList.contains('escondido')" },
      { desc: "Abre ao clicar em Abrir", teste: "var a=document.getElementById('abrir'),m=document.getElementById('modal'); if(!a||!m) return false; a.click(); return !m.classList.contains('escondido')" },
      { desc: "Fecha ao clicar em Fechar", teste: "var f=document.getElementById('fechar'),m=document.getElementById('modal'); if(!f||!m) return false; f.click(); return m.classList.contains('escondido')" }
    ]
  },

  {
    id: "busca-ao-vivo",
    titulo: "Filtrar lista enquanto digita",
    nivel: "Etapa 2 · DOM",
    objetivo: "Ao digitar no #busca, esconda os <li> que não contêm o texto digitado (ignorando maiúsculas). Campo vazio mostra todos de novo.",
    dicas: [
      "Escute o evento 'input', que dispara a cada tecla",
      "Compare tudo em minúsculo com toLowerCase()",
      "Para esconder: item.style.display = 'none'; para mostrar: ''"
    ],
    inicial: {
      html: '<input id="busca" placeholder="Filtrar...">\n<ul id="lista">\n  <li>Teclado</li>\n  <li>Mouse</li>\n  <li>Monitor</li>\n</ul>',
      css: "body { font-family: sans-serif; padding: 20px; }\ninput { padding: 8px; width: 200px; }",
      js: "// escreva aqui"
    },
    checks: [
      {
        desc: 'Digitar "mo" deixa 2 itens visíveis',
        teste: "var b=document.getElementById('busca'); if(!b) return false; b.value='mo'; b.dispatchEvent(new Event('input',{bubbles:true})); var v=[].filter.call(document.querySelectorAll('#lista li'),function(x){return getComputedStyle(x).display!=='none';}); return v.length===2"
      },
      {
        desc: 'Digitar "teclado" deixa só 1',
        teste: "var b=document.getElementById('busca'); if(!b) return false; b.value='teclado'; b.dispatchEvent(new Event('input',{bubbles:true})); var v=[].filter.call(document.querySelectorAll('#lista li'),function(x){return getComputedStyle(x).display!=='none';}); return v.length===1"
      },
      {
        desc: "Apagar tudo mostra os 3 de novo",
        teste: "var b=document.getElementById('busca'); if(!b) return false; b.value=''; b.dispatchEvent(new Event('input',{bubbles:true})); var v=[].filter.call(document.querySelectorAll('#lista li'),function(x){return getComputedStyle(x).display!=='none';}); return v.length===3"
      }
    ]
  },

  // ==================== ETAPA 3 — mais async ====================

  {
    id: "async-vazio",
    titulo: "Estado vazio",
    nivel: "Etapa 3 · Async",
    objetivo: 'A API responde com uma lista vazia. Em vez de deixar a tela em branco, mostre "Nenhum produto encontrado" no #status.',
    dicas: [
      "Depois do await, confira o length antes de renderizar",
      "Tela vazia sem explicação faz o usuário achar que quebrou",
      "É o mesmo cuidado que o @if do Angular resolve na Etapa 3"
    ],
    inicial: {
      html: '<button id="btn">Carregar</button>\n<p id="status"></p>\n<ul id="lista"></ul>',
      css: "body { font-family: sans-serif; padding: 20px; }\n#status { color: #5f6368; }",
      js: "// A API responde certo, mas sem nenhum produto\nfunction buscarProdutos() {\n  return new Promise(function (resolve) {\n    setTimeout(function () { resolve([]); }, 300);\n  });\n}\n\n// escreva aqui"
    },
    preparar: "var b=document.getElementById('btn'); if (b) b.click();",
    checks: [
      { esperar: 800, desc: "Mostra a mensagem de lista vazia", teste: "var s=document.getElementById('status'); return !!s && s.textContent.trim()==='Nenhum produto encontrado'" },
      { desc: "Não cria nenhum <li>", teste: "var l=document.getElementById('lista'); return !!l && l.querySelectorAll('li').length===0" }
    ]
  },

  {
    id: "async-busca",
    titulo: "Buscar na API por termo",
    nivel: "Etapa 3 · Async",
    objetivo: 'Ao clicar em #btn, chame buscarProdutos(termo) com o valor do #busca e liste os nomes em <li>. É a jornada que o teste E2E do Playwright vai percorrer na Etapa 3.',
    dicas: [
      "Leia o valor do campo antes de chamar a função",
      "buscarProdutos(termo) devolve uma Promise já filtrada",
      "Limpe a lista antes de renderizar, senão os resultados se acumulam"
    ],
    inicial: {
      html: '<input id="busca" placeholder="Buscar produto">\n<button id="btn">Buscar</button>\n<ul id="lista"></ul>',
      css: "body { font-family: sans-serif; padding: 20px; }\ninput { padding: 8px; }",
      js: "// Simula GET /produtos?q=termo\nfunction buscarProdutos(termo) {\n  var todos = [{ nome: \"Teclado\" }, { nome: \"Mouse\" }, { nome: \"Monitor\" }];\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve(todos.filter(function (p) {\n        return p.nome.toLowerCase().indexOf(String(termo).toLowerCase()) !== -1;\n      }));\n    }, 300);\n  });\n}\n\n// escreva aqui"
    },
    preparar: "var i=document.getElementById('busca'); if (i) i.value='mo'; var b=document.getElementById('btn'); if (b) b.click();",
    checks: [
      { esperar: 800, desc: 'Buscar "mo" traz 2 resultados', teste: "var l=document.getElementById('lista'); return !!l && l.querySelectorAll('li').length===2" },
      { desc: "Os nomes aparecem na tela", teste: "var t=document.getElementById('lista').textContent; return /mouse/i.test(t) && /monitor/i.test(t)" },
      {
        // `antes` dispara a segunda busca; a espera deixa a Promise resolver
        // antes de conferir. Se a lista não for limpa, sobram 3 itens.
        antes: "var i=document.getElementById('busca'),b=document.getElementById('btn'); if(i&&b){ i.value='teclado'; b.click(); }",
        esperar: 800,
        desc: "Nova busca substitui a anterior, não acumula",
        teste: "var l=document.getElementById('lista'); return l.querySelectorAll('li').length===1"
      }
    ]
  }
];
