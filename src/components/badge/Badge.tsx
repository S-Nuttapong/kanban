import React from "react";
import * as FcIcons from "react-icons/fc";
import { IconBaseProps, IconContext } from "react-icons";
import { BadgeProps } from "../../interface/IBadge";
import { BadgeStyle } from "./styles";

export const Badge = ({ text, color, classname }: BadgeProps) => (
  <BadgeStyle color={color}>
    <span className={classname ? `${classname}` : "tags"}>{text}</span>
  </BadgeStyle>
);

export const PriorityIcon = ({ text }: BadgeProps) => {
  const getPriorityIcon = (): IconBaseProps | null => {
    switch (text) {
      case "High": {
        return <FcIcons.FcHighPriority />;
      }
      case "Medium": {
        return <FcIcons.FcMediumPriority />;
      }
      case "Low": {
        return <FcIcons.FcLowPriority />;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <React.Fragment>{getPriorityIcon()}</React.Fragment>
    </IconContext.Provider>
  );
};
