import { Option } from "../interface/IAddNewItem";
import { StylesConfig } from "react-select";
import chroma from "chroma-js";
import React from "react";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";

const BaseControl: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    boxShadow: isFocused ? "0 0 0 1px #3f51b5" : "none",
    border: isFocused ? "1px solid #3f51b5" : "1px solide #cccccc",

    ":hover": {
      boxShadow: isFocused ? "0 0 0 1px #3f51b5" : "none",
      border: isFocused ? "1px solid #3f51b5" : "1px solid black",
    },
  }),
};

export const sidebarData = [
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

export const tagOptions: Option[] = [
  { value: "0", label: "Climbing  🧗‍♂️", color: "#944900" },
  { value: "1", label: "Work  💻 ", color: "#8c8c8c" },
  { value: "2", label: "Travel ✈️", color: "#00B8D9" },
  { value: "3", label: "Relationship ❤️", color: "#d40000" },
];

export const priorityOptions: Option[] = [
  { value: "High", label: "High", color: "#f44336" },
  { value: "Medium", label: "Medium", color: "#fdb915" },
  { value: "Low", label: "Low", color: "#48c774" },
];

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

export const singleSelectStyles: StylesConfig = {
  ...BaseControl,
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#3f51b5" : "#808080",
  }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export const multiSelectStyles: StylesConfig = {
  ...BaseControl,
  placeholder: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#3f51b5" : "#808080",
  }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);

    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      color: "white",
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};
