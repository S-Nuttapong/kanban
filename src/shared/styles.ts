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
  width: 150px;
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

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: inherit;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;

  align-items: flex-start;

  z-index: 0;
  background-color: #072e54;
  margin-top: 1rem;
  padding: 0;

  .backg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%) scale(0.7);
    z-index: 0;
    @media (max-width: 768px) {
      position: fixed !important;
    }
  }
  .planet {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    background-color: #ff9933;
    top: 45px;
    left: 220px;
  }
  .r1 {
    background-color: #ffbf80;
    height: 20px;
    width: 110px;
    border-radius: 10px;
    position: relative;
    top: 60px;
    left: 85px;
  }
  .r2 {
    background-color: #ffbf80;
    height: 15px;
    width: 90px;
    border-radius: 6.5px;
    position: relative;
    top: 80px;
    left: 110px;
  }
  .r3 {
    background-color: #ffbf80;
    height: 30px;
    width: 120px;
    border-radius: 15px;
    position: relative;
    top: 78px;
    left: 50px;
  }
  .r4 {
    background-color: #ffbf80;
    height: 22px;
    width: 90px;
    border-radius: 11px;
    position: relative;
    top: 70px;
    left: 12px;
  }
  .r5 {
    background-color: rgba(204, 102, 0, 0.3);
    height: 15px;
    width: 40px;
    border-radius: 7.5px;
    position: relative;
    bottom: 50px;
    left: 70px;
  }
  .r6 {
    background-color: rgba(204, 102, 0, 0.3);
    height: 20px;
    width: 60px;
    border-radius: 11px;
    position: relative;
    bottom: 25px;
    left: 10px;
  }
  .r7 {
    background-color: rgba(204, 102, 0, 0.3);
    height: 15px;
    width: 45px;
    border-radius: 7.5px;
    position: relative;
    top: 40px;
    left: 130px;
  }
  .r8 {
    background-color: rgba(255, 255, 255, 0.4);
    height: 12px;
    width: 30px;
    border-radius: 7.5px;
    position: relative;
    top: 7px;
    left: 32px;
  }
  .shad {
    background-color: transparent;
    box-shadow: 15px 15px rgba(204, 102, 0, 0.3);
    position: relative;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    bottom: 164px;
    right: 16px;
  }
  .astro {
    position: relative;
    left: 131px;
    bottom: 250px;
    transform: rotate(-30deg);
  }
  .an {
    animation-name: flo;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    position: relative;
    bottom: 80px;
    left: 20px;
  }
  @keyframes flo {
    50% {
      transform: translateY(30px);
    }
  }
  .tank {
    background-color: #a6a6a6;
    height: 120px;
    width: 120px;
    border-radius: 10px;
    position: relative;
    left: 95px;
    top: 50px;
    transform: rotate(-30deg);
  }
  .helmet {
    background-color: white;
    height: 93px;
    width: 100px;
    border-radius: 45%;
    position: relative;
    left: 20px;
    z-index: 5;
  }
  .glass {
    background-color: #666666;
    height: 60px;
    width: 80px;
    border-top-left-radius: 60%;
    border-top-right-radius: 60%;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
    position: relative;
    left: 10px;
    top: 7px;
  }
  .shine {
    background-color: rgba(166, 166, 166, 0.7);
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top: 15px;
  }
  .dress {
    background-color: #f2f2f2;
    height: 100px;
    width: 100px;
    border-radius: 10%;
    position: relative;
    bottom: 5px;
    left: 20px;
  }
  .handr {
    height: 26px;
    width: 75px;
    background-color: #f2f2f2;
    border-radius: 40px;
    position: relative;
    bottom: 138px;
    left: 95px;
    transform: rotate(-20deg);
  }
  .handl {
    height: 26px;
    width: 75px;
    background-color: #f2f2f2;
    border-radius: 40px;
    position: relative;
    bottom: 111px;
    right: 29px;
    transform: rotate(20deg);
  }
  .handr1 {
    height: 26px;
    width: 57px;
    background-color: #f2f2f2;
    border-radius: 26px;
    position: relative;
    bottom: 18px;
    left: 35px;
    transform: rotate(90deg);
  }
  .handl1 {
    height: 26px;
    width: 57px;
    background-color: #f2f2f2;
    border-radius: 26px;
    position: relative;
    bottom: 17px;
    right: 17px;
    transform: rotate(-90deg);
  }
  .glover {
    height: 28px;
    width: 26px;
    background-color: white;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform: rotate(-90deg);
    position: relative;
    bottom: 1px;
    right: 16px;
  }
  .glovel {
    height: 28px;
    width: 26px;
    background-color: white;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform: rotate(90deg);
    position: relative;
    bottom: 1px;
    left: 42px;
  }
  .thumbr {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    right: 7px;
    top: 19px;
  }
  .thumbl {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    left: 21px;
    top: 19px;
  }
  .b1 {
    background-color: tomato;
    width: 28px;
    height: 5.5px;
    border-radius: 13px;
    position: relative;
    top: 18px;
    right: 1px;
  }
  .b2 {
    background-color: tomato;
    width: 28px;
    height: 5.5px;
    border-radius: 13px;
    position: relative;
    top: 18px;
    right: 1px;
  }
  .c {
    background-color: white;
    width: 55px;
    height: 30px;
    border-radius: 8px;
    position: relative;
    top: 25px;
    left: 23px;
  }
  .btn1 {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #4775ff;
    position: relative;
    left: 5px;
    top: 10px;
  }
  .btn2 {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #ffd147;
    position: relative;
    left: 21px;
    bottom: 2px;
  }
  .btn3 {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: tomato;
    position: relative;
    bottom: 14px;
    left: 38px;
  }
  .btn4 {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #a6a6a6;
    position: relative;
    left: 19px;
    top: 4px;
  }

  .legl {
    height: 100px;
    width: 40px;
    background-color: #f2f2f2;
    position: relative;
    bottom: 68px;
    left: 5px;
    transform: rotate(20deg);
  }
  .legr {
    height: 100px;
    width: 40px;
    background-color: #f2f2f2;
    position: relative;
    bottom: 168px;
    left: 96px;
    transform: rotate(-20deg);
  }
  .bootl1 {
    background-color: white;
    width: 43px;
    height: 35px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: relative;
    top: 65px;
    right: 1.5px;
  }
  .bootr1 {
    background-color: white;
    width: 43px;
    height: 35px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: relative;
    top: 65px;
    right: 1.5px;
  }
  .bootl2 {
    background-color: tomato;
    width: 45px;
    height: 5px;
    border-radius: 21px;
    position: relative;
    top: 30px;
    right: 1.5px;
  }
  .bootr2 {
    background-color: tomato;
    width: 45px;
    height: 5px;
    border-radius: 21px;
    position: relative;
    top: 30px;
    right: 1.5px;
  }
  .pipe {
    background-color: transparent;
    height: 80px;
    width: 80px;
    border: 10px solid #4775ff;
    border-radius: 40px 0px 0px 70px;
    border-right: none;
    transform: rotate(180deg);
    position: relative;
    bottom: 330px;
    left: 130px;
  }
  .pipe2 {
    background-color: transparent;
    height: 90px;
    width: 42px;
    border: 10px solid #4775ff;
    border-radius: 40px 0px 0px 0px;
    border-right: none;
    transform: rotate(90deg);
    position: relative;
    border-bottom: none;
    left: 67px;
    bottom: 34px;
  }
  .pipe3 {
    height: 10px;
    width: 10px;
    background-color: #4775ff;
    position: relative;
    border-radius: 65%;
    bottom: 10px;
    left: 37px;
  }
  .s1,
  .s2,
  .s3,
  .s4,
  .s5,
  .s6 {
    background-color: white;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
  }
  .s1 {
    bottom: 150px;
    left: 200px;
  }
  .s2 {
    top: 130px;
    left: 254px;
  }
  .s3 {
    bottom: 98px;
    left: 65px;
  }
  .s4 {
    top: 216px;
    left: 249px;
  }
  .s5 {
    top: 139px;
    left: 100px;
  }
  .s6 {
    top: 60px;
    left: 370px;
  }
  a {
    color: white;
    font-size: 25px;
    font-family: "Rubik", sans-serif;
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 8px 12px 8px 12px;
    border: 2px solid white;
    text-decoration: none;
  }
`;
