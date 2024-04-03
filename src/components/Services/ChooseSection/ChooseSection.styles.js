import styled from "styled-components";

export const StyledInfoSection = styled.section`
  padding: 100px 0;
  @media screen and (max-width: 991px) {
    padding: 70px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      .title {
        br {
          display: none;
        }
      }
    }
    .content-holder {
      max-width: 565px;
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
      .sub-heading {
        display: block;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 20px;
        @media screen and (max-width: 768px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
    .img-holder {
      max-width: 100%;
      border-radius: 20px;
      overflow: hidden;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
  }
`;
