// Divide as perguntas de um nível em fases.
// A divisão é automática: basta adicionar perguntas ao banco que novas
// fases aparecem sozinhas, sem precisar marcar nada nas perguntas.
window.Fases = {
  TAMANHO: 5,
  MINIMO: 3,

  dividir: function (perguntas) {
    const fases = [];
    for (let i = 0; i < perguntas.length; i += this.TAMANHO) {
      fases.push(perguntas.slice(i, i + this.TAMANHO));
    }
    // Uma fase final com 1 ou 2 perguntas não vale a pena: junta na anterior.
    if (fases.length > 1 && fases[fases.length - 1].length < this.MINIMO) {
      const sobra = fases.pop();
      fases[fases.length - 1] = fases[fases.length - 1].concat(sobra);
    }
    return fases;
  },

  /** Fases de um nível específico de um módulo. */
  doNivel: function (banco, nivel) {
    const doNivel = (banco || []).filter(function (q) {
      return (q.level || "iniciante") === nivel;
    });
    return this.dividir(doNivel);
  }
};
