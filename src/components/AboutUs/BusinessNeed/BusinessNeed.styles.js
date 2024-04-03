import styled from "styled-components";
export const BusinessStyling = styled.div`
  padding-top: 25px;
  @media (min-width: 768px) {
    padding-top: 35px;
  }
  @media (min-width: 1200px) {
    padding-top: 50px;
  }
  .imgCard-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    @media (min-width: 786px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .img-card img {
      width: 100%;
      height: auto;
    }
  }
`;
export const BusinesNeed = styled.div`
  margin-bottom: 50px;
  background-color: var(--black);
  padding: 10px;
  .busNeed-wrap {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 0;
    .info-wrap {
      color: var(--white);
      max-width: 842px;
      h2 {
        color: var(--lite-green);
      }
      p {
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        @media (min-width: 786px) {
          font-size: 20px;
        }
      }
    }
    .btn {
      width: 171px;
    }
  }
`;
