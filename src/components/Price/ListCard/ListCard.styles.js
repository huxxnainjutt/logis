import styled from "styled-components";
export const Listing = styled.div`
  padding: 50px 0;
  position: relative;
  @media (min-width: 576px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 2500px) {
    &::after {
      content: "";
      position: absolute;
      /* width: 100%; */
      height: 120px;
      background: linear-gradient(rgba(196, 244, 64, 0.5) 50%, #c4f440 50%);
      right: -999px;
      left: -999px;
      top: 250px;
      z-index: -1;
      transform: rotate(190deg);
      @media screen and (min-width: 960px) {
        left: 58%;
        top: 35px;
      }
      @media screen and (min-width: 576px) {
        transform: rotate(165deg);
      }
    }
    &::before {
      content: "";
      position: absolute;
      /* width: 100%; */
      height: 120px;
      background: linear-gradient(#c4f440 50%, rgba(196, 244, 64, 0.5) 50%);
      left: -999px;
      right: -999px;
      bottom: 270px;
      z-index: -1;
      transform: rotate(165deg);
      @media screen and (min-width: 960px) {
        right: 58%;
        bottom: 35px;
      }
    }
  }

  .list-holder {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    /* position: relative; */
    gap: 30px;
  }
  .list-card {
    max-width: 445px;
    width: 100%;
    min-height: 450px;
  }
`;
export const ButtonWrap = styled.div`
  position: relative;
  z-index: 5;
  max-width: 230px;
  width: 100%;
  background-color: var(--gray--bg);
  background-color: ${({ $headingBg }) => $headingBg && $headingBg};
  border-radius: 59px;
  text-align: center;
  padding: 10px;
  margin: 0 auto -28px;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  @media (min-width: 576px) {
    max-width: 300px;
    width: 100%;
  }
`;
export const ListingStyling = styled.div`
  position: relative;
  width: 100%;
  border: ${({ $bg }) => $bg && $bg};
  box-shadow: ${({ $bgShadow }) => $bgShadow && $bgShadow};
  background-color: ${({ $headingBg }) => $headingBg && $headingBg};
  border-radius: 30px;
  padding: 50px 20px 80px;
  background-color: var(--white);
  min-height: 400px;

  ul {
    font-size: 18px;
    line-height: 22px;
    padding-left: 10px;
    font-weight: 300;
    li {
      color: var(--black);
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 15px;
      margin-bottom: 15px;
      .tic-icon {
        background-color: var(--hint-green);
        color: var(--white);
        border-radius: 100%;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
    }
  }
  .btn {
    padding: 0 20px;
    max-width: 340px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
  }
`;
