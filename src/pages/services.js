import HeroMain from "@/components/Home/Hero";
import Process from "@/components/Services/Process";
import React from "react";
import ServiceBg from "../../public/images/service/services-bg-img.jpg";
import Testimonials from "@/components/Home/Testimonials";
import ChooseSection from "@/components/Services/ChooseSection";
import ServicesSection from "@/components/Services/ServiceSection";
import QuestionSection from "@/components/Services/QuestionSection";

const Service = () => {
  return (
    <>
      <HeroMain
        Bg={ServiceBg}
        heading="Our services"
        para={
          <>
            Tailored to suit every trucking business, <br />
            whether it is big or small.
          </>
        }
      />
      <ServicesSection />
      <Process />
      <ChooseSection />
      <Testimonials />
      <QuestionSection />
    </>
  );
};

export default Service;
