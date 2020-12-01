import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { NavMenuMobile, NavMenuDesktop, NavBarMenuItem } from "../styles";
import { IconContext } from "react-icons";
import { SidebarData } from "../interface";

interface NavbarMobileProps extends SidebarData {
  sidebar: boolean;
}

export const MenuItem = ({ items }: SidebarData) => (
  <React.Fragment>
    <NavBarMenuItem data-testid="menuItem">
      <GiIcons.GiMountainCave />
      {items.map((item, i) => (
        <li key={i} className={item.cName}>
          <Link data-testid={`menuItem-link`} to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
      <a
        href="https://github.com/S-Nuttapong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaIcons.FaGithub />
      </a>
    </NavBarMenuItem>
  </React.Fragment>
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
