import React from "react";
import { ChatWrap, StyledQuestionWrap} from "./Question.styles";
import Link from "next/link";
import Button from "@/components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import Accordions from "@/components/FAQs/Accordions";

const QuestionSection = ({ bgImg, FaqsBgImg, ...rest }) => {
  return (
    <>
      <StyledQuestionWrap $bgImg={bgImg} $FaqsBgImg={FaqsBgImg} {...rest}>
        <div className="container">
          <div className="questionWrap">
            <div className="content-wrapper">
              <span className="small">FAQs</span>
              <h2 className="title">Frequently Asked Questions</h2>
              <div className="FaqsContent">
                <Accordions darkFaqs />
              </div>
            </div>

            <ChatWrap>
              <h3 className="title">LET’S TALK</h3>
              <p>You Need Any Help? Get Free Consultation</p>
              <div className="info-wrap">
                <span className="icon-box">
                  <FaPhoneAlt />
                </span>
                <div className="content">
                  <h5 className="sub-title">Have Any Questions</h5>
                  <Link href="tel:334 530 5624">334 530 5624</Link>
                </div>
              </div>
              <Button>
                <Link href="contact-us">Contact us</Link>
              </Button>
            </ChatWrap>
          </div>
        </div>
      </StyledQuestionWrap>
    </>
  );
};

export default QuestionSection;
