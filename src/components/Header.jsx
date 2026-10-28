import draw from "../assets/draw.png";

const Header = () => (
  <header className="hero">
    <div className="hero-content">
      <p className="eyebrow">Guia local de escolhas conscientes</p>
      <h1>Pequenas escolhas.<br /><em>Grande impacto.</em></h1>
      <p className="hero-text">Informação prática para cuidar do planeta, da sua comunidade e do futuro de Florianópolis.</p>
      <a className="primary-button" href="#floripa">Explorar Floripa sustentável <span aria-hidden="true">→</span></a>
    </div>
    <div className="hero-art">
      <span className="hero-badge">Edição local<br /><strong>SC</strong></span>
      <img src={draw} alt="Pessoas cuidando do planeta" />
    </div>
  </header>
);

export default Header;
