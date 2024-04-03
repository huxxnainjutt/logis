import React, { useState } from "react";
import { PriceStyled } from "./Price.styles";
import { priceData } from "./priceData";

const PriceList = () => {
  const [price, setPrice] = useState(priceData);
  return (
    <>
      <PriceStyled>
        <div className="container">
          <h2>Pricing That Powers Your Success</h2>
          {price.map((PriceListItem, index) => (
            <div className="list-holder" key={index}>
              <div className="list-logo">
                <div>{PriceListItem.image}</div>
              </div>
              <div className="list-info">
                <h3>{PriceListItem.title}</h3>
                <p>{PriceListItem.description}</p>
              </div>
            </div>
          ))}  
        </div>
      </PriceStyled>
    </>
  );
};

export default PriceList;
