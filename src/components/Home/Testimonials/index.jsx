import React from "react";
import Button from "@/components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vans from "../../../../public/vans.jpg";
import reefers from "../../../../public/reefers.jpg";
import Deck from "../../../../public/Deck.jpg";
import star from "../../../../public/star.svg";
import Image from "next/image";
import { ServicesSlider, Styledservices } from "./Testimonials.styles";
import { TestimonialsData } from "@/Constant/Data";
const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 628,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Styledservices>
      <div className="container">
        <div className="textWrap">
          <div className="text">
            <span className="sectionInfo">Testimonials</span>
            <h2>What our client say</h2>
          </div>
        </div>
        <ServicesSlider>
          <Slider {...settings}>
            {TestimonialsData.map((elem, ind) => (
              <div className="card" key={ind}>
                <div className="userDetail">
                  <div className="imageWrapper">
                    <Image src={elem.image} alt="vans" />
                  </div>
                  <div className="text">
                    <span className="customerDisc">Satisfied customer</span>
                    <strong className="userName">{elem.name}</strong>
                  </div>
                </div>
                <div className="review">
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                  <Image src={star} alt="star" />
                </div>
                <strong className="discreption">{elem.disc}</strong>
              </div>
            ))}
          </Slider>
        </ServicesSlider>
      </div>
    </Styledservices>
  );
};

export default Testimonials;
