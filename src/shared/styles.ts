import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SidebarProps } from "./interface";

const navText = css`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  height: 50px;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    width: 80%;
    height: 85%;
    display: flex;
    align-items: center;
    padding: 0 30px;

    :hover {
      background-color: #9ccaf74d;
    }
  }
`;

const NavMenuStyle = css`
  background-color: #124d86;
  max-width: 150px;
  height: 100vh;
  justify-content: start;

  .nav-text {
    ${navText}
  }

`;

export const MenuBar = styled(Link)`
  margin-left: 0.75rem;
  font-size: 1.25rem;
  background: none;
  span {
    margin-left: 16px;
  }

  svg {
    color: #072e54 !important;
    width: 1rem !important;
    height: 1rem !important;
  }
`;

export const NavMenuMobile = styled.nav<SidebarProps>`
  ${NavMenuStyle}
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 9999;

  ${(props) =>
    props.isToggled
      ? css`
          left: 0;
          transition: 350ms;
          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
            0px 16px 24px 2px rgba(0, 0, 0, 0.14),
            0px 6px 30px 5px rgba(0, 0, 0, 0.12);
        `
      : css`
          left: -100%;
          transition: 850ms;
        `}
`;

export const NavMenuDesktop = styled.nav`
  ${NavMenuStyle}
`;

export const NavBarMenuItem = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  svg:first-of-type {
      display: flex;
      margin: auto;
      padding-top: 2rem;
      width: 3rem;
      height: 2rem;
      align-self: center;
      margin-bottom: 3rem;

  }

  li > a > svg {
    margin: 0 !important;
    padding: 0 !important;
    width: 1rem !important;
    height: 1 rem !important;
  }

  li + a {
    position: absolute;
    align-self: center;
    top: 85%;
  }

  li + a > svg {
    width: 3rem !important;
    height: 3rem !important;
  }

  span {
    padding-left: 0.5rem;
  }
`;

export const Backdrop = styled.div<SidebarProps>`
  ${(props) =>
    props.isToggled &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 1000;
      overflow: hidden;
    `}
`;
