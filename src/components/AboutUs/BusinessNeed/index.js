import React from "react";
import { BusinessStyling, BusinesNeed } from "./BusinessNeed.styles";
import { NeedData } from "./BusninessData";
import Button from "@/components/Button";
import Image from "next/image";
const BusniessNeed = () => {
  return (
    <>
      <BusinessStyling>
        <div className="busines-wrap">
          <div className="imgCard-wrap">
            {NeedData.map((item, index) => (
              <div key={index} className="img-card">
                <Image src={item.image} alt="Gallery Image" />
              </div>
            ))}
          </div>
        </div>
      </BusinessStyling>
      <BusinesNeed>
        <div className="container">
          <div className="busNeed-wrap">
            <div className="info-wrap">
              <h2 className="title">Here to Help Your Every Business Need</h2>
              <p>
                Stop worrying about any shipping problems. Focus on you
                business. Let us provide the support you deserve.
              </p>
            </div>
            <Button className="btn">Get a Free quote</Button>
          </div>
        </div>
      </BusinesNeed>
    </>
  );
};

export default BusniessNeed;
