import draw from "../assets/draw.png";

const Header = () => {
  return (
    <header className="header">
      <div className="textHeader">
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse hic
          amet harum reiciendis reprehenderit nihil minima repellendus commodi,
          error.
        </p>
        <button className="redButton">Lorem Ipsum</button>
      </div>
      <div>
        <img src={draw} alt="Pessoas cuidando da terra" />
      </div>
    </header>
  );
};

export default Header;
