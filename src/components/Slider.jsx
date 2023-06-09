import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderHeader from "./SliderHeader";
import Cards from "./Cards";

const SliderComponent = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="sliderWrapper">
      <div>
        <SliderHeader>Como fazer minha parte como indivíduo?</SliderHeader>
        <div className="cardsWrapper">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      <div>
        <SliderHeader>Como fazer minha parte como empresa?</SliderHeader>
        <div className="cardsWrapper">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div>
        <SliderHeader>Como fazer minha parte como governo?</SliderHeader>
        <div className="cardsWrapper">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
