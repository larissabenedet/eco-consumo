const localNews = [
  { date: "27 out 2026", tag: "Cidade", title: "Florianópolis avança com o Pacto Floripa Lixo Zero", text: "12 compromissos coletivos conectam reciclagem, compostagem e logística reversa na cidade.", href: "https://floripalixozero.pmf.sc.gov.br/" },
  { date: "18 set 2026", tag: "Comunidade", title: "Compostagem transforma resíduos em vida", text: "O programa Minhoca na Cabeça aproxima moradores de uma solução simples para os resíduos orgânicos.", href: "https://minhocacabeca.pmf.sc.gov.br/" },
  { date: "05 ago 2026", tag: "Mar e natureza", title: "Cuidar da ilha começa pelas escolhas diárias", text: "Menos descartáveis e mais atenção ao descarte ajudam a proteger praias, restingas e lagoas.", href: "https://www.ima.sc.gov.br/index.php/biodiversidade/areas-protegidas" },
];

const tips = [
  ["01", "Separe na origem", "Em Florianópolis, deixe recicláveis limpos e secos separados dos resíduos orgânicos."],
  ["02", "Composte o possível", "Na ilha, restos de frutas e verduras podem virar adubo em uma composteira doméstica."],
  ["03", "Escolha circular", "Prefira feiras, produtores locais e produtos duráveis para movimentar a economia de Floripa."],
];

const MainContent = () => (
  <main id="inicio">
    <section id="floripa" className="local-section content-section">
      <div className="section-heading">
        <div><p className="eyebrow accent">Ponto de partida</p><h2>Florianópolis<br /><span>em movimento</span></h2></div>
        <p className="section-lead">Uma cidade-ilha que inspira cuidado. Acompanhe notícias, ideias e caminhos para tornar o consumo consciente parte da rotina local.</p>
      </div>
      <div className="news-grid">
        {localNews.map((item) => <article className="news-card" key={item.title}>
          <div className="news-top"><span className="tag">{item.tag}</span><time>{item.date}</time></div>
          <h3>{item.title}</h3><p>{item.text}</p>
          <a href={item.href} target="_blank" rel="noreferrer">Ler referência <span aria-hidden="true">↗</span></a>
        </article>)}
      </div>
      <p className="source-note">Conteúdos locais selecionados a partir de referências públicas da Prefeitura de Florianópolis. Atualizado em 28 out 2026.</p>
    </section>

    <section id="entenda" className="split-section content-section">
      <div className="section-number">01</div>
      <div><p className="eyebrow accent">Do conceito à cidade</p><h2>Consumir também<br /><span>é uma decisão coletiva.</span></h2></div>
      <div className="copy-column"><p>Consumo responsável é escolher considerando o impacto ambiental, social e econômico de cada compra — antes, durante e depois dela.</p><p>Em Florianópolis, essa escolha se conecta ao cuidado com o mar, as áreas verdes e os bairros que formam a ilha.</p><a className="text-link" href="https://www.gov.br/mma/pt-br" target="_blank" rel="noreferrer">Aprofundar no tema <span>→</span></a></div>
    </section>

    <section id="pratica" className="practice-section content-section">
      <div className="section-heading"><div><p className="eyebrow accent">Um passo de cada vez</p><h2>Práticas que cabem<br /><span>na sua rotina</span></h2></div><p className="section-lead">O impacto cresce quando uma escolha simples se repete — e quando ela inspira quem está ao redor.</p></div>
      <div className="tips-grid">{tips.map(([number, title, text]) => <article className="tip-card" key={number}><span className="tip-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section id="ciclo" className="cycle-section content-section">
      <div className="section-heading"><div><p className="eyebrow accent">Antes do descarte</p><h2>Um ciclo mais<br /><span>consciente</span></h2></div><p className="section-lead">O consumo responsável começa antes da compra e continua depois dela. Em Floripa, cada etapa ajuda a proteger a ilha.</p></div>
      <div className="cycle-grid">
        <article><span>01</span><h3>Repensar</h3><p>Preciso mesmo comprar? Escolher menos evita extração, embalagem e desperdício.</p></article>
        <article><span>02</span><h3>Reduzir</h3><p>Leve sua garrafa, recuse descartáveis e prefira produtos com menos embalagens.</p></article>
        <article><span>03</span><h3>Reutilizar</h3><p>Conserte, troque e compartilhe. A economia circular também acontece nos bairros.</p></article>
        <article><span>04</span><h3>Destinar</h3><p>Separe corretamente e encontre os pontos de coleta e compostagem da cidade.</p></article>
      </div>
    </section>

    <section id="historias" className="stories-section content-section">
      <div className="section-heading"><div><p className="eyebrow accent">Gente que faz</p><h2>Ideias que já<br /><span>vivem em Floripa</span></h2></div><p className="section-lead">Conheça redes, projetos e fontes confiáveis para participar de uma cidade mais sustentável.</p></div>
      <div className="resource-list">
        <a href="https://www.pmf.sc.gov.br/" target="_blank" rel="noreferrer"><span>Prefeitura de Florianópolis</span><small>Programas municipais de resíduos e educação ambiental</small><b>↗</b></a>
        <a href="https://www.ima.sc.gov.br/" target="_blank" rel="noreferrer"><span>IMA Santa Catarina</span><small>Informação ambiental e cuidado com os ecossistemas</small><b>↗</b></a>
        <a href="https://www.gov.br/mma/pt-br" target="_blank" rel="noreferrer"><span>Ministério do Meio Ambiente</span><small>Guias para consumo e produção responsáveis</small><b>↗</b></a>
      </div>
    </section>

    <section className="closing-banner"><p className="eyebrow">A ilha é nossa casa</p><h2>O futuro de Floripa<br /><em>começa no agora.</em></h2><a className="primary-button light" href="#pratica">Escolher um próximo passo <span>→</span></a></section>
  </main>
);

export default MainContent;
