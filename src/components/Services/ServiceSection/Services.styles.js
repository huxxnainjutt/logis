import styled from "styled-components";

export const StyledServicesWrap = styled.section`
  width: 100%;
  padding: 100px 0;
  @media screen and (max-width: 991px) {
    padding: 70px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
  .topbar {
    display: flex;
    padding-bottom: 110px;
    @media screen and (max-width: 1199px) {
      padding-bottom: 60px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .content {
      font-size: 20px;
      line-height: 24px;
      max-width: 580px;
      margin-left: auto;
      @media screen and (max-width: 1199px) {
        font-size: 18px;
      }
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
  .button-wrap {
    text-align: center;
    .btn-transparent {
      max-width: 132px;
    }
  }
  .btn-transparent {
    background-color: transparent;
    border: 2px solid var(--black);
    .icon {
      margin-left: 8px;
      position: relative;
      top: 2px;
    }
  }
`;
export const ServicesListed = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 65px;
  column-gap: 15px;
  margin-bottom: 20px;
  @media screen and (min-width: 991px) {
    row-gap: 80px;
  }
  @media screen and (min-width: 576px) {
    row-gap: 80px;
  }
  .service-list {
    width: 32%;
    display: flex;
    @media screen and (max-width: 991px) {
      width: 48%;
    }
    @media screen and (max-width: 575px) {
      width: 100%;
      max-width: 335px;
    }
  }
  .card {
    width: 100% !important;
    background: var(--white);
    padding: 30px;
    border-radius: 23px;
    width: 363px;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.13);

    .thumb {
      max-width: 298px;
      margin: -75px auto 10px auto;
      border-radius: 20px;
      overflow: hidden;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    .title {
      color: var(--black);
      font-size: 22px;
      line-height: 26px;
      font-weight: 500;
      @media screen and (min-width: 768px) {
        font-size: 26px;
        line-height: 30px;
      }
    }
    .discreption {
      display: block;
      color: #777;
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;
