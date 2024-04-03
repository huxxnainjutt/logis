import React from "react";
import { StyledInfoBar } from "./InfoBar.styles";
import income from "../../../../public/income.svg";
import truck from "../../../../public/truck.svg";
import group from "../../../../public/group.svg";
import loader from "../../../../public/loader.svg";
import Image from "next/image";
const InfoBar = () => {
  return (
    <div className="container">
      <StyledInfoBar>
        <div className="infocol">
          <div className="imageWrapper">
            <Image src={loader} alt="loader" />
          </div>
          <div className="text">
            <strong className="title">12000</strong>
            <p>Loads</p>
          </div>
        </div>
        <div className="infocol">
          <div className="imageWrapper">
            <Image src={truck} alt="truck" />
          </div>
          <div className="text">
            <strong className="title">881</strong>
            <p>New trucks in 2024</p>
          </div>
        </div>
        <div className="infocol">
          <div className="imageWrapper">
            <Image src={group} alt="group" />
          </div>
          <div className="text">
            <strong className="title">300</strong>
            <p>Owner reporters</p>
          </div>
        </div>
        <div className="infocol">
          <div className="imageWrapper">
            <Image src={income} alt="income" />
          </div>
          <div className="text">
            <strong className="title">$8,000+</strong>
            <p>Weekly gross</p>
          </div>
        </div>
      </StyledInfoBar>
    </div>
  );
};

export default InfoBar;
