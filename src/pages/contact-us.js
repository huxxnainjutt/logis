import HeroMain from "@/components/Home/Hero";
import React from "react";
import ContactBg from "../../public/images/contact/contact-banner-bg.jpg";
import ContactWrap from "@/components/ContactUs/Contact";

const Contact = () => {
  return (
    <>
      <HeroMain
        Bg={ContactBg}
        heading="Contact Us"
        para={
          <>
            Where Transparency Drives Every Mile. No surprises, only <br />
            upfront pricing for swift and reliable dispatch services.
          </>
        }
      />
      <ContactWrap />
    </>
  );
};

export default Contact;
