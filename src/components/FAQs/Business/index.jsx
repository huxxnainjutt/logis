import React from "react";
import { BusinessWrap } from "./Business.styles";
import Image from "next/image";
import BusinessImage from "../../../../public/images/Business/business-img.png";
import Button from "@/components/Button";

const Business = () => {
  return (
    <>
      <BusinessWrap>
        <div className="container">
          <div className="business-holder">
            <div className="text-holder">
              <h2>Here to Help Your Business Need</h2>
              <p>
                Stop worrying about any shipping problems. Focus on your
                business. Let us provide the support you deserve.
              </p>
              <Button dark className="btn">
                Get a Free quote
              </Button>
            </div>
            <div className="img-holder">
              <Image src={BusinessImage} alt="Business-image" />
            </div>
          </div>
        </div>
      </BusinessWrap>
    </>
  );
};

export default Business;
