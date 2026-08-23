window.QUESTIONS_JS = [
  // ---------- INICIANTE ----------
  {
    level: "iniciante",
    question: "Qual símbolo é usado para criar um comentário de uma linha em JavaScript?",
    explicacao: "// comenta até o fim da linha. Para várias linhas, use /* ... */. Comentários são ignorados na execução e servem para explicar o código.",
    options: ["#", "//", "<!-- -->", "**"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual função exibe uma mensagem no console do navegador, útil para depuração?",
    explicacao: "console.log() é a ferramenta de depuração mais usada. Existem variações úteis: console.error(), console.warn() e console.table() para exibir arrays de objetos.",
    options: ["console.log()", "print()", "show()", "log.console()"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual palavra-chave é usada para declarar uma função em JavaScript?",
    explicacao: "A palavra function declara a função. Também é possível criar com arrow function: const nome = () => { }, que tem sintaxe mais curta.",
    options: ["func", "def", "function", "method"],
    correct: 2
  },
  {
    level: "iniciante",
    question: "Qual estrutura de repetição executa um bloco de código um número definido de vezes, controlando um contador?",
    explicacao: "O for reúne as três partes numa linha só: inicialização, condição e incremento. Por isso é o preferido quando você já sabe quantas repetições precisa.",
    options: ["while", "for", "if", "switch"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual operador é usado para concatenar (juntar) duas strings em JavaScript?",
    explicacao: "O + soma números e junta strings. Cuidado: \"2\" + 2 resulta em \"22\", não 4. Hoje o mais legível é usar template literals com crases e ${}.",
    options: ["&", "+", ".", "%"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "O que o operador typeof retorna quando aplicado a uma variável?",
    explicacao: "typeof retorna o tipo como texto: \"string\", \"number\", \"boolean\", \"object\". Uma pegadinha famosa: typeof null retorna \"object\", um bug histórico da linguagem.",
    options: ["O valor da variável", "O tipo de dado da variável", "O nome da variável", "O tamanho da variável"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual método remove o ÚLTIMO elemento de um array e o retorna?",
    explicacao: "pop() tira do fim e shift() tira do começo. Ambos alteram o array original e devolvem o item removido.",
    options: ["array.pop()", "array.shift()", "array.remove()", "array.last()"],
    correct: 0
  },
  {
    level: "iniciante",
    question: "Qual estrutura condicional permite testar vários valores possíveis de uma mesma variável de forma organizada?",
    explicacao: "O switch compara uma variável com vários casos. Não esqueça o break em cada case: sem ele, a execução \"escorrega\" para o próximo caso.",
    options: ["if/else encadeado apenas", "switch", "loop", "try/catch"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual valor especial indica que uma variável foi declarada, mas ainda não recebeu nenhum valor?",
    explicacao: "undefined é a ausência automática de valor (o JavaScript pôs ali). null é a ausência intencional (você pôs ali de propósito).",
    options: ["null", "undefined", "NaN", "empty"],
    correct: 1
  },
  {
    level: "iniciante",
    question: "Qual método transforma todos os itens de um array em uma única string, unindo-os?",
    explicacao: "join() junta os itens usando o separador que você passar: [1,2].join(\" - \") vira \"1 - 2\". Sem argumento, o separador padrão é a vírgula.",
    options: ["array.join()", "array.merge()", "array.toString(true)", "array.concatAll()"],
    correct: 0
  },

  // ---------- INTERMEDIÁRIO ----------
  {
    level: "intermediario",
    question: "O que o método array.map() retorna?",
    explicacao: "map() sempre devolve um array NOVO, do mesmo tamanho, sem alterar o original. Se você só quer percorrer sem criar nada, use forEach().",
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
    explicacao: "var vaza para fora de blocos como if e for, o que gera bugs difíceis de achar. Hoje a recomendação é usar const por padrão e let só quando precisar reatribuir.",
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
    explicacao: "fetch() devolve uma Promise, por isso precisa de await ou .then(). E são dois passos: primeiro a resposta chega, depois você a converte com await resposta.json().",
    options: ["Um array", "Um objeto JSON diretamente", "Uma Promise", "Uma string"],
    correct: 2
  },
  {
    level: "intermediario",
    question: "O que o método array.filter() faz?",
    explicacao: "filter() devolve um array novo só com os itens em que a função retornou true. O array original continua intacto.",
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
    explicacao: "await pausa a função até a Promise resolver, deixando o código com aparência linear em vez de encadear .then(). Para tratar erros, envolva em try/catch.",
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
    explicacao: "reduce() percorre o array carregando um acumulador, e no fim devolve um único valor. É o método usado para somar totais ou agrupar dados.",
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
    explicacao: "Na prática: for quando há um número conhecido de repetições (percorrer um array); while quando você repete até uma condição mudar (esperar uma resposta, ler até o fim).",
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
    explicacao: "break sai do loop na hora. Útil para parar assim que achou o que procurava, em vez de continuar percorrendo o resto à toa.",
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
    explicacao: "continue pula só a iteração atual e segue para a próxima. Diferente do break, o loop não termina — ele apenas ignora o restante daquela volta.",
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
    explicacao: "Com muitos casos, o switch fica mais legível que uma pilha de if/else if. Para poucas condições, ou para comparações complexas, o if ainda é a melhor escolha.",
    options: ["switch", "for", "try/catch", "while"],
    correct: 0
  },

  // ---------- AVANÇADO (código) ----------
  {
    level: "avancado",
    type: "code",
    question: "Escreva uma função chamada soma que recebe dois parâmetros (a e b) e retorna a soma dos dois.",
    explicacao: "return devolve o valor para quem chamou a função. Sem return, a função executa mas entrega undefined.",
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
    explicacao: "map() aplica a função a cada item e devolve um array novo. Numa arrow function de uma linha só, o return fica implícito.",
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
    explicacao: "O bloco do else roda quando a condição do if é falsa. Note que >= inclui o 18: quem tem exatamente 18 anos entra no primeiro caso.",
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
    explicacao: "As três partes do for são separadas por ponto e vírgula: começa em 1, repete enquanto for menor ou igual a 5, e soma 1 a cada volta. Com i < 5 pararia no 4.",
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
    explicacao: "No while você controla o contador na mão: precisa criá-lo antes e incrementá-lo dentro. Esquecer o i++ causa um loop infinito que trava a página.",
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
    explicacao: "addEventListener espera dois argumentos: o nome do evento e a função a executar. Note que a função é passada sem parênteses — quem a chama é o navegador, quando o evento acontece.",
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
    explicacao: "Numa arrow function de uma expressão só, sem chaves, o return é implícito. Com chaves, você precisa escrever o return explicitamente.",
    placeholder: "const dobro = (x) => x * 2;",
    solution: "const dobro = (x) => x * 2;",
    check: function (code) {
      const n = window.normalizeCode(code);
      return /const\s*dobro\s*=\s*\(?x\)?\s*=>\s*x\*2/.test(n);
    }
  }
];
