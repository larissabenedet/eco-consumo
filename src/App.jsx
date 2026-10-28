import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <Header />
      <MainContent />
      <footer>
        <div className="footer-inner">
          <div>
            <span className="eyebrow">Eco-Consumo</span>
            <p>Informação que vira cuidado com a cidade.</p>
          </div>
          <p className="footer-copy">© 2026 Eco-Consumo · Florianópolis, SC</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
