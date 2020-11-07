import React from "react";
import styled from "styled-components";
import { MenuBar, Backdrop } from "../styles";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { BackgroundContainer } from "../styles";

const Header = styled.header`
  border-bottom: 1px solid;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0 0.25rem 0;

  div:last-child {
    display: flex;
    margin: auto;
    align-items: center;
  }

  span {
    font-weight: 600;
    font-size: 20px;
    color: #072e54;
  }

  span + svg {
    color: #072e54;
    width: 3rem !important;
    height: 2rem !important;
    padding-bottom: 0.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-contents: center;
`;

interface ContentProps {
  navbarComponent?: React.ReactNode;
}

const Background = ({ children }: React.PropsWithChildren<{}>) => (
  <BackgroundContainer>
    {children}
    <div className="backg">
      <div className="planet">
        <div className="r1"></div>
        <div className="r2"></div>
        <div className="r3"></div>
        <div className="r4"></div>
        <div className="r5"></div>
        <div className="r6"></div>
        <div className="r7"></div>
        <div className="r8"></div>
        <div className="shad"></div>
      </div>
      <div className="stars">
        <div className="s1"></div>
        <div className="s2"></div>
        <div className="s3"></div>
        <div className="s4"></div>
        <div className="s5"></div>
        <div className="s6"></div>
      </div>
      <div className="an">
        <div className="tank"></div>
        <div className="astro">
          <div className="helmet">
            <div className="glass">
              <div className="shine"></div>
            </div>
          </div>
          <div className="dress">
            <div className="c">
              <div className="btn1"></div>
              <div className="btn2"></div>
              <div className="btn3"></div>
              <div className="btn4"></div>
            </div>
          </div>
          <div className="handl">
            <div className="handl1">
              <div className="glovel">
                <div className="thumbl"></div>
                <div className="b2"></div>
              </div>
            </div>
          </div>
          <div className="handr">
            <div className="handr1">
              <div className="glover">
                <div className="thumbr"></div>
                <div className="b1"></div>
              </div>
            </div>
          </div>
          <div className="legl">
            <div className="bootl1">
              <div className="bootl2"></div>
            </div>
          </div>
          <div className="legr">
            <div className="bootr1">
              <div className="bootr2"></div>
            </div>
          </div>
          <div className="pipe">
            <div className="pipe2">
              <div className="pipe3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BackgroundContainer>
);
export const Content = ({
  navbarComponent,
  children,
}: React.PropsWithChildren<ContentProps>) => (
  <Container
    style={{ marginLeft: navbarComponent === undefined ? "1rem" : "0" }}
  >
    <Header>
      {navbarComponent}
      <div>
        {" "}
        <span>San-Kanban </span>
        <GiIcons.GiMountainCave />
      </div>
    </Header>

    <ContentArea><Background>{children}</Background></ContentArea>
  </Container>
);

interface ContentMobileProps {
  sidebar: boolean;
  onToggle(sidebar: boolean): void;
}

export const ContentMobile = ({
  children,
  sidebar,
  onToggle,
}: React.PropsWithChildren<ContentMobileProps>) => {
  return (
    <Content
      navbarComponent={
        <React.Fragment>
          <MenuBar to="#">
            <FaIcons.FaBars onClick={() => onToggle(!sidebar)} />
          </MenuBar>
          <Backdrop onClick={() => onToggle(!sidebar)} isToggled={sidebar} />
        </React.Fragment>
      }
    >
      {children}
    </Content>
  );
};
