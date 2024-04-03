import styled from "styled-components";
export const StyledInfoBar = styled.div`
  margin-bottom: 100px;
  border-radius: 70px;
  background: var(--black);
  box-shadow: 0px -3px 21px 0px rgba(0, 0, 0, 0.18);
  padding: 30px 30px;
  margin-top: -60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: flex-start;
  @media screen and (max-width: 900px) {
    margin-top: -100px;
    border-radius: 40px;
    padding: 30px 50px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 576px) {
    padding: 30px 20px;
  }

  .infocol {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    .imageWrapper {
      max-width: 52px;
      flex-shrink: 0;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .text {
      color: var(--white);
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
      @media screen and (min-width: 992px) {
        font-size: 18px;
        line-height: 22px;
      }
      .title {
        display: block;
        font-size: 22px;
        line-height: 24px;
        font-weight: 400;
        @media screen and (min-width: 992px) {
          font-size: 30px;
          line-height: 34px;
        }
      }
    }
  }
`;
