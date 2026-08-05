window.QUESTIONS_JS = [
  // ---------- INICIANTE ----------
  {
    level: "iniciante",
    question: "Qual símbolo é usado para criar um comentário de uma linha em JavaScript?",
    options: ["#", "//", "<!-- -->", "**"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual função exibe uma mensagem no console do navegador, útil para depuração?",
    options: ["console.log()", "print()", "show()", "log.console()"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual palavra-chave é usada para declarar uma função em JavaScript?",
    options: ["func", "def", "function", "method"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual estrutura de repetição executa um bloco de código um número definido de vezes, controlando um contador?",
    options: ["while", "for", "if", "switch"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual operador é usado para concatenar (juntar) duas strings em JavaScript?",
    options: ["&", "+", ".", "%"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "O que o operador typeof retorna quando aplicado a uma variável?",
    options: ["O valor da variável", "O tipo de dado da variável", "O nome da variável", "O tamanho da variável"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual método remove o ÚLTIMO elemento de um array e o retorna?",
    options: ["array.pop()", "array.shift()", "array.remove()", "array.last()"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual estrutura condicional permite testar vários valores possíveis de uma mesma variável de forma organizada?",
    options: ["if/else encadeado apenas", "switch", "loop", "try/catch"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual valor especial indica que uma variável foi declarada, mas ainda não recebeu nenhum valor?",
    options: ["null", "undefined", "NaN", "empty"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual método transforma todos os itens de um array em uma única string, unindo-os?",
    options: ["array.join()", "array.merge()", "array.toString(true)", "array.concatAll()"],
    correct: 0
  },

  // ---------- INTERMEDIÁRIO ----------
  {
    level: "intermediario",
    question: "O que o método array.map() retorna?",
    options: [
      "O mesmo array, alterado no lugar",
      "Um novo array com o resultado da função aplicada a cada elemento",
      "Um único valor acumulado",
      "Um booleano indicando se todos os itens passam no teste"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual a principal diferença entre let e var em relação a escopo?",
    options: [
      "let tem escopo de bloco; var tem escopo de função",
      "var tem escopo de bloco; let tem escopo de função",
      "Não há diferença, são sinônimos",
      "let não pode ser usada dentro de funções"
    ],
    correct: 0
  },
  {
    level: "intermediario",
    question: "O que o método fetch() retorna?",
    options: ["Um array", "Um objeto JSON diretamente", "Uma Promise", "Uma string"],
    correct: 2
  },
  {
    level: "intermediario",
    question: "O que o método array.filter() faz?",
    options: [
      "Ordena o array em ordem alfabética",
      "Retorna um novo array apenas com os itens que satisfazem uma condição",
      "Remove o último item do array",
      "Junta todos os itens em uma única string"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "O que async/await permite escrever de forma mais legível?",
    options: [
      "Código síncrono como se fosse assíncrono",
      "Código assíncrono como se fosse síncrono",
      "Loops infinitos sem travar o navegador",
      "Estilos CSS dentro do JavaScript"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "O que o método array.reduce() faz?",
    options: [
      "Reduz o tamanho visual dos elementos na tela",
      "Remove elementos duplicados do array",
      "Reduz o array a um único valor acumulado, aplicando uma função a cada item",
      "Cria uma cópia reduzida (metade) do array"
    ],
    correct: 2
  },
  {
    level: "intermediario",
    question: "Qual a principal diferença entre um loop for e um loop while?",
    options: [
      "for é usado quando já se sabe quantas vezes repetir (com contador); while repete enquanto uma condição for verdadeira, sem número fixo",
      "while só funciona com arrays; for funciona com qualquer tipo de dado",
      "for não pode ser interrompido; while sempre pode",
      "Não existe diferença, são exatamente a mesma coisa"
    ],
    correct: 0
  },
  {
    level: "intermediario",
    question: "O que a instrução break faz quando usada dentro de um loop (for ou while)?",
    options: [
      "Pula apenas a iteração atual e continua no loop",
      "Interrompe imediatamente a execução do loop, saindo dele",
      "Reinicia o loop do zero",
      "Causa um erro de sintaxe"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "O que a instrução continue faz dentro de um loop?",
    options: [
      "Encerra o loop por completo",
      "Pula o restante do código da iteração atual e passa para a próxima",
      "Reinicia a variável do contador",
      "Transforma o loop em recursivo"
    ],
    correct: 1
  },
  {
    level: "intermediario",
    question: "Qual estrutura condicional é mais indicada quando existem MUITOS valores possíveis para uma mesma variável, em vez de vários if/else encadeados?",
    options: ["switch", "for", "try/catch", "while"],
    correct: 0
  },

  // ---------- AVANÇADO (código) ----------
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma função chamada soma que recebe dois parâmetros (a e b) e retorna a soma dos dois.",
    placeholder: "function soma(a, b) {\n  return a + b;\n}",
    solution: "function soma(a, b) {\n  return a + b;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      const declared = /function\s*soma\(a,b\)/.test(n) || /const\s*soma\s*=\s*\(a,b\)\s*=>/.test(n) || /const\s*soma\s*=\s*function\(a,b\)/.test(n);
      const returnsSum = /return\s*a\+b/.test(n) || /=>\s*a\+b/.test(n);
      return declared && returnsSum;
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva um código que use array.map para dobrar (multiplicar por 2) cada valor de um array chamado numeros.",
    placeholder: "const dobrados = numeros.map(n => n * 2);",
    solution: "const dobrados = numeros.map(n => n * 2);",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /numeros\.map\(/.test(n) && /\*2/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Escreva um "if/else" que verifique se a variável idade é maior ou igual a 18: se for, imprima "maior de idade" no console; caso contrário, imprima "menor de idade".',
    placeholder: 'if (idade >= 18) {\n  console.log("maior de idade");\n} else {\n  console.log("menor de idade");\n}',
    solution: 'if (idade >= 18) {\n  console.log("maior de idade");\n} else {\n  console.log("menor de idade");\n}',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /if\(idade>=18\)/.test(n)
        && /console\.log\("maior de idade"\)/.test(n)
        && /else/.test(n)
        && /console\.log\("menor de idade"\)/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva um loop for que imprima no console os números de 1 a 5 (incluindo o 5).",
    placeholder: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
    solution: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /for\(let i=1;i<=5;i\+\+\)/.test(n) && /console\.log\(i\)/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva um loop while que imprima no console os números de 1 a 5 (incluindo o 5).",
    placeholder: "let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}",
    solution: "let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /let i=1/.test(n) && /while\(i<=5\)/.test(n) && /console\.log\(i\)/.test(n) && /i\+\+/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: 'Escreva um event listener que, ao clicar em um elemento com id "botao", exiba um alerta com o texto "Clicado!".',
    placeholder: 'document.getElementById("botao").addEventListener("click", () => {\n  alert("Clicado!");\n});',
    solution: 'document.getElementById("botao").addEventListener("click", () => {\n  alert("Clicado!");\n});',
    check: function (code) {
      const n = window.normalizeCode(code);
      return /getelementbyid\("botao"\)/.test(n)
        && /addeventlistener\("click"/.test(n)
        && /alert\("clicado!"\)/.test(n);
    }
  },
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma arrow function chamada dobro que recebe um número x e retorna x multiplicado por 2.",
    placeholder: "const dobro = (x) => x * 2;",
    solution: "const dobro = (x) => x * 2;",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /const\s*dobro\s*=\s*\(?x\)?\s*=>\s*x\*2/.test(n);
    }
  }
];
