const localNews = [
  { date: "27 out 2026", tag: "Cidade", title: "Florianópolis Capital Lixo Zero", text: "A política municipal incentiva a redução de resíduos, a reciclagem, a compostagem e a economia circular.", href: "https://www.pmf.sc.gov.br/" },
  { date: "18 set 2026", tag: "Comunidade", title: "Compostagem transforma resíduos em vida", text: "O programa Minhoca na Cabeça aproxima moradores de uma solução simples para os resíduos orgânicos.", href: "https://minhocacabeca.pmf.sc.gov.br/" },
  { date: "05 ago 2026", tag: "Mar e natureza", title: "Áreas protegidas de Santa Catarina", text: "Conheça informações oficiais sobre unidades de conservação e os ecossistemas que ajudam a proteger a ilha.", href: "https://www.ima.sc.gov.br/" },
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
      <div className="section-heading"><div><p className="eyebrow accent">Consumo no cotidiano</p><h2>Escolhas que<br /><span>fazem sentido</span></h2></div><p className="section-lead">Um caminho simples para consumir melhor em Florianópolis: observar antes de comprar, usar por mais tempo e devolver cada material ao ciclo certo.</p></div>
      <div className="cycle-grid">
        <article><span>01</span><h3>Repense antes de comprar</h3><p>Pergunte se precisa mesmo. Escolher menos evita extração, embalagem e desperdício.</p></article>
        <article><span>02</span><h3>Reduza o descartável</h3><p>Leve sua garrafa, recuse excessos e prefira produtos duráveis e com pouca embalagem.</p></article>
        <article><span>03</span><h3>Use por mais tempo</h3><p>Conserte, troque, doe e compartilhe. A economia circular também acontece nos bairros.</p></article>
        <article><span>04</span><h3>Destine com cuidado</h3><p>Separe recicláveis e orgânicos para que a coleta seletiva e a compostagem funcionem melhor.</p></article>
      </div>
    </section>

    <section id="projetos" className="projects-section content-section">
      <div className="section-heading"><div><p className="eyebrow accent">Conservação em ação</p><h2>Projetos que<br /><span>cuidam da ilha</span></h2></div><p className="section-lead">Conheça iniciativas que aproximam ciência, educação ambiental e participação comunitária da vida em Florianópolis.</p></div>
      <div className="projects-grid">
        <a className="project-card" href="https://www.projetotamar.org.br/" target="_blank" rel="noreferrer"><span className="project-label">Fauna marinha</span><h3>Projeto TAMAR</h3><p>Proteção das tartarugas marinhas e educação para reduzir ameaças nas praias e no oceano.</p><b>Conhecer o projeto <span aria-hidden="true">↗</span></b></a>
        <a className="project-card" href="https://instagram.com/projetolontraekko" target="_blank" rel="noreferrer"><span className="project-label">Rios e manguezais</span><h3>Projeto Lontra</h3><p>Pesquisa e conservação das lontras e dos ambientes aquáticos que conectam a cidade à natureza.</p><b>Conhecer o projeto <span aria-hidden="true">↗</span></b></a>
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
