window.TERMS = [
  {
    id: "frontend",
    icon: "🖥️",
    name: "Frontend",
    short: "Tudo o que o usuário vê e clica na tela.",
    caption: "O frontend não guarda os dados — ele pede ao backend e mostra o resultado.",
    captionReal: "Quando você digita a senha no Instagram, quem mostra o campo é o frontend — mas quem confere é o servidor.",
    svg: `
<svg viewBox="0 0 600 180" role="img" aria-label="O usuário clica e digita no frontend, que são as telas e botões; o frontend então pede os dados ao backend.">
  <defs>
    <marker id="fe-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="16" y="52" width="136" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="84" y="86" font-size="17" text-anchor="middle" font-weight="650" data-real="Você">Usuário</text>
  <text x="84" y="108" font-size="13.5" text-anchor="middle" class="s2" data-real="abre o app">clica e digita</text>

  <line x1="158" y1="90" x2="224" y2="90" stroke="currentColor" stroke-width="2" marker-end="url(#fe-n)"/>

  <rect x="230" y="46" width="136" height="88" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.6"/>
  <text x="298" y="82" font-size="17" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Instagram">Frontend</text>
  <text x="298" y="104" font-size="13.5" text-anchor="middle" fill="var(--purple-dark)" data-real="login e senha">telas e botões</text>

  <line x1="372" y1="90" x2="438" y2="90" stroke="currentColor" stroke-width="2" marker-end="url(#fe-n)"/>
  <text x="405" y="76" font-size="12" text-anchor="middle" class="s2" data-real="confere?">pede dados</text>

  <rect x="444" y="52" width="136" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="512" y="86" font-size="17" text-anchor="middle" font-weight="650" data-real="Servidor">Backend</text>
  <text x="512" y="108" font-size="13.5" text-anchor="middle" class="s2" data-real="confere a senha">no servidor</text>

  <text x="300" y="26" font-size="14" text-anchor="middle" class="s2" data-real="o que você vê ao abrir o app no celular">roda no navegador do usuário</text>
</svg>`
  },
  {
    id: "backend",
    icon: "⚙️",
    name: "Backend",
    short: "As regras que rodam no servidor, longe da vista.",
    caption: "É o backend que decide o que pode ou não — o frontend só exibe.",
    captionReal: "O app mostra o saldo, mas quem sabe quanto você tem é o servidor do banco.",
    svg: `
<svg viewBox="0 0 600 210" role="img" aria-label="O frontend faz uma requisição ao backend; o backend consulta o banco de dados, aplica as regras e devolve a resposta ao frontend.">
  <defs>
    <marker id="be-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="14" y="40" width="140" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="84" y="74" font-size="17" text-anchor="middle" font-weight="650" data-real="App do banco">Frontend</text>
  <text x="84" y="96" font-size="13.5" text-anchor="middle" class="s2" data-real="no celular">navegador</text>

  <line x1="160" y1="66" x2="222" y2="66" stroke="currentColor" stroke-width="2" marker-end="url(#be-n)"/>
  <text x="191" y="54" font-size="12.5" text-anchor="middle" class="s2" data-real="ver saldo">requisição</text>
  <line x1="222" y1="96" x2="160" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#be-n)"/>
  <text x="191" y="118" font-size="12.5" text-anchor="middle" class="s2" data-real="R$ 250,00">resposta</text>

  <rect x="230" y="34" width="160" height="88" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.6"/>
  <text x="310" y="70" font-size="17" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Servidor">Backend</text>
  <text x="310" y="92" font-size="13.5" text-anchor="middle" fill="var(--purple-dark)" data-real="checa se é você">regras e lógica</text>

  <line x1="396" y1="78" x2="452" y2="78" stroke="currentColor" stroke-width="2" marker-end="url(#be-n)"/>

  <rect x="460" y="40" width="128" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="524" y="74" font-size="16" text-anchor="middle" font-weight="650" data-real="Onde fica">Banco de</text>
  <text x="524" y="96" font-size="16" text-anchor="middle" font-weight="650" data-real="seu saldo">Dados</text>

  <text x="310" y="168" font-size="14" text-anchor="middle" class="s2" data-real="confere a senha · soma o saldo · registra tudo">valida senha · calcula preço · salva pedido</text>
  <line x1="230" y1="180" x2="390" y2="180" stroke="var(--purple)" stroke-width="2"/>
</svg>`
  },
  {
    id: "api",
    icon: "🔌",
    name: "API",
    short: "A ponte que deixa dois sistemas conversarem.",
    caption: "Você não precisa saber COMO o outro sistema funciona — só pedir pela API.",
    captionReal: "O iFood não precisa saber COMO o Google monta o mapa — só pedir por uma API.",
    svg: `
<svg viewBox="0 0 600 190" role="img" aria-label="O aplicativo de entregas pergunta a localização para a API do mapa, e a API devolve as coordenadas de volta para o aplicativo.">
  <defs>
    <marker id="api-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--purple)"/>
    </marker>
  </defs>
  <rect x="14" y="56" width="164" height="82" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="96" y="90" font-size="17" text-anchor="middle" font-weight="650" data-real="iFood">Seu App</text>
  <text x="96" y="112" font-size="13.5" text-anchor="middle" class="s2" data-real="seu pedido">de entregas</text>

  <line x1="184" y1="76" x2="234" y2="76" stroke="var(--purple)" stroke-width="2.4" marker-end="url(#api-a)"/>
  <text x="209" y="64" font-size="12.5" text-anchor="middle" fill="var(--purple-dark)" data-real="onde?">pergunta</text>
  <line x1="234" y1="118" x2="184" y2="118" stroke="var(--purple)" stroke-width="2.4" marker-end="url(#api-a)"/>
  <text x="209" y="140" font-size="12.5" text-anchor="middle" fill="var(--purple-dark)" data-real="achei!">responde</text>

  <rect x="242" y="50" width="116" height="94" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.6"/>
  <text x="300" y="91" font-size="19" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="API">API</text>
  <text x="300" y="113" font-size="13" text-anchor="middle" fill="var(--purple-dark)" data-real="do mapa">a ponte</text>

  <line x1="364" y1="76" x2="414" y2="76" stroke="var(--purple)" stroke-width="2.4" marker-end="url(#api-a)"/>
  <line x1="414" y1="118" x2="364" y2="118" stroke="var(--purple)" stroke-width="2.4" marker-end="url(#api-a)"/>

  <rect x="422" y="56" width="164" height="82" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="504" y="90" font-size="17" text-anchor="middle" font-weight="650" data-real="Google">Serviço de</text>
  <text x="504" y="112" font-size="17" text-anchor="middle" font-weight="650" data-real="Maps">Mapas</text>

  <text x="300" y="24" font-size="14" text-anchor="middle" class="s2" data-real="o iFood não tem mapa próprio: ele pergunta ao Google">dois sistemas diferentes, um idioma em comum</text>
</svg>`
  },
  {
    id: "cliente-servidor",
    icon: "🔁",
    name: "Cliente e Servidor",
    short: "O navegador pede. O servidor responde.",
    caption: "Toda página que você abre é um pedido e uma resposta — nessa ordem, sempre.",
    captionReal: "A Netflix não te empurra filme sozinha: o app pede a lista, e só então ela responde.",
    svg: `
<svg viewBox="0 0 600 240" role="img" aria-label="Diagrama de sequência: o cliente envia um pedido GET barra produtos ao servidor; o servidor responde com status 200 OK e os dados.">
  <defs>
    <marker id="cs-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
    <marker id="cs-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--purple)"/>
    </marker>
  </defs>
  <rect x="34" y="12" width="164" height="58" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="116" y="36" font-size="17" text-anchor="middle" font-weight="650" data-real="Seu celular">Cliente</text>
  <text x="116" y="56" font-size="13" text-anchor="middle" class="s2" data-real="app da Netflix">navegador</text>

  <rect x="402" y="12" width="164" height="58" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.4"/>
  <text x="484" y="36" font-size="17" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Netflix">Servidor</text>
  <text x="484" y="56" font-size="13" text-anchor="middle" fill="var(--purple-dark)" data-real="servidor deles">onde o site mora</text>

  <line x1="116" y1="70" x2="116" y2="216" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 5" opacity=".45"/>
  <line x1="484" y1="70" x2="484" y2="216" stroke="var(--purple)" stroke-width="1.5" stroke-dasharray="6 5" opacity=".5"/>

  <line x1="116" y1="120" x2="478" y2="120" stroke="currentColor" stroke-width="2.2" marker-end="url(#cs-n)"/>
  <text x="300" y="110" font-size="15" text-anchor="middle" font-weight="650" data-real="quais filmes tem?">GET /produtos</text>
  <text x="300" y="138" font-size="12.5" text-anchor="middle" class="s2" data-real="você abre o app">"me manda a lista"</text>

  <line x1="484" y1="180" x2="122" y2="180" stroke="var(--purple)" stroke-width="2.2" marker-end="url(#cs-a)"/>
  <text x="300" y="170" font-size="15" text-anchor="middle" font-weight="650" fill="var(--purple-dark)" data-real="a lista de filmes">200 OK + dados</text>
  <text x="300" y="198" font-size="12.5" text-anchor="middle" class="s2" data-real="aparece na tela">"aqui está"</text>

  <text x="300" y="232" font-size="13.5" text-anchor="middle" class="s2" data-real="a Netflix não te manda filme sem você pedir">o servidor nunca começa a conversa</text>
</svg>`
  },
  {
    id: "banco-de-dados",
    icon: "🗄️",
    name: "Banco de Dados",
    short: "Onde as informações ficam guardadas e organizadas.",
    caption: "Cada tabela guarda um tipo de informação — e elas se conectam entre si.",
    captionReal: "Cada tabela guarda um tipo de coisa da loja: quem comprou, o que comprou e o que ainda tem.",
    svg: `
<svg viewBox="0 0 600 220" role="img" aria-label="O backend acessa três tabelas do banco de dados: usuários, pedidos e produtos.">
  <defs>
    <marker id="db-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="216" y="14" width="168" height="60" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="300" y="49" font-size="17" text-anchor="middle" font-weight="650" data-real="Loja online">Backend</text>

  <line x1="300" y1="74" x2="300" y2="96" stroke="currentColor" stroke-width="2"/>
  <line x1="96" y1="96" x2="504" y2="96" stroke="currentColor" stroke-width="2"/>
  <line x1="96" y1="96" x2="96" y2="128" stroke="currentColor" stroke-width="2" marker-end="url(#db-n)"/>
  <line x1="300" y1="96" x2="300" y2="128" stroke="currentColor" stroke-width="2" marker-end="url(#db-n)"/>
  <line x1="504" y1="96" x2="504" y2="128" stroke="currentColor" stroke-width="2" marker-end="url(#db-n)"/>

  <rect x="20" y="134" width="152" height="66" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.2"/>
  <text x="96" y="161" font-size="16" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Clientes">Usuários</text>
  <text x="96" y="183" font-size="12.5" text-anchor="middle" fill="var(--purple-dark)" data-real="Ana · João">nome · e-mail</text>

  <rect x="224" y="134" width="152" height="66" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.2"/>
  <text x="300" y="161" font-size="16" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Compras">Pedidos</text>
  <text x="300" y="183" font-size="12.5" text-anchor="middle" fill="var(--purple-dark)" data-real="3 pedidos">data · valor</text>

  <rect x="428" y="134" width="152" height="66" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.2"/>
  <text x="504" y="161" font-size="16" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Estoque">Produtos</text>
  <text x="504" y="183" font-size="12.5" text-anchor="middle" fill="var(--purple-dark)" data-real="12 camisetas">preço · estoque</text>

  <text x="198" y="116" font-size="13" text-anchor="middle" class="s2" data-real="guardado">tabelas</text>
</svg>`
  },
  {
    id: "dom",
    icon: "🌳",
    name: "DOM",
    short: "A árvore que o navegador monta a partir do seu HTML.",
    caption: "O JavaScript mexe nessa árvore — é assim que a página muda sem recarregar.",
    captionReal: "Quando um post novo aparece sem a página recarregar, foi o JavaScript mexendo nessa árvore.",
    svg: `
<svg viewBox="0 0 600 250" role="img" aria-label="Árvore do DOM: o documento contém a tag html, que contém head e body; dentro do body há um h1 e um parágrafo.">
  <rect x="228" y="8" width="144" height="48" rx="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="300" y="38" font-size="16" text-anchor="middle" font-weight="650" data-real="a página">document</text>

  <line x1="300" y1="56" x2="300" y2="76" stroke="currentColor" stroke-width="2"/>

  <rect x="228" y="76" width="144" height="48" rx="9" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.4"/>
  <text x="300" y="106" font-size="16" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="o site todo">&lt;html&gt;</text>

  <line x1="300" y1="124" x2="300" y2="140" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="140" x2="450" y2="140" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="140" x2="150" y2="158" stroke="currentColor" stroke-width="2"/>
  <line x1="450" y1="140" x2="450" y2="158" stroke="currentColor" stroke-width="2"/>

  <rect x="82" y="158" width="136" height="48" rx="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="150" y="188" font-size="16" text-anchor="middle" font-weight="650" data-real="config">&lt;head&gt;</text>

  <rect x="382" y="158" width="136" height="48" rx="9" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="450" y="188" font-size="16" text-anchor="middle" font-weight="650" data-real="o conteúdo">&lt;body&gt;</text>

  <line x1="450" y1="206" x2="450" y2="220" stroke="currentColor" stroke-width="2"/>
  <line x1="392" y1="220" x2="508" y2="220" stroke="currentColor" stroke-width="2"/>
  <line x1="392" y1="220" x2="392" y2="236" stroke="currentColor" stroke-width="2"/>
  <line x1="508" y1="220" x2="508" y2="236" stroke="currentColor" stroke-width="2"/>
  <text x="392" y="248" font-size="14.5" text-anchor="middle" font-weight="650" data-real="título">&lt;h1&gt;</text>
  <text x="508" y="248" font-size="14.5" text-anchor="middle" font-weight="650" data-real="texto">&lt;p&gt;</text>

  <text x="96" y="106" font-size="13.5" text-anchor="middle" class="s2" data-real="o navegador">cada tag vira</text>
  <text x="96" y="126" font-size="13.5" text-anchor="middle" class="s2" data-real="monta assim">um "galho"</text>
</svg>`
  },
  {
    id: "framework-biblioteca",
    icon: "🧩",
    name: "Framework x Biblioteca",
    short: "Biblioteca: você chama. Framework: ele chama você.",
    caption: "Na biblioteca você manda. No framework, você preenche os espaços que ele define.",
    captionReal: "Na biblioteca você escolhe a ferramenta. No framework, você segue a receita dele.",
    svg: `
<svg viewBox="0 0 600 210" role="img" aria-label="Comparação: com uma biblioteca, o seu código chama a biblioteca quando quer. Com um framework, é o framework que chama o seu código.">
  <defs>
    <marker id="fw-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
    <marker id="fw-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--purple)"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="278" height="190" rx="12" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 5" opacity=".5"/>
  <text x="149" y="40" font-size="16" text-anchor="middle" font-weight="700">Biblioteca</text>

  <rect x="36" y="58" width="226" height="54" rx="9" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="149" y="91" font-size="15.5" text-anchor="middle" font-weight="650" data-real="Você">Seu código</text>

  <line x1="149" y1="112" x2="149" y2="136" stroke="currentColor" stroke-width="2.2" marker-end="url(#fw-n)"/>
  <text x="196" y="130" font-size="13" text-anchor="middle" class="s2" data-real="você chama">chama</text>

  <rect x="36" y="140" width="226" height="48" rx="9" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="149" y="170" font-size="15" text-anchor="middle" class="s2" data-real="Caixa de ferramentas">Biblioteca</text>

  <rect x="312" y="10" width="278" height="190" rx="12" fill="none" stroke="var(--purple)" stroke-width="1.6" stroke-dasharray="6 5" opacity=".7"/>
  <text x="451" y="40" font-size="16" text-anchor="middle" font-weight="700" fill="var(--purple-dark)">Framework</text>

  <rect x="338" y="58" width="226" height="54" rx="9" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.4"/>
  <text x="451" y="91" font-size="15.5" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Receita de bolo">Framework</text>

  <line x1="451" y1="112" x2="451" y2="136" stroke="var(--purple)" stroke-width="2.2" marker-end="url(#fw-a)"/>
  <text x="498" y="130" font-size="13" text-anchor="middle" fill="var(--purple-dark)" data-real="ele chama">chama</text>

  <rect x="338" y="140" width="226" height="48" rx="9" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <text x="451" y="170" font-size="15" text-anchor="middle" class="s2" data-real="Você só preenche">Seu código</text>
</svg>`
  },
  {
    id: "deploy",
    icon: "🚀",
    name: "Deploy",
    short: "Colocar o projeto no ar, para o mundo acessar.",
    caption: "Enquanto está só no seu computador, ninguém além de você consegue abrir.",
    captionReal: "Antes do deploy, o site só existe no seu computador — como um vídeo que você gravou mas não publicou.",
    svg: `
<svg viewBox="0 0 600 190" role="img" aria-label="O código sai do seu computador para o repositório remoto com git push, de lá vai por deploy para o servidor na nuvem, e então fica acessível aos usuários.">
  <defs>
    <marker id="dp-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="8" y="58" width="126" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="71" y="90" font-size="15.5" text-anchor="middle" font-weight="650">Seu PC</text>
  <text x="71" y="112" font-size="12.5" text-anchor="middle" class="s2" data-real="ninguém vê">só você vê</text>

  <line x1="140" y1="96" x2="176" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#dp-n)"/>
  <text x="158" y="82" font-size="12" text-anchor="middle" class="s2" data-real="envia">push</text>

  <rect x="184" y="58" width="126" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="247" y="90" font-size="15.5" text-anchor="middle" font-weight="650">GitHub</text>
  <text x="247" y="112" font-size="12.5" text-anchor="middle" class="s2" data-real="guarda tudo">o código</text>

  <line x1="316" y1="96" x2="352" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#dp-n)"/>
  <text x="334" y="82" font-size="12" text-anchor="middle" fill="var(--purple-dark)" font-weight="650" data-real="sobe">deploy</text>

  <rect x="360" y="52" width="126" height="88" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.6"/>
  <text x="423" y="88" font-size="15.5" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Vercel">Servidor</text>
  <text x="423" y="110" font-size="12.5" text-anchor="middle" fill="var(--purple-dark)" data-real="site no ar">no ar 24h</text>

  <line x1="492" y1="96" x2="528" y2="96" stroke="currentColor" stroke-width="2" marker-end="url(#dp-n)"/>

  <rect x="536" y="58" width="58" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="565" y="102" font-size="24" text-anchor="middle">🌍</text>

  <text x="300" y="26" font-size="14" text-anchor="middle" class="s2" data-real="igual publicar um vídeo no YouTube">do seu computador até o mundo</text>
  <text x="300" y="172" font-size="13.5" text-anchor="middle" class="s2" data-real="antes: só na sua máquina. depois: todo mundo acessa">depois do deploy, qualquer pessoa abre pelo link</text>
</svg>`
  },
  {
    id: "http",
    icon: "🌐",
    name: "HTTP",
    short: "O idioma que navegador e servidor usam para conversar.",
    caption: "O número da resposta já diz se deu certo: 2xx sim, 4xx erro seu, 5xx erro do servidor.",
    captionReal: "Cada vez que você clica em algo numa loja online, é um pedido HTTP indo e uma resposta voltando.",
    svg: `
<svg viewBox="0 0 600 230" role="img" aria-label="O cliente envia métodos HTTP como GET, POST, PUT e DELETE ao servidor, que responde com códigos de status como 200 OK, 404 não encontrado ou 500 erro do servidor.">
  <defs>
    <marker id="ht-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
    <marker id="ht-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--purple)"/>
    </marker>
  </defs>
  <rect x="14" y="76" width="140" height="76" rx="10" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <text x="84" y="110" font-size="16.5" text-anchor="middle" font-weight="650" data-real="Você">Cliente</text>
  <text x="84" y="132" font-size="13" text-anchor="middle" class="s2" data-real="no navegador">navegador</text>

  <line x1="160" y1="98" x2="440" y2="98" stroke="currentColor" stroke-width="2.2" marker-end="url(#ht-n)"/>
  <line x1="440" y1="132" x2="160" y2="132" stroke="var(--purple)" stroke-width="2.2" marker-end="url(#ht-a)"/>

  <rect x="446" y="76" width="140" height="76" rx="10" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="2.6"/>
  <text x="516" y="110" font-size="16.5" text-anchor="middle" font-weight="700" fill="var(--purple-dark)" data-real="Loja online">Servidor</text>
  <text x="516" y="132" font-size="13" text-anchor="middle" fill="var(--purple-dark)" data-real="site da loja">onde o site mora</text>

  <text x="300" y="46" font-size="13.5" text-anchor="middle" class="s2" data-real="o que você faz no site">o que eu quero fazer</text>
  <text x="300" y="70" font-size="15" text-anchor="middle" font-weight="650" data-real="ver · comprar · editar · excluir">GET · POST · PUT · DELETE</text>
  <text x="300" y="88" font-size="12" text-anchor="middle" class="s2" data-real="produto · carrinho · conta">ler · criar · editar · apagar</text>

  <text x="300" y="158" font-size="15" text-anchor="middle" font-weight="650" fill="var(--purple-dark)" data-real="ok · não achei · caiu">200 · 404 · 500</text>
  <text x="300" y="178" font-size="13.5" text-anchor="middle" class="s2" data-real="abriu · página não existe · fora do ar">deu certo · não achei · quebrou</text>

  <text x="300" y="212" font-size="13.5" text-anchor="middle" class="s2" data-real="é isso que acontece a cada clique seu">todo site que você abre faz isso o tempo todo</text>
</svg>`
  }
];
