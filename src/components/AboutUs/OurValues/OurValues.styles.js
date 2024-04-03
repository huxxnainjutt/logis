import styled from "styled-components";

export const StyledOurValues = styled.section`
  padding: 25px 0;
  @media (min-width: 768px) {
    padding: 35px 0;
  }
  @media (min-width: 1200px) {
    padding: 50px 0;
  }
  h2 {
    margin-bottom: 20px;
    @media (min-width: 576px) {
      margin-bottom: 30px;
    }
    @media (min-width: 992px) {
      margin-bottom: 50px;
    }
  }
  .cards-holder {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media (min-width: 992px) {
      flex-wrap: nowrap;
    }
    .card {
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      line-height: 20px;
      border-radius: 23px;
      box-shadow: 0px 2px 12px 0px rgba(135, 135, 135, 0.2);
      padding: 30px 20px;
      @media (min-width: 576px) {
        max-width: 48%;
      }
      @media (min-width: 992px) {
        max-width: 33%;
      }
      .img-holder {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: var(--black);
        border-radius: 50px;
        margin-bottom: 10px;
        @media (min-width: 576px) {
          width: 70px;
          height: 70px;
          margin-bottom: 20px;
        }
        img {
          width: 30px;
          height: 30px;
          @media (min-width: 576px) {
            width: 40px;
            height: 40px;
          }
        }
      }
      .heading {
        display: block;
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 20px;
        @media (max-width: 576px) {
          font-size: 22px;
          line-height: 26px;
          margin-bottom: 10px;
        }
      }
    }
  }
`;
