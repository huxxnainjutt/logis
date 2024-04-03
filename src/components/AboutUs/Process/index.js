import React from "react";
import { StyledProcess } from "./Process.styles";

const Process = () => {
  return (
    <StyledProcess>
      <div className="container">
        <span className="sub-heading">PROGRESS FROM OUR PROCESS</span>
        <h2>Process</h2>
        <div className="card-holder">
          <div className="step-holder">
            <div className="step">
              <div className="card">
                <h3>Extraction of Data from CRM Software</h3>
                <p>
                  We keep our eyes open and maintain track of the needs, and we
                  extract any requirement that is supplied into the portal and
                  proceed to the next phase.
                </p>
              </div>
              <strong className="heading">STEP 1</strong>
            </div>
            <div className="card-before"></div>
          </div>
          <div className="step-holder">
            <div className="step">
              <strong className="heading">STEP 2</strong>
              <div className="card">
                <h3>Locating an Appropriate Truck Driver</h3>
                <p>
                  We keep our eyes open and maintain track of the needs, and we
                  extract any requirement that is supplied into the portal and
                  proceed to the next phase.
                </p>
              </div>
            </div>
            <div className="card-before"></div>
          </div>
          <div className="step-holder">
            <div className="step">
              <div className="card">
                <h3>The Loader&apos;s Contact</h3>
                <p>
                  Before meeting with the driver, we contact the loaders and
                  pitch them on the rates and offer them our best deal, which
                  they accept.
                </p>
              </div>
              <strong className="heading">STEP 3</strong>
            </div>
            <div className="card-before"></div>
          </div>
          <div className="step-holder">
            <div className="step">
              <strong className="heading">STEP 4</strong>
              <div className="card">
                <h3>Extraction of Data from CRM Software</h3>
                <p>
                  We keep our eyes open and maintain track of the needs, and we
                  extract any requirement that is supplied into the portal and
                  proceed to the next phase.
                </p>
              </div>
            </div>
            <div className="card-before"></div>
          </div>
        </div>
      </div>
    </StyledProcess>
  );
};

export default Process;
