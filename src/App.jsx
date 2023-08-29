import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <MainContent />

      <footer>
        <p>© 2023 Consumo Responsável. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
