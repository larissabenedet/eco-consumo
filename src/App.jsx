import "./App.css";
import Header from "./components/Header";
import ImageBanner from "./components/ImageBanner";
import SliderComponent from "./components/Slider";
import TextComponent from "./components/TextComponent";

function App() {
  return (
    <>
      <Header />
      <main>
        <TextComponent
          title="Pequenas mudanças, grandes impactos"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit."
        />
        <SliderComponent />
      </main>
      <ImageBanner />
    </>
  );
}

export default App;
