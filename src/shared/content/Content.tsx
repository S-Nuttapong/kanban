import React from "react";
import styled from "styled-components";
import { MenuBar, Backdrop } from "../navbar/styles";
import * as FaIcons from "react-icons/fa";

const Header = styled.header`
  border-bottom: 1px solid;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;

  span {
    margin: auto;
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
  <Container style={{ marginLeft : navbarComponent === undefined ? "1rem" : "0"}}>
    <Header>
      {navbarComponent}
      <span>San-Kanban</span>
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
