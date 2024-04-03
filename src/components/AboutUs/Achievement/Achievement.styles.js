import styled from "styled-components";
export const AchievementWrap = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  .heading {
    padding-bottom: 20px;
  }

  .counter-wrap {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding: 0 20px;

    @media (min-width: 786px) {
      gap: 50px;
      align-items: center;
    }
    .bar {
      height: 100px;
      background-color: var(--body-text-25);
      width: 2px;
      &:nth-child(6) {
        display: none;
      }
    }
    h3 {
      white-space: nowrap;
    }
    p {
      color: var(--body-text-25);
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  .img {
    @media (max-width: 575px) {
      padding-left: 20px;
    }
  }
`;
