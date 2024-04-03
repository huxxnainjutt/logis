import styled from "styled-components";

export const StyledExpertise = styled.div`
  margin-bottom: 25px;
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .textWrapper {
    max-width: 548px;
    color: var(--black);
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
    @media screen and (max-width: 991px) {
      max-width: 100%;
      margin: 0 auto 20px auto;
      font-size: 16px;
      line-height: 20px;
    }
    .info {
      display: block;
      margin-bottom: 15px;
      color: var(--gray);
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
    }
    .buttonWrappper {
      padding-top: 15px;
      max-width: 140px;
    }
  }
  .imageWrapper {
    max-width: 528px;
    @media screen and (max-width: 991px) {
      margin: 0 auto 20px auto;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .infoPoints {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--black);
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
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
`;
