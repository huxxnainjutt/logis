import React from "react";
import { StylingWrap } from "./faqs.styles";
import Accordions from "../Accordions";
const Faqs = () => {
  return (
    <>
      <StylingWrap>
        <div className="container">
          <div className="heading">
            <h2>Most Common Faq&apos;s</h2>
          </div>
          <Accordions />
        </div>
      </StylingWrap>
    </>
  );
};

export default Faqs;
