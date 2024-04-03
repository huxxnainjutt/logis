import React, { useState, useEffect, Fragment } from "react";
import { AchievementWrap } from "./Achievement.styles";
import Image from "next/image";
import AchievementImg from "../../../../public/images/About-Us/achievement-img.png";

const Data = [
  {
    id: 1,
    text: "State",
    start: 0,
    end: 50,
  },
  {
    id: 2,
    percent: "%",
    text: "Dispatch Assurity",
    start: 0,
    end: 100,
  },
  {
    id: 3,
    percent: "%",
    text: "Emergency Dispatch Success Rate",
    start: 0,
    end: 100,
  },
];

const Achievement = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 50);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <AchievementWrap>
      <div className="container">
        <div className="heading">
          <h2>Our Achievements</h2>
        </div>
        <div className="counter-wrap">
          {Data.map((val, ind) => {
            return (
              <>
                <div className="counter" key={ind}>
                  <h3 className="h1">
                    {count < val.end ? count : val.end} {val.percent}
                  </h3>
                  <p>{val.text}</p>
                </div>
                <div className="bar"></div>
              </>
            );
          })}
        </div>
      </div>

      <div className="img">
        <Image src={AchievementImg} alt="Achievement Image" />
      </div>
    </AchievementWrap>
  );
};

export default Achievement;
