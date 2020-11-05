import React from "react";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";

export const items = [
  {
    title: "Home",
    path: "/",
    icon: <ImIcons.ImHome />,
    cName: "nav-text",
  },
  {
    title: "Kanban",
    path: "/kanban",
    icon: <BsIcons.BsFillKanbanFill />,
    cName: "nav-text",
  },
];
