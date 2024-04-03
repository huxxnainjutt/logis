import React from "react";
import { StyledOurValues } from "./OurValues.styles";
import Image from "next/image";
import { OurValuesData } from "@/Constant/OurValuesData";

const OurValues = () => {
  return (
    <StyledOurValues>
      <div className="container">
        <h2>Our Values</h2>
        <div className="cards-holder">
          {OurValuesData?.map((item, index) => (
            <div key={index} className="card">
              <figure className="img-holder">
                <Image src={item.image} alt="icon" />
              </figure>
              <strong className="heading">{item.heading}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledOurValues>
  );
};

export default OurValues;
