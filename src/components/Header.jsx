import coast from "../assets/floripa-coast.png";

const Header = () => (
  <header className="hero">
    <div className="hero-content">
      <p className="hero-location">Florianópolis · SC e para todo o Brasil</p>
      <h1>Consumir menos.<br /><em>Viver melhor.</em></h1>
      <p className="hero-text">Suas escolhas diárias moldam o futuro do planeta. Aprenda, pratique e inspire-se a consumir com consciência.</p>
      <div className="hero-actions"><a className="primary-button" href="#pratica">Começar pelas dicas <span aria-hidden="true">→</span></a><a className="secondary-button" href="#entenda">Por que importa?</a></div>
    </div>
    <div className="hero-art">
      <span className="hero-badge">Edição local<br /><strong>SC</strong></span>
      <img src={coast} alt="Praia e mata nativa na costa de Florianópolis" />
    </div>
  </header>
);

export default Header;
