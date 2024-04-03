import styled from "styled-components";
export const BusinessWrap = styled.section`
  padding-bottom: 50px;
  .business-holder {
    background-color: rgba(196, 244, 64, 0.5);
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 20px;
    display: flex;
    gap: 30px;
    @media (min-width: 992px) {
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .text-holder {
      width: 750px;
      margin: 20px;
      @media (min-width: 768px) {
        padding: 0px 30px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
      .btn {
        margin-top: 20px;
        width: 160px;
      }
    }
    .img-holder img {
      border-radius: 0px 0px 20px 20px;
      width: 350px;
      @media (min-width: 576px) {
        width: 275px;
      }
      @media (min-width: 992px) {
        border-radius: 0px 20px 20px 0px;
      }
    }
  }
`;
