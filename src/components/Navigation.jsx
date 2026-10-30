const Navigation = () => (
  <nav className="site-nav" aria-label="Navegação principal">
    <div className="nav-inner">
      <a className="brand" href="#inicio" aria-label="Eco-Consumo início"><span aria-hidden="true">◒</span> Eco-Consumo</a>
      <div className="nav-links">
        <a href="#floripa">Floripa</a>
        <a href="#entenda">Consumo</a>
        <a href="#pratica">Práticas</a>
        <a href="#projetos">Projetos</a>
        <a href="#historias">Recursos</a>
      </div>
    </div>
  </nav>
);

export default Navigation;
