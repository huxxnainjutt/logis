import React from "react";
import { StyledInfoSection } from "./InfoSection.styles";
import infoImg from "../../../../public/images/About-Us/about-info-img.png";
import Icon from "../../../../public/images/About-Us/checkmark-icon.png";
import Image from "next/image";

const InfoSection = () => {
  return (
    <StyledInfoSection>
      <div className="container">
        <div className="content-holder">
          <span className="sub-heading">ABOUT US</span>
          <h2>Webevis Logistics</h2>
          <p>
            A strong stance earns a large reputation, and with a larger
            reputation comes greater obligations, and with greater
            responsibilities comes greater problems. Webevis Truck Dispatchers
            are the knights that take on any task and easily overcome it.
          </p>
          <p>
            Webevis Truck Dispatchers is one of the world’s leading dispatching
            businesses, and we are extremely focused and well-managed
            dispatchers that believe in maintaining our outstanding reputation.
          </p>
          <div className="infoPoints">
            <figure className="iconWrap">
              <Image src={Icon} alt="Icon" />
            </figure>
            We’re always eager to help you and provide you our undivided
            attention.
          </div>
        </div>
        <div className="img-holder">
          <Image src={infoImg} alt="infoImg" />
          <div className="text-wrapper">
            <span>We&apos;ll Help You Find the Right Load!</span>
          </div>
        </div>
      </div>
    </StyledInfoSection>
  );
};

export default InfoSection;
