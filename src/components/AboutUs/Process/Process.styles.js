import styled from "styled-components";

export const StyledProcess = styled.section`
  padding: 25px 0;
  @media (min-width: 768px) {
    padding: 35px 0;
  }
  @media (min-width: 1200px) {
    padding: 50px 0;
  }
  .sub-heading {
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    color: var(--body-text-25);
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

  .card-holder {
    display: block;
    justify-content: center;
    gap: 20px;
    @media (min-width: 576px) {
      display: flex;
    }
    @media (max-width: 991px) {
      flex-flow: wrap;
    }
    @media (min-width: 1200px) {
      gap: 30px;
    }
    .step-holder {
      display: flex;
      @media (max-width: 991px) {
        max-width: 45%;
      }
      @media (max-width: 575px) {
        max-width: 76%;
      }
      &:nth-child(odd) {
        .card {
          margin-bottom: 30px;
          @media (min-width: 576px) {
            margin-bottom: 20px;
          }
        }
        .heading {
          margin-bottom: 20px;
          @media (min-width: 576px) {
            margin-bottom: 0;
          }
        }
      }
      &:nth-child(even) {
        @media (min-width: 576px) {
          margin-top: 110px;
        }
        .heading {
          margin-bottom: 20px;
        }
        .card {
          margin-bottom: 30px;
          @media (min-width: 576px) {
            margin-bottom: 0;
          }
        }
        .card-before {
          margin-top: 0;
          &::before {
            left: 0;
            border-radius: 50px 0 0 0;
          }
          &::after {
            left: -35px;
            border-radius: 0 0 50px 0;
          }
        }
      }
      &:nth-child(2) {
        @media (max-width: 991px) {
          .step {
            margin-right: 0;
          }
          .card-before {
            display: none;
          }
        }
      }
      &:nth-last-child(1) {
        &::after {
          display: none;
        }
        .step {
          margin-right: 0;
        }
        .card-before {
          display: none;
        }
        .card {
          margin-bottom: 0;
          &::after {
            display: none;
          }
        }
      }
      .step {
        width: 100%;
        margin-right: 20px;

        @media (max-width: 575px) {
          position: relative;
          margin-right: 0;
        }

        @media (min-width: 991px) {
          max-width: 230px;
        }
        @media (min-width: 1200px) {
          margin-right: 30px;
        }
        .heading {
          display: block;
          font-size: 35px;
          line-height: 40px;
          text-align: center;
          color: var(--light-gray);
          @media (min-width: 575px) {
            font-size: 45px;
            line-height: 50px;
          }
        }
        .card {
          width: 100%;
          min-height: 305px;
          padding: 30px 20px;
          border-radius: 23px;
          background: var(--white);
          box-shadow: 0px 2px 12px 0px rgba(135, 135, 135, 0.2);
          font-size: 16px;
          line-height: 20px;
          position: relative;

          &:nth-child(2) {
            &::after {
              content: "";
              position: absolute;
              bottom: -30px;
              right: 50%;
              width: 12px;
              height: 30px;
              background: #f4f4f4;
              @media (min-width: 576px) {
                display: none;
              }
            }
          }
          h3 {
            font-weight: 500;
            @media (max-width: 1199px) {
              font-size: 22px;
              line-height: 26px;
              margin-bottom: 10px;
            }
          }
        }
      }
      .card-before {
        width: 12px;
        height: 400px;
        background: #f4f4f4;
        margin-top: 110px;
        position: absolute;
        right: 20px;
        @media (min-width: 576px) {
          position: relative;
          width: 15px;
          height: 250px;
          right: 0;
        }
        &::before {
          content: "";
          position: absolute;
          top: -12px;
          right: 0;
          width: 160px;
          height: 12px;
          border-radius: 0 50px 0 0;
          background: #f4f4f4;
          z-index: -1;
          @media (min-width: 576px) {
            top: -15px;
            height: 15px;
            width: 50px;
          }
        }
        &::after {
          content: "";
          position: absolute;
          bottom: -12px;
          right: 0;
          width: 160px;
          height: 12px;
          border-radius: 0 0 50px 0;
          background: #f4f4f4;
          z-index: -1;
          @media (min-width: 576px) {
            height: 15px;
            left: 0;
            bottom: -15px;
            width: 50px;
            border-radius: 0 0 0 50px;
          }
        }
      }
    }
  }
`;
