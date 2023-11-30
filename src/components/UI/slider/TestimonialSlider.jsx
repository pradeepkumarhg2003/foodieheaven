import React from "react";
import Slider from "react-slick";

import dheeraj from "../../../assets/images/dheeraj.jpg";
import punith from "../../../assets/images/punith.jpg";
import kishore from "../../../assets/images/kishore.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Hi everyone i am dheeraj i am very happy about this app this is very helpful
          for me to order food .the foods are very tasteful and healthy"  
          "
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={dheeraj} alt="avatar" className=" rounded" />
          <h6>DHEERAJ S</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Hi everyone i am punith i am very happy about this app this is very helpful
          for me to order food .the foods are very tasteful and healthy and the costs of foods are reliable"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={punith} alt="avatar" className=" rounded" />
          <h6>PUNITH N</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Hi everyone i am Kishor i am very happy about this app this is very helpful
          for me to order food .the foods are very tasteful and healthy!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={kishore} alt="avatar" className=" rounded" />
          <h6>KISHOR N</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
