import styled, { css } from "styled-components";
export const StyledHeaderWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 0;
  left: 0;
  padding: 0 10px;
  z-index: 9999;
  backdrop-filter: ${({ $scroll }) => $scroll && "blur(3px)"};
  -webkit-backdrop-filter: ${({ $scroll }) => $scroll && "blur(3px)"};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    border-radius: 82px;
    transition: all 0.3s ease-in-out;
    background: rgba(20, 20, 22, 0.8);

    @media screen and (min-width: 992px) {
      background: ${({ $scroll }) =>
        $scroll ? "rgba(20, 20, 22, 0.5)" : "transparent"};
    }
  }
  .logo {
    max-width: 100px;
    height: auto;
    flex-shrink: 0;
    @media screen and (min-width: 992px) {
      max-width: 150px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 180px;
    }
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .buttonWrapper {
    max-width: 132px;
    @media screen and (max-width: 991px) {
      margin: 0 auto 15px auto;
    }
  }
  .hamburgerWrapper {
    width: 36px;
    height: 29px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 82px;
    cursor: pointer;
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
  .navHolder {
  }
`;

export const NavHolderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    transition: 0.3s all ease-in-out;
    top: -200%;
    max-height: 0px;
    left: 0;
    right: 0;
    padding: 5px;
    border-radius: 28px;
    background: rgba(20, 20, 22, 0.9);
    opacity: 0;
    overflow: hidden;

    ${({ $navActive }) =>
      $navActive &&
      css`
        top: 60px;
        max-height: 1000px;
        visibility: visible;
        opacity: 1;
        padding: 5px;
      `}
  }
`;
export const NavHolder = styled.ul`
  max-width: 540px;
  margin: 0 auto;
  padding: 3px;
  border-radius: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white);
  width: 100%;
  @media screen and (max-width: 991px) {
    display: block;
    background: transparent;
    max-width: 200px;
  }
`;

export const NavLinks = styled.li`
  color: var(--black);
  background: ${({ $active }) => ($active ? "var(--primary)" : "")};
  border-radius: 72px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  &:hover {
    background: var(--primary);
  }

  a {
    display: inline-block;
    padding: 10px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    @media screen and (max-width: 991px) {
      color: ${({ $active }) => ($active ? "" : "var(--white)")};
      text-align: center;
    }
  }
  @media screen and (max-width: 991px) {
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;
