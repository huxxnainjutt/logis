import styled from "styled-components";

export const StyledInfoSection = styled.section`
  padding: 50px 0 25px;
  @media (min-width: 768px) {
    padding: 70px 0 35px;
  }
  @media (min-width: 1200px) {
    padding: 100px 0 50px;
  }
  .container {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      gap: 90px;
    }
    .content-holder {
      @media (min-width: 1200px) {
        max-width: 500px;
      }
      .sub-heading {
        display: block;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
        color: var(--body-text-25);
      }
      p {
        margin-bottom: 20px;
        @media (max-width: 1199px) {
          font-size: 18px;
          line-height: 22px;
        }
        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 10px;
        }
      }
    }
    .infoPoints {
      display: flex;
      gap: 10px;
      color: var(--black);
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      margin-bottom: 30px;
      @media (min-width: 992px) {
        margin-bottom: 15px;
      }
      @media (min-width: 1200px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media (min-width: 576px) {
        font-size: 18px;
        line-height: 22px;
      }
      .iconWrap {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        padding: 7px;
        background: var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        @media screen and (min-width: 768px) {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .img-holder {
    max-width: 500px;
    border-radius: 20px;
    overflow: hidden;
    flex-shrink: 0;
    margin: 0 auto;
    @media (min-width: 992px) {
      max-width: 400px;
      margin: 0;
    }
    @media (min-width: 1200px) {
      max-width: 454px;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    .text-wrapper {
      font-size: 25px;
      line-height: 30px;
      font-weight: 500;
      text-align: center;
      padding: 20px 40px;
      background: var(--body-text);
      color: var(--white);
      @media (min-width: 576px) {
        padding: 30px 65px;
      }
      @media (min-width: 1200px) {
        font-size: 30px;
        line-height: 35px;
      }
    }
  }
`;
