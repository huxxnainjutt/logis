import React, { useState } from "react";
import { Listing, ButtonWrap, ListingStyling } from "./ListCard.styles";
import { TiTick } from "react-icons/ti";
import { ListData } from "./ListCard.data";

const ListCard = () => {
  return (
    <>
      <Listing>
        <div className="container">
          <div className="list-holder">
            {ListData.map((item, index) => (
              <div className="list-card" key={index}>
                <ButtonWrap $headingBg={item.headingBg}>
                  <div className="rate">{item.heading} </div>
                </ButtonWrap>
                <ListingStyling
                  $bg={item.bg}
                  bgBorder={item.bgBorder}
                  $bgShadow={item.bgShadow}
                >
                  <ul>
                    <li>
                      <TiTick className="tic-icon" />
                      <p>{item.data1}</p>
                    </li>
                    <li>
                      <TiTick className="tic-icon" /> {item.data2}
                    </li>
                    <li>
                      <TiTick className="tic-icon" /> {item.data3}
                    </li>
                  </ul>
                  <div className="btn">{item.btn}</div>
                </ListingStyling>
              </div>
            ))}
          </div>
        </div>
      </Listing>
    </>
  );
};

export default ListCard;
