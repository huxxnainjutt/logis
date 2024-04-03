import React, { useState } from "react";
import Image from "next/image";
import { ServicesListed, StyledServicesWrap } from "./Services.styles";
import { ServicesData } from "./Data";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import Button from "@/components/Button";

const ServicesSection = () => {
  const [numItemsDisplayed, setNumItemsDisplayed] = useState(6);

  const handleLoadMoreClick = () => {
    setNumItemsDisplayed((prevNumItems) => prevNumItems + 6);
  };

  return (
    <>
      <StyledServicesWrap>
        <div className="container">
          <div className="topbar">
            <h2>
              We Provide all Kinds <br /> of Logistics Service
            </h2>
            <p className="content">
              Every aspect of each solution is leveraged from our footprint
              characterized by its extensive geographical coverage and
              adaptability to meet specific warehouse management purposes and
              legal requirements.
            </p>
          </div>
          <ServicesListed>
            {ServicesData.slice(0, numItemsDisplayed).map((item, index) => (
              <li key={index} className="service-list">
                <div className="card">
                  <figure className="thumb">
                    <Image src={item.img} alt="Services" />
                  </figure>
                  <div className="content-wrap">
                    <h3>{item.title}</h3>
                    <p className="discreption">{item.para}</p>
                  </div>
                </div>
              </li>
            ))}
          </ServicesListed>
          <div className="button-wrap">
            {numItemsDisplayed < ServicesData.length && (
              <Button onClick={handleLoadMoreClick} className="btn-transparent">
                See more
                <FaArrowDown className="icon" />
              </Button>
            )}
          </div>
        </div>
      </StyledServicesWrap>
    </>
  );
};

export default ServicesSection;
