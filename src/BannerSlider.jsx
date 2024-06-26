import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.css';

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-prev-arrow`} onClick={onClick}>
      &lt;
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-next-arrow`} onClick={onClick}>
      &gt;
    </div>
  );
};

const BannerSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
