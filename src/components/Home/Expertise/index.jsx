import React from "react";
import { StyledExpertise } from "./Expertise.styles";
import expertiseSec from "../../../../public/expertiseSec.png";
import prompt from "../../../../public/prompt.svg";
import solutions from "../../../../public/solutions.svg";
import Image from "next/image";
import Button from "@/components/Button";
const Expertise = () => {
  return (
    <div className="container">
      <StyledExpertise>
        <div className="textWrapper">
          <span className="info">Why Choose Webevis Logistics?</span>
          <h2>Efficiency, Expertise, Excellence – We Deliver Success</h2>
          <p>
            Webevis Logistics is your dispatch partner that understands your
            business intricacies and delivers tailored solutions, making your
            journey efficient and genuinely comfortable.{" "}
          </p>
          <div className="infoPoints">
            <figure className="iconWrap">
              <Image src={prompt} alt="prompt" />
            </figure>
            Prompt And Efficient Deliveries
          </div>
          <div className="infoPoints">
            <figure className="iconWrap">
              <Image src={solutions} alt="solutions" />
            </figure>
            Proactive Solutions
          </div>
          <div className="buttonWrappper">
            <Button>Explore More</Button>
          </div>
        </div>
        <div className="imageWrapper">
          <Image src={expertiseSec} alt="expertiseSec" />
        </div>
      </StyledExpertise>
    </div>
  );
};

export default Expertise;
