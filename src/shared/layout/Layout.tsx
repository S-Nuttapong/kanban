import React, { useState } from "react";
import { sidebarData as items } from "../constant";
import { SidebarData } from "../interface";
import { NavbarMobile, NavbarDesktop } from "../navbar/Navbar";
import { ContentMobile, Content } from "../content/Content";
import styled from "styled-components";
import { useViewport } from "../../utils/useWindow";

const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const LayoutDesktop = ({
  children,
  items,
}: React.PropsWithChildren<SidebarData>) => (
  <Main data-testid="layout-desktop">
    <NavbarDesktop items={items} />
    <Content>{children}</Content>
  </Main>
);

const LayoutMobile = ({
  children,
  items,
  mockOnToggle,
  mockSidebar
}: React.PropsWithChildren<SidebarData>) => {
  let [sidebar, setSidebar] = useState(false);

  if (mockOnToggle) {
    setSidebar = mockOnToggle;
  }

  if (mockSidebar) {
    sidebar = mockSidebar;
  }

  return (
    <Main data-testid="layout-mobile">
      <NavbarMobile sidebar={sidebar} items={items} />
      <ContentMobile sidebar={sidebar} onToggle={() => setSidebar(!sidebar)}>
        {children}
      </ContentMobile>
    </Main>
  );
};

interface LayoutProps extends Omit<SidebarData, "items"> {
  mockWidth?: number

}
export const Layout = ({
  children,
  mockWidth,
  mockOnToggle,
  mockSidebar
}: React.PropsWithChildren<LayoutProps>) => {
  let width = useViewport();

  if (mockWidth) {
    width = mockWidth;
  }

  return width > 768 ? (
    <LayoutDesktop items={items}>{children}</LayoutDesktop>
  ) : (
    <LayoutMobile items={items} mockOnToggle={mockOnToggle} mockSidebar={mockSidebar}>
      {children}
    </LayoutMobile>
  );
};
