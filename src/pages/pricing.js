import React from "react";
import HeroMain from "@/components/Home/Hero";
import PriceList from "@/components/Price/Price";
import ListCard from "@/components/Price/ListCard";
import BG from "../../public/images/Pricing/pricingBg.png";
import Testimonials from "@/components/Home/Testimonials";
import QuestionSection from "@/components/Services/QuestionSection";

const Pricing = () => {
  return (
    <>
      <div>
        <HeroMain
          Bg={BG}
          heading={"Transparent pricing"}
          para={
            "Where Transparency Drives Every Mile. No surprises, only upfront pricing for swift and reliable dispatch services."
          }
        />
        <PriceList />
        <ListCard />
        <Testimonials />
        <QuestionSection FaqsBgImg/>
      </div>
    </>
  );
};

export default Pricing;
