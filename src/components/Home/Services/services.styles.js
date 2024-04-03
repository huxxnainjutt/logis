import styled from "styled-components";
import servicesSecBg from "../../../../public/servicesSecBg.jpg";

export const Styledservices = styled.div`
  padding: 53px 0 10px 0;
  background: linear-gradient(rgba(20, 20, 22, 0.9), rgba(20, 20, 22, 0.9)),
    url(${servicesSecBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  .sectionInfo {
    display: block;
    margin-bottom: 15px;
  }
  .textWrap {
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .text {
      color: var(--primary);
      font-size: 16px;
      line-height: 20px;
      font-weight: 300;
      @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 22px;
      }
      h2 {
        color: var(--white);
        max-width: 500px;
        font-weight: 400;
        margin-bottom: 30px;
      }
    }
    .buttonWrap {
      width: 100%;
      max-width: 200px;
      margin-bottom: 15px;
      margin-left: auto;
    }
  }
`;

export const ServicesSlider = styled.div`
  background: transparent;
  position: relative;
  margin-bottom: 25px;
  .slick-slide {
    padding: 50px 10px 0 10px;
    display: flex;
    @media screen and (max-width: 628px) {
      padding: 50px 0px 0 0px;
    }
    > div {
      display: flex;
      width: 100%;
    }
  }
  .slick-slider {
    display: flex;
    .slick-arrow {
      display: none !important;
    }
    .slick-dots {
      .slick-active {
        background: var(--primary);
      }
      li {
        background: var(--white);
        height: 12px;
        width: 12px;
        border-radius: 50%;
        button {
          &::before {
            display: none;
          }
        }
      }
    }
    .slick-track,
    .slick-list {
      display: flex;
    }
  }
  .card {
    width: 100%;
    background: var(--white);
    padding: 30px;
    border-radius: 23px;
    .imageWrapper {
      max-width: 298px;
      margin: -60px auto 10px auto;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      overflow: hidden;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    h3 {
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
