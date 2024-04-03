import React, { useState } from "react";
import { AccordionStyling, AnsWrapper } from "./Accordions.styles";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
import { AccordionData } from "./AccordionData";

const Accordions = ({ darkFaqs }) => {
  const [showData, setShowData] = useState(null);
  const clickHandler = (index) => {
    showData == index ? setShowData(null) : setShowData(index);
  };

  return (
    <AccordionStyling $darkFaqs={darkFaqs}>
      <div className="container">
        <div className="faqs-wrap">
          {AccordionData.map((currentVal, ind) => {
            return (
              <div
                className="faqs-content"
                key={ind}
                onClick={() => clickHandler(ind)}
              >
                <div
                  className={`faqs-question ${showData == ind ? "active" : ""}`}
                >
                  <h4>
                    <strong>0{ind + 1}</strong> {currentVal.question}
                  </h4>
                  <div className="dropdown-icon">
                    {showData === ind ? (
                      <IoMdArrowDropup />
                    ) : (
                      <IoMdArrowDropdown />
                    )}
                  </div>
                </div>
                <AnsWrapper $showData={showData == ind}>
                  <div className="answer">
                    <p>{currentVal.answer}</p>
                  </div>
                </AnsWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </AccordionStyling>
  );
};

export default Accordions;
