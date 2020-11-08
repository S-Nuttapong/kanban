import React, { useState } from "react";
import { items } from "../SidebarData";
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
  <Main>
    <NavbarDesktop items={items} />
    <Content>{children}</Content>
  </Main>
);

const LayoutMobile = ({
  children,
  items,
}: React.PropsWithChildren<SidebarData>) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <Main>
      <NavbarMobile sidebar={sidebar} items={items} />
      <ContentMobile sidebar={sidebar} onToggle={() => setSidebar(!sidebar)}>
        {children}
      </ContentMobile>
    </Main>
  );
};

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const width = useViewport();
  return width > 768 ? (
    <LayoutDesktop items={items}>{children}</LayoutDesktop>
  ) : (
    <LayoutMobile items={items}>{children}</LayoutMobile>
  );
};
