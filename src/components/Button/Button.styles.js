import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  min-width: 132px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  padding: 13px 10px;
  color: var(--black);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 82px;
  background: var(--primary);
  outline: none;
  border: none;
  transition: 0.3s all ease-in-out;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
      rgba(17, 17, 26, 0.1) 0px 0px 8px;
  }
  ${({ $dark }) =>
    $dark &&
    css`
      color: var(--primary);
      background: var(--black);
      box-shadow: 0px 0px 4px 0px var(--primary);
      &:hover {
        color: var(--black);
        background: var(--primary);
      }
      @media screen and (max-width: 992px) {
        padding: 10px 15px;
      }
    `}
  ${({ $transparent }) =>
    $transparent &&
    css`
      background: transparent;
      color: var(--black);
    `}
`;
