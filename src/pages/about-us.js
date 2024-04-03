import HeroMain from "@/components/Home/Hero";
import aboutBg from "../../public/images/About-Us/about-hero-bg.png";
import React from "react";
import InfoSection from "@/components/AboutUs/InfoSection";
import OurValues from "@/components/AboutUs/OurValues";
import Achievement from "@/components/AboutUs/Achievement";
import BusniessNeed from "@/components/AboutUs/BusinessNeed";
import Process from "@/components/AboutUs/Process";

const About = () => {
  return (
    <>
      <HeroMain
        Bg={aboutBg}
        heading="About Us"
        para={
          <>
            As a former trucking company owner we know <br /> EXACTLY what you
            need
          </>
        }
      />
      <InfoSection />
      <OurValues />
      <Achievement />
      <Process />
      <BusniessNeed />
    </>
  );
};

export default About;
