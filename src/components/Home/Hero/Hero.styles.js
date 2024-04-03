import styled from "styled-components";

export const StyledHero = styled.div`
  background: linear-gradient(rgba(20, 20, 22, 0.85), rgba(20, 20, 22, 0.85)),
    ${({ $Bg }) => $Bg && `url(${$Bg.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: ${({ $vh }) => ($vh ? "fixed" : "")};
  .container {
    min-height: ${({ $vh }) => ($vh ? "716px" : "508px")};
    display: flex; 
    align-items: center;
    .textWrapper {
      max-width: 859px;
      color: var(--white);
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;

      @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media screen and (min-width: 992px) {
        font-size: 24px;
        line-height: 28px;
      }
      h1 {
        color: var(--white);
        text-transform: uppercase;
      }
      p {
        margin-bottom: 20px;
        @media screen and (max-width: 576px) {
          br {
            display: none;
          }
        }
      }
      .buttonWrapper {
        max-width: 214px;
      }
    }
  }
`;
