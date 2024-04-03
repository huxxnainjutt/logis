import React from "react";
import Expertise from "@/components/Home/Expertise";
import HeroMain from "@/components/Home/Hero";
import InfoBar from "@/components/Home/InfoBar";
import Qoute from "@/components/Home/Qoute";
import Services from "@/components/Home/Services";
import homeMainbg from "../../public/homeMainbg.jpg";
import Testimonials from "@/components/Home/Testimonials";
import QuestionSection from "@/components/Services/QuestionSection";
import { useState, useEffect } from "react";

const Home = () => {
  // const [isMounted, setIsMounted] = useState(false);
  // useEffect(()=>{

  //   setIsMounted(true)
  // },[])

  // if(!isMounted){

  //   return
  // }
  return (
    <>
      <HeroMain
        vh
        Bg={homeMainbg}
        heading="Revolutionize Your Truck Dispatching Operations"
        para="At Webevis Logistics, we redefine dispatch excellence, providing tailored 
        solutions for seamless logistics management and unparalleled operational 
        efficiency."
        btn
      />
      <InfoBar />
      <Expertise />
      <Services />
      <Qoute />
      <Testimonials />
      <QuestionSection bgImg />
    </>
  );
};

export default Home;
