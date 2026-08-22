# Roadmap — EducaCode

Ideias de evolução, priorizadas por **impacto ÷ esforço**. Cada item foi checado
contra o código atual (não são sugestões genéricas).

---

## 🔴 Prioridade alta

### 1. Salvar o progresso (localStorage)
**Hoje:** nada é salvo. Recarregar a página perde tudo — nota, respostas, nível concluído.
Esse é o maior buraco de UX de um app de estudo.

**O que fazer:**
- Guardar por módulo+nível: melhor nota, data da última tentativa, quais questões errou.
- Mostrar na home: `HTML ✓✓○` (2 de 3 níveis concluídos) e a melhor nota em cada nível.
- Botão "continuar de onde parei".

**Onde:** novo `js/progress.js`; ler em `index.html`, gravar em `js/quiz.js` (`showResult`).

---

### 2. Explicar o "porquê" de cada resposta
**Hoje:** ao errar, o app mostra só *qual* era a correta — não explica *por quê*.
É o maior ganho pedagógico pelo menor esforço do roadmap.

**O que fazer:** adicionar um campo `explicacao` em cada pergunta e exibi-lo no bloco
"Resposta correta". Também vale mostrar quando acerta (reforço).

```js
{
  question: "...",
  options: [...],
  correct: 2,
  explicacao: "O <h1> é o título de maior importância. O <title> aparece só na aba do navegador."
}
```

**Onde:** `js/questions-*.js` (63 perguntas) + `renderMultipleChoice` em `js/quiz.js`.

---

### 3. Embaralhar perguntas e alternativas
**Hoje:** a ordem é sempre idêntica. Na segunda tentativa dá pra decorar "é a terceira opção"
sem aprender o conteúdo.

**O que fazer:** embaralhar (Fisher-Yates) as perguntas e as alternativas a cada tentativa,
recalculando o índice de `correct`. Cuidado com as questões cujo texto de alternativa é
"A) Vermelho / B) Verde" — essas têm letra fixa e precisam ficar de fora do embaralhamento.

---

### 4. Executar de verdade o código do nível Avançado
**Hoje:** a validação é por regex (`check()`). É frágil: uma resposta correta escrita de
forma diferente da esperada é marcada como errada — limitação que já anotamos.

**O que fazer (só para JS):** rodar o código do aluno num `Worker` ou `iframe` com `sandbox`
e testar o **comportamento**, não o texto:

```js
{ testes: [
  { entrada: [2, 3], esperado: 5 },
  { entrada: [-1, 1], esperado: 0 }
]}
```

Aceita qualquer implementação que funcione. Para HTML/CSS, dá pra renderizar num iframe e
inspecionar o DOM/`getComputedStyle` — também comportamento, não string.

⚠️ Rodar código do usuário exige isolamento real (`sandbox="allow-scripts"`, sem
`allow-same-origin`) e timeout contra loop infinito.

---

## 🟡 Prioridade média

### 5. Acessibilidade — dois problemas reais confirmados
- **Foco invisível no teclado:** os `input[type=radio]` estão escondidos com
  `opacity: 0; width: 0` e não existe nenhuma regra `:focus`/`:focus-visible` para eles em
  `css/style.css`. Quem navega por teclado **não enxerga onde está**. Corrigir com
  `.option input:focus-visible + .radio-circle { outline: 2px solid var(--purple); }`.
- **Resultado não é anunciado:** leitores de tela não avisam "correto/incorreto".
  Adicionar uma região `aria-live="polite"` que anuncie o resultado de cada resposta.

### 6. Modo escuro
Os diagramas do glossário já usam `currentColor` e variáveis CSS — adaptariam quase de graça.
Faltaria só redefinir os tokens de `:root` sob `prefers-color-scheme: dark` + um botão de
alternância salvo no localStorage.

### 7. Revisar só o que errou
Depois do resultado: botão **"Refazer só as que errei"**. Combina com o item 1 (persistência)
e é o que mais acelera o aprendizado.

### 8. Testes automatizados de verdade
Já validamos ad-hoc que toda questão de código passa na própria solução e que o realce de
sintaxe não quebra HTML. Vale transformar isso num `npm test` (ou `test.html`) que roda sempre:
- toda `check()` aceita a própria `solution`
- todo `correct` aponta para um índice válido
- toda sigla do dicionário tem `full` e `pt`
- nenhuma pergunta duplicada entre níveis

### 9. Uma pergunta por vez (modo foco)
Hoje todas aparecem numa lista rolável. Um modo "cartão único + barra de progresso" é menos
intimidador e mais parecido com um quiz de verdade. Manter os dois modos, alternáveis.

---

## 🟢 Quando sobrar tempo

### 10. Novos módulos
`Git` · `Lógica de Programação` · `SQL` · `Acessibilidade` · `React`.
A estrutura já suporta: basta um novo `js/questions-*.js` e um card na home.

### 11. Ampliar o glossário
Hoje: 9 termos. Candidatos: `Git/versionamento`, `npm/pacotes`, `JSON`, `REST`, `CRUD`,
`MVC`, `responsividade`, `cache`, `autenticação`, `terminal`, `variáveis de ambiente`.

### 12. Ligar glossário ↔ quiz
No card "API" do glossário, um link *"testar meu conhecimento"*; e na pergunta sobre API,
um link *"não lembro, me explica"*. Fecha o ciclo estudar → praticar.

### 13. Compartilhar resultado
"Fiz 18/20 no quiz de CSS 🎉" com link de volta. Divulgação orgânica gratuita.

### 14. Dica progressiva
Botão "Dica" nas questões de código: 1ª dica conceitual, 2ª mostra a estrutura, 3ª entrega
quase tudo — com desconto na pontuação.

### 15. PWA / funcionar offline
O projeto já não tem dependência externa nenhuma (nem CDN). Um `manifest.json` + service
worker simples e ele instala no celular e funciona sem internet.

---

## 💭 Dívida técnica (nada urgente)

- As funções `check()` moram dentro dos arquivos de dados (`questions-*.js`), misturando
  dados e lógica. Se o item 4 for feito, isso se resolve sozinho (vira dado puro: casos de teste).
- Os bancos de perguntas são globais em `window`. Funciona bem no escopo atual; só viraria
  problema se o projeto crescer para ter build/bundler.
- `css/style.css` está com ~1200 linhas num arquivo só. Dividir em
  `base / home / quiz / aprender / editor` facilitaria a manutenção.
