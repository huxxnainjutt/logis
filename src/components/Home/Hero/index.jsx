import React from "react";
import { StyledHero } from "./Hero.styles";
import Button from "@/components/Button";

const HeroMain = ({ heading, para, btn, vh, Bg }) => {
  return (
    <StyledHero $vh={vh} $Bg={Bg}>
      <div className="container">
        <div className="textWrapper">
          <h1>{heading} </h1>
          <p>{para}</p>
          {btn && (
            <div className="buttonWrapper">
              <Button>Start Truck Dispatching </Button>
            </div>
          )}
        </div>
      </div>
    </StyledHero>
  );
};

export default HeroMain;
