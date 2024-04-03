import React from "react";
import { ServicesSlider, Styledservices } from "./services.styles";
import Button from "@/components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import vans from "../../../../public/vans.jpg";
import reefers from "../../../../public/reefers.jpg";
import Deck from "../../../../public/Deck.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
const Services = () => {
  const router = useRouter();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 628,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Styledservices>
      <div className="container">
        <div className="textWrap">
          <div className="text">
            <span className="sectionInfo">OUR SERVICES</span>
            <h2>We Provide All Kinds Of Logistics Service</h2>
          </div>
          <div className="buttonWrap">
            <Button onClick={() => router.push("/services")}>
              View all services
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <ServicesSlider>
          <Slider {...settings}>
            <div className="card">
              <div className="imageWrapper">
                <Image src={vans} alt="vans" />
              </div>
              <h3>Dry Vans</h3>
              <strong className="discreption">
                For seamless dry van freight management, trust our proficient
                dispatchers to handle consolidation, drop and hook, ensuring
                efficiency in every shipment.
              </strong>
            </div>
            <div className="card">
              <div className="imageWrapper">
                <Image src={reefers} alt="reefers" />
              </div>
              <h3>Reefers</h3>
              <strong className="discreption">
                Temperature-sensitive freight finds a reliable home in our
                Reefers, maintaining optimal conditions throughout the entire
                shipping process.
              </strong>
            </div>
            <div className="card">
              <div className="imageWrapper">
                <Image src={Deck} alt="Deck" />
              </div>
              <h3>Step Deck</h3>
              <strong className="discreption">
                Handle oversized and uniquely shaped cargo effortlessly with our
                Step Deck trailers, offering versatility in transportation
                solutions.
              </strong>
            </div>
            <div className="card">
              <div className="imageWrapper">
                <Image src={vans} alt="vans" />
              </div>
              <h3>Dry Vans</h3>
              <strong className="discreption">
                For seamless dry van freight management, trust our proficient
                dispatchers to handle consolidation, drop and hook, ensuring
                efficiency in every shipment.
              </strong>
            </div>
            <div className="card">
              <div className="imageWrapper">
                <Image src={reefers} alt="reefers" />
              </div>
              <h3>Reefers</h3>
              <strong className="discreption">
                Temperature-sensitive freight finds a reliable home in our
                Reefers, maintaining optimal conditions throughout the entire
                shipping process.
              </strong>
            </div>
          </Slider>
        </ServicesSlider>
      </div>
    </Styledservices>
  );
};

export default Services;
