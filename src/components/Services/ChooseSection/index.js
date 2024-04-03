import React from "react";
import { StyledInfoSection } from "./ChooseSection.styles";
import infoImg from "../../../../public/images/service/choose-img.jpg";
import Image from "next/image";

const ChooseSection = () => {
  return (
    <StyledInfoSection>
      <div className="container">
        <div className="content-holder">
          <h2 className="title">
            Why Choose <br /> Webevis Logistics?
          </h2>
          <p>
            Webevis Logistics is your dispatch solution that transcends the
            ordinary. Our seasoned professionals bring years of brokerage
            experience and in-depth knowledge of trucking nuances, ensuring
            unparalleled expertise. With a focus on user-centric design, Webevis
            Logistics ensures a seamless experience tailored to your
            company&apos;s unique needs. Our advanced dispatch management system
            is backed by cutting-edge technology, providing end-to-end services
            to alleviate the burdens of load hunting, paperwork, and payment
            struggles. You can trust us to elevate your fleet&apos;s
            performance, reduce costs, and enhance customer satisfaction
          </p>
        </div>
        <div className="img-holder">
          <Image src={infoImg} alt="Why Choose" />
        </div>
      </div>
    </StyledInfoSection>
  );
};

export default ChooseSection;
