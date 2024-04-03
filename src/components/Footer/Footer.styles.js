import styled from "styled-components";
import footerBg from "../../../public/images/About-Us/Footer-bg.png";
import Shape01 from "../../../public/images/About-Us/shape-01.png";
export const StyledFooterWrapper = styled.div`
  padding: 50px 0 20px;
  background-image: url(${footerBg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: auto;
    right: 0;
    width: 60px;
    height: 110px;
    background-image: url(${Shape01.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    @media (min-width: 992px) {
      display: none;
    }
    @media (min-width: 1200px) {
      display: block;
      bottom: -45px;
      top: auto;
      right: 16px;
      width: 95px;
      height: 159px;
      transform: rotate(90deg);
    }
  }
  .content-holder {
    @media (min-width: 992px) {
      gap: 180px;
      display: flex;
    }
    @media (min-width: 1450px) {
      justify-content: space-between;
    }
    .footer-newsletter {
      max-width: 100%;
      position: relative;
      padding-bottom: 85px;
      @media (min-width: 576px) {
        text-align: center;
      }
      @media (min-width: 992px) {
        max-width: 310px;
        padding-bottom: 0;
        text-align: start;
      }
      @media (min-width: 1200px) {
        max-width: 360px;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 5px;
        width: 60px;
        height: 110px;
        background-image: url(${Shape01.src});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transform: rotate(90deg);
        @media (min-width: 992px) {
          top: -50px;
          right: -130px;
          bottom: auto;
          width: 95px;
          height: 159px;
          transform: none;
        }
        @media (min-width: 1440px) {
          right: -170px;
        }
      }
      &::before {
        left: 5px;
        bottom: 0;
        transform: rotate(270deg);
        @media (min-width: 992px) {
          top: auto;
          left: auto;
          bottom: -40px;
          transform: scaleY(-1) rotate(0);
        }
      }
      .logo-holder {
        max-width: 160px;
        margin-bottom: 30px;
        @media (min-width: 576px) {
          margin: 0 auto 30px;
        }
        @media (min-width: 1200px) {
          max-width: 200px;
          margin: 0 0 40px;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }
      .h2 {
        display: block;
        color: var(--white);
        font-weight: 400;
        margin-bottom: 40px;
        @media (max-width: 1200px) {
          font-size: 30px;
          line-height: 35px;
          margin-bottom: 30px;
        }
      }
      .input-holder {
        position: relative;
        max-width: 310px;
        background-color: #141416;
        border: 1px solid var(--primary);
        border-radius: 50px;
        box-shadow: 0px 0px 4px 0px #c4f440;
        margin-bottom: 20px;
        @media (min-width: 576px) {
          margin: 0 auto 20px;
        }
        @media (min-width: 992px) {
          margin: 0 0 40px;
        }
        @media (min-width: 1200px) {
          margin: 0 0 50px;
        }
        input {
          width: 100%;
          height: 45px;
          font-size: 16px;
          line-height: 20px;
          padding: 17px 45px 15px 15px;
          color: var(--primary);
          outline: none;
          background: none;
          border: none;
          &::placeholder {
            color: var(--primary);
          }
        }
        .icon-holder {
          position: absolute;
          top: 15px;
          right: 15px;
          color: var(--primary);
          cursor: pointer;
        }
      }
      .copy-right {
        padding-top: 15px;
        padding-left: 10px;
        border-top: 1px solid var(--white);
        @media (max-width: 576px) {
          text-align: center;
        }
        span {
          font-size: 16px;
          line-height: 20px;
          color: var(--white);
        }
      }
    }
    .list-holder {
      display: flex;
      flex-wrap: wrap;
      column-gap: 80px;
      row-gap: 40px;
      margin-bottom: 40px;
      @media (min-width: 576px) {
        justify-content: center;
      }
      @media (min-width: 992px) {
        justify-content: start;
      }
      @media (min-width: 1200px) {
        margin-bottom: 60px;
      }
      @media (min-width: 576px) {
        flex-wrap: nowrap;
        column-gap: 90px;
        row-gap: 0;
      }
      .list {
        .heading {
          display: block;
          color: var(--white);
          margin-bottom: 20px;
          @media (max-width: 576px) {
            font-size: 18px;
            line-height: 22px;
          }
        }
        a {
          display: block;
          color: var(--white);
          font-size: 14px;
          line-height: 18px;
          transition: 0.4s;
          margin-bottom: 15px;
          @media (min-width: 576px) {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 20px;
          }
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          &:hover {
            color: var(--primary);
            transform: translateX(10px);
          }
        }
      }
    }
    .btn-holder {
      max-width: 490px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      margin: 0 auto;
      @media (min-width: 992px) {
        margin: 0;
      }
      button {
        max-width: 160px;
        font-size: 14px;
        line-height: 18px;
        color:  var(--black);
        padding: 14px 0;
        border-radius: 8px;
        @media (min-width: 576px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
      .btn1 {
        background:  var(--primary);
      }
      .btn2 {
        background: var(--primary);
      }
      .btn3 {
          background:  var(--primary);
      }
      .btn4 {
        background:  var(--primary);
      }
      .btn5 {
        background:  var(--primary);
      }
      .btn6 {
        background:  var(--primary);
      }
    }
  }
`;
