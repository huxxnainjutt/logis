import styled from "styled-components";

export const PriceStyled = styled.div`
  padding-top: 50px;
  @media (min-width: 576px) {
    padding-top: 100px;
  }
  h2 {
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
    @media (min-width: 576px) {
      font-size: 35px;
    }
    @media (min-width: 786px) {
      font-size: 45px;
    }
  }
  .list-holder {
    max-width: 1120px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    gap: 20px;
    margin-top: 50px;
    border-radius: 12px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.18);
    }
    .list-logo {
      background-color: var(--black);
      border-radius: 100%;
      width: 50px;
      height: 50px;
      @media (min-width: 576px) {
        width: 70px;
        height: 70px;
      }
    }
    img {
      max-width: 30px;
      margin: 0 auto;
      text-align: center;
      padding-top: 10px;
      @media (min-width: 576px) {
        max-width: 40px;
        padding-top: 15px;
      }
    }
  }
  .list-info {
    max-width: 100%;
    width: 941px;
    h3 {
      font-size: 24px;
      font-weight: 500;
      @media (min-width: 786px) {
        font-size: 26px;
      }
    }
    p {
      font-size: 15px;
      font-weight: 300;
      @media (min-width: 786px) {
        font-size: 16px;
      }
    }
  }
`;
