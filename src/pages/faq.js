import React from "react";
import HeroMain from "@/components/Home/Hero";
import Business from "@/components/FAQs/Business";
import BG from "../../public/images/Business/faqs-bg-img.png";
import Faqs from "@/components/FAQs/Faqs";

const FAQ = () => {
  return (
    <>
      <HeroMain
        Bg={BG}
        heading={"FAQs"}
        para={
          "Where Transparency Drives Every Mile. No surprises, only upfront pricing for swift and reliable dispatch services."
        }
      />
      <Faqs />
      <Business />
    </>
  );
};

export default FAQ;
