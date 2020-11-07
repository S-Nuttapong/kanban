import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi"
import { IconContext } from "react-icons";
import { SidebarData } from "../interface";
import { NavMenuMobile, NavMenuDesktop, NavBarMenuItem } from "./styles";

interface NavbarMobileProps extends SidebarData {
  sidebar: boolean;
}

const MenuItem = ({ items }: SidebarData) => (
  <React.Fragment>
    <NavBarMenuItem>
      <GiIcons.GiMountainCave/>
      {items.map((item, i) => (
        <li key={i} className={item.cName}>
          <Link to={item.path}>
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
