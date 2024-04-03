import styled, { css } from "styled-components";
import QuestionBg from "../../../../public/images/service/question-bg-img.jpg";
import HomeQuesBG from "../../../../public/images/home/home-question-bgImg.png";
import PricingQuesBg from "../../../../public/images/Pricing/pricingQuesBg.png";

export const StyledQuestionWrap = styled.section`
  width: 100%;
  background: url(${QuestionBg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 60px 0;
  margin-bottom: 50px;
  ${({ $bgImg }) =>
    $bgImg &&
    css`
      background: url(${HomeQuesBG.src});
      background-color: var(--black);
      background-attachment: fixed;
      background-size: cover;
    `}
  ${({ $FaqsBgImg }) =>
    $FaqsBgImg &&
    css`
      background: url(${PricingQuesBg});
      background-color: var(--black);
      background-attachment: fixed;
      background-size: cover;
    `}
  .questionWrap {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;

    @media (min-width: 992px) {
      justify-content: space-between;
    }
  }
  .content-wrapper {
    max-width: 600px;
    .small {
      color: var(--primary);
      display: flex;
      margin-bottom: 15px;
    }
    .title {
      color: var(--white);
    }
    .faqs-content {
      width: 100%;
    }
  }
`;
export const BgWrap = styled.div`
background-size:cover;

`;

export const ChatWrap = styled.div`
  margin-top: 83px;
  max-width: 350px;
  padding: 40px 20px;
  background-color: var(--white);
  border-radius: 20px;
  .title {
    font-weight: 500;
  }
  .info-wrap {
    display: flex;
    margin-bottom: 35px;
    .icon-box {
      font-size: 22px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: var(--secondary);
      color: var(--primary);
      margin-right: 16px;
    }
    .sub-title {
      color: var(--body-text-25);
      font-weight: 300;
      margin-bottom: 5px;
    }
  }
`;
