import styled, { css } from "styled-components";
export const AccordionStyling = styled.div`
  padding: 20px 0px;
  .faqs-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    transition: 0.3s;
    .faqs-content {
      width: 100%;
      margin-bottom: 10px;
      background-color: rgba(217, 217, 217, 0.44);
      border-radius: 20px;

      ${({ $darkFaqs }) =>
        $darkFaqs &&
        css`
          border-radius: 0;
          border-bottom: 1px solid var(--white);
          background-color: var(--black);
        `}
    }
    .faqs-question {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      &.active {
        ${({ $darkFaqs }) =>
          $darkFaqs &&
          css`
            margin-bottom: 20px;
            border-radius: 23px;
            border: 1.5px solid #fff;
            background: linear-gradient(
              155deg,
              rgba(255, 255, 255, 0) -2.13%,
              rgba(255, 255, 255, 0.06) -2.13%
            );
            box-shadow: 0px 4px 49px 0px rgba(0, 7, 72, 0.12);
          `}
      }
      h4 {
        margin: 0;
        color: var(--black);
        line-height: normal;
        font-weight: 500;
        transition: 0.3s;
        ${({ $darkFaqs }) =>
          $darkFaqs &&
          css`
            color: var(--white);
          `}
        strong {
          color: var(--body-text-25);
          ${({ $darkFaqs }) =>
            $darkFaqs &&
            css`
              color: var(--primary);
            `}
        }
      }
      .dropdown-icon {
        font-size: 26px;
        color: var(--body-text-25);
        cursor: pointer;
        transition: 0.3s;
        @media (min-width: 768px) {
          font-size: 30px;
        }
        ${({ $darkFaqs }) =>
          $darkFaqs &&
          css`
            color: white;
          `}
      }
    }
    .answer {
      width: 100%;
      p {
        padding: 0 10px 10px 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        @media (min-width: 768px) {
          font-size: 16px;
          padding: 0 20px 20px 20px;
        }
        ${({ $darkFaqs }) =>
          $darkFaqs &&
          css`
            color: var(--white);
            font-weight: 300;
          `}
      }
    }
  }
`;
export const AnsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-height: ${({ $showData }) => ($showData ? "1000px" : "0px")};
  transition: all 0.5s ease-in-out;
  color: var(--black);
`;
