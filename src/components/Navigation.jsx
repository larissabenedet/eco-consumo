import { useState } from "react";

const links = [
  ["#floripa", "Floripa"],
  ["#entenda", "Consumo"],
  ["#pratica", "Práticas"],
  ["#projetos", "Projetos"],
  ["#historias", "Recursos"],
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <a className="brand" href="#inicio" aria-label="Eco-Consumo início" onClick={() => setIsOpen(false)}><span aria-hidden="true">◒</span> Eco-Consumo</a>
        <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /><i /></span>
        </button>
        <div id="primary-navigation" className={`nav-links${isOpen ? " is-open" : ""}`}>
          {links.map(([href, label]) => <a href={href} key={href} onClick={() => setIsOpen(false)}>{label}</a>)}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
