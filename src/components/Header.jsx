import draw from "../assets/draw.png";

const Header = () => {
  return (
    <header className="header">
      <div className="textHeader">
        <h1>Desbravando o Caminho do Consumo Responsável</h1>
        <p>
          Seja parte da mudança positiva. O consumo responsável é muito mais do
          que simples escolhas: É um compromisso com nosso planeta e com as
          gerações futuras.
        </p>
      </div>
      <div>
        <img src={draw} alt="Pessoas cuidando da terra" />
      </div>
    </header>
  );
};

export default Header;
