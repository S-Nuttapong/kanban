import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "../interface";
import { NavMenuMobile, NavMenuDesktop, NavBarMenuItem } from "./styles";

interface NavbarMobileProps extends SidebarData {
  sidebar: boolean;
}

const MenuItem = ({ items }: SidebarData) => (
  <NavBarMenuItem>
    {items.map((item, i) => (
      <li key={i} className={item.cName}>
        <Link to={item.path}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </li>
    ))}
  </NavBarMenuItem>
);

export const NavbarMobile = ({ items, sidebar }: NavbarMobileProps) => {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <NavMenuMobile isToggled={sidebar}>
        <MenuItem items={items} />
      </NavMenuMobile>
    </IconContext.Provider>
  );
};

export const NavbarDesktop = ({ items }: SidebarData) => {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <NavMenuDesktop>
        <MenuItem items={items} />
      </NavMenuDesktop>
    </IconContext.Provider>
  );
};
