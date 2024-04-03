import styled from "styled-components";
import sliderArrow from "../../../../public/sliderArrow.svg";
import arrowdisable from "../../../../public/arrowdisable.svg";
export const Styledservices = styled.div`
  color: #777;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .sectionInfo {
    display: block;
    margin-bottom: 15px;
  }
  .textWrap {
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    .text {
      h2 {
        color: var(--black);
        max-width: 500px;
        font-weight: 400;
        margin: 0;
      }
    }
    .buttonWrap {
      max-width: 180px;
      margin-bottom: 15px;
    }
  }
`;

export const ServicesSlider = styled.div`
  background: transparent;
  position: relative;
  margin-bottom: 50px;
  padding-bottom: 30px;
  &::before {
    position: absolute;
    content: "";
    top: 200px;
    bottom: 0px;
    left: -9999px;
    right: -9999px;
    background: var(--gray-50);
  }

  .slick-slide {
    padding: 10px;
    display: flex;
    @media screen and (max-width: 628px) {
      padding: 10px 10px 0 10px;
    }
    > div {
      display: flex;
      width: 100%;
    }
  }
  .slick-slider {
    display: flex;
    padding-top: 50px;

    .slick-prev,
    .slick-next {
      background: black;
      top: -20px;
      width: 56px;
      height: 35px;
      border-radius: 82px;
      background: var(--primary);
      right: 10px;
      left: auto;
      @media screen and (max-width: 992px) {
        top: 20px;
      }
      &:before {
        display: none;
      }
      &.slick-disabled {
        background: var(--gray-50);
      }
      &:after {
        content: "";
        position: absolute;
        background: url(${sliderArrow.src});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 30px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(180deg);
        z-index: 2;
      }
    }

    .slick-prev {
      right: 70px;
      &.slick-disabled {
        &:after {
          background: url(${arrowdisable.src});
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
          transform: translate(-50%, -50%) rotate(0deg);
        }
      }
    }
    .slick-next {
      &:after {
        background: url(${sliderArrow.src});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
    .slick-next {
      &.slick-disabled {
        &:after {
          background: url(${arrowdisable.src});
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
          transform: translate(-50%, -50%) rotate(180deg);
        }
      }
    }
    .slick-dots {
      .slick-active {
        background: var(--primary);
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
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px -2px 11px 0px rgba(0, 0, 0, 0.07);
    .imageWrapper {
      width: 75px;
      height: 75px;
      flex-shrink: 0;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .userDetail {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 30px;
      .text {
        color: #777;
        font-size: 16px;
        line-height: 20px;
        font-weight: 300;
        .customerDisc {
          display: block;
          margin-bottom: 5px;
        }
        .userName {
          color: var(--black);
          font-size: 26px;
          line-height: 30px;
          font-weight: 500;
        }
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
    .review {
      display: flex;
      gap: 5px;
      margin-bottom: 10px;
    }
  }
`;
