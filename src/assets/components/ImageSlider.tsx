import React from 'react';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import rest1 from '../images/rest1.png';
import rest2 from '../images/rest2.jpg';
import rest3 from '../images/rest3.png';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="imagen" src={rest1} alt="Interior del restaurante" />
        </div>
        <div>
          <img src={rest2} className="imagen" alt="Plato de comida" />
        </div>
        <div>
          <img src={rest3}  className="imagen" alt="Ambiente del restaurante" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
