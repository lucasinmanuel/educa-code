// Progresso do aluno, salvo no navegador (localStorage).
// Guarda a melhor nota por módulo/nível/fase.
(function () {
  // v2: a chave passou a incluir a fase. Dados da v1 são ignorados.
  const CHAVE = "educacode:progresso:v2";

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

  function chaveDe(modulo, nivel, fase) {
    return modulo + ":" + nivel + ":" + (fase || 1);
  }

  function concluido(registro) {
    return !!registro && registro.total > 0 && registro.melhor === registro.total;
  }

  window.Progresso = {
    /** Registra uma tentativa. Só sobrescreve a nota se ela for melhor. */
    salvar: function (modulo, nivel, fase, pontos, total) {
      const dados = ler();
      const k = chaveDe(modulo, nivel, fase);
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

    /** Registro de uma fase, ou null se nunca foi jogada. */
    obter: function (modulo, nivel, fase) {
      return ler()[chaveDe(modulo, nivel, fase)] || null;
    },

    /** true se a fase foi feita com nota máxima. */
    concluida: function (modulo, nivel, fase) {
      return concluido(this.obter(modulo, nivel, fase));
    },

    /**
     * A fase 1 está sempre aberta; as demais só liberam quando a anterior
     * foi concluída com nota máxima.
     */
    liberada: function (modulo, nivel, fase) {
      if (fase <= 1) return true;
      return this.concluida(modulo, nivel, fase - 1);
    },

    /** Número da fase mais avançada que o aluno pode jogar agora. */
    ultimaLiberada: function (modulo, nivel, totalFases) {
      let f = 1;
      while (f < totalFases && this.concluida(modulo, nivel, f)) f++;
      return f;
    },

    /** Quantas fases de um nível foram concluídas e iniciadas. */
    resumoNivel: function (modulo, nivel, totalFases) {
      const dados = ler();
      let concluidas = 0;
      let iniciadas = 0;

      for (let f = 1; f <= totalFases; f++) {
        const r = dados[chaveDe(modulo, nivel, f)];
        if (!r) continue;
        iniciadas++;
        if (concluido(r)) concluidas++;
      }

      return { concluidas: concluidas, iniciadas: iniciadas, total: totalFases };
    },

    /**
     * Resumo do módulo inteiro.
     * `fasesPorNivel` é um objeto tipo { iniciante: 2, intermediario: 2, avancado: 2 }.
     */
    resumoModulo: function (modulo, fasesPorNivel) {
      const self = this;
      let concluidas = 0;
      let iniciadas = 0;
      let total = 0;

      Object.keys(fasesPorNivel).forEach(function (nivel) {
        const r = self.resumoNivel(modulo, nivel, fasesPorNivel[nivel]);
        concluidas += r.concluidas;
        iniciadas += r.iniciadas;
        total += r.total;
      });

      return { concluidas: concluidas, iniciadas: iniciadas, total: total };
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

    /** true se o navegador aceita gravar. */
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
