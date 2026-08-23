// Desafios do Teste Prático.
// Cada verificação roda DENTRO do iframe (por isso é uma string, não uma função):
// o iframe é isolado em sandbox e devolve o resultado por postMessage.
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
    nivel: "HTML",
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
    nivel: "HTML",
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
    nivel: "CSS",
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
    nivel: "CSS",
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
    nivel: "CSS",
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
    nivel: "JavaScript",
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
    nivel: "JavaScript",
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
    nivel: "JavaScript",
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
  }
];
