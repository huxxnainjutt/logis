import styled from "styled-components";
import containerimg from "../../../../public/containerimg.png";

export const StyledQoute = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .textWrapper {
    max-width: 650px;
    color: var(--black);
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
    @media screen and (min-width: 992px) {
      max-width: 410px;
    }
    @media screen and (max-width: 991px) {
      max-width: 100%;
      margin: 50px auto 20px auto;
      font-size: 16px;
      line-height: 20px;
    }
    .info {
      display: block;
      margin-bottom: 15px;
      color: #777;
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
    }
    .buttonWrappper {
      padding-top: 15px;
      max-width: 140px;
    }
  }
  .imageWrapper {
    position: relative;
    background: url(${containerimg.src});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    display: flex;
    align-items: flex-end;

    width: 320px;
    height: 450px;
    padding-bottom: 30px;
    @media screen and (min-width: 470px) {
      width: 400px;
      height: 633px;
      padding-bottom: 50px;
    }
    @media screen and (min-width: 768px) {
      width: 600px;
    }
    @media screen and (min-width: 1200px) {
      width: 671px;
    }

    @media screen and (max-width: 991px) {
      margin: 0 auto 20px auto;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -9999px;
        right: -9999px;
        height: 1px;
        background: var(--black);
      }
    }
    img {
      max-width: 100%;
      height: auto;
    }
    .content {
      width: 100%;
      max-width: 280px;
      margin: 0 auto;
      text-align: center;

      @media screen and (min-width: 370px) {
        max-width: 300px;
      }
      @media screen and (min-width: 470px) {
        max-width: 350px;
      }
      @media screen and (min-width: 768px) {
        max-width: 480px;
      }
      @media screen and (min-width: 1200px) {
        max-width: 550px;
      }
      .fileds {
        margin-bottom: 15px;
        @media screen and (max-width: 470px) {
          margin-bottom: 5px;
        }
      }
      .last-child {
        margin-bottom: 30px;
      }
      .h2 {
        font-weight: 400;
        text-transform: capitalize;
        margin: 0 auto 15px auto;
        color: var(--white);
      }
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
