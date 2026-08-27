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
  }
];
