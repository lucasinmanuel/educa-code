// Progresso do aluno, salvo no navegador (localStorage).
// Guarda apenas a melhor nota e a data de cada módulo/nível.
(function () {
  const CHAVE = "educacode:progresso:v1";

  // localStorage pode lançar exceção (aba anônima, cookies bloqueados).
  // Nesses casos o app segue funcionando, só não guarda nada.
  function ler() {
    try {
      const bruto = localStorage.getItem(CHAVE);
      return bruto ? JSON.parse(bruto) : {};
    } catch (e) {
      return {};
    }
  }

  function gravar(dados) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(dados));
      return true;
    } catch (e) {
      return false;
    }
  }

  function chaveDe(modulo, nivel) {
    return modulo + ":" + nivel;
  }

  window.Progresso = {
    /** Registra uma tentativa. Só sobrescreve se a nota for melhor. */
    salvar: function (modulo, nivel, pontos, total) {
      const dados = ler();
      const k = chaveDe(modulo, nivel);
      const anterior = dados[k];

      const registro = {
        melhor: anterior ? Math.max(anterior.melhor, pontos) : pontos,
        total: total,
        tentativas: anterior ? anterior.tentativas + 1 : 1,
        data: new Date().toISOString()
      };

      dados[k] = registro;
      gravar(dados);
      return registro;
    },

    /** Retorna o registro de um nível, ou null se nunca foi feito. */
    obter: function (modulo, nivel) {
      return ler()[chaveDe(modulo, nivel)] || null;
    },

    /** Resumo de um módulo: quantos níveis foram concluídos (100%). */
    resumoModulo: function (modulo, niveis) {
      const dados = ler();
      let concluidos = 0;
      let iniciados = 0;

      niveis.forEach(function (nivel) {
        const r = dados[chaveDe(modulo, nivel)];
        if (!r) return;
        iniciados++;
        if (r.total > 0 && r.melhor === r.total) concluidos++;
      });

      return { concluidos: concluidos, iniciados: iniciados, total: niveis.length };
    },

    /** Apaga todo o progresso salvo. */
    limpar: function () {
      try {
        localStorage.removeItem(CHAVE);
        return true;
      } catch (e) {
        return false;
      }
    },

    /** true se o navegador aceita gravar (usado para esconder a UI se não). */
    disponivel: function () {
      try {
        const teste = "__educacode_teste__";
        localStorage.setItem(teste, "1");
        localStorage.removeItem(teste);
        return true;
      } catch (e) {
        return false;
      }
    }
  };
})();
