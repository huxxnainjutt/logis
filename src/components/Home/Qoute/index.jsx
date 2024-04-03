import React from "react";
import { StyledQoute } from "./Qoute.styles";
import containerimg from "../../../../public/containerimg.png";

import Image from "next/image";
import Button from "@/components/Button";
import { Equipment, QouteData } from "@/Constant/Data";
import Select from "@/components/Select";
const Qoute = () => {
  return (
    <div className="container">
      <StyledQoute>
        <div className="textWrapper">
          <span className="info">Beyond Traditional Dispatch Solutions</span>
          <h2>Additional Services to Amplify Efficiency</h2>
          {QouteData.map((elem, ind) => (
            <div className="infoPoints" key={ind}>
              <figure className="iconWrap">
                <Image src={elem.img} alt="prompt" />
              </figure>
              {elem.text}
            </div>
          ))}
        </div>
        <div className="imageWrapper">
          <div className="content">
            <div className="h2">Get Your Instant Quote</div>

            <div className="fileds">
              <Select
                option={Equipment}
                title="Truck Type:"
                onChange={(e, title) => console.log(e, title)}
              />
            </div>
            <div className="fileds">
              <Select
                option={Equipment}
                title="Truck Type:"
                onChange={(e, title) => console.log(e, title)}
              />
            </div>
            <div className="fileds last-child">
              <Select
                option={Equipment}
                title="Truck Type:"
                onChange={(e, title) => console.log(e, title)}
              />
            </div>
            <Button>Schedule a call</Button>
          </div>
        </div>
      </StyledQoute>
    </div>
  );
};

export default Qoute;
