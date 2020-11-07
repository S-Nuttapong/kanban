import React from "react";
import styled from "styled-components";
import { MenuBar, Backdrop } from "../navbar/styles";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

const Header = styled.header`
  border-bottom: 1px solid;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-contents: center;

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

    <ContentArea>{children}</ContentArea>
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
