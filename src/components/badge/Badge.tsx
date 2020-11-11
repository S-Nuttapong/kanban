import React from "react";
import styled from "styled-components";
import * as FcIcons from "react-icons/fc";
import { IconBaseProps, IconContext } from "react-icons";

interface BadgeProps {
  text: string;
  color?: string;
  classname?: string;
}

const BadgeStyle = styled.div<{ color: BadgeProps["color"] }>`
  margin-top: 0.25rem;
  margin-right: 0.5rem;
  
  span {
    display: flex;
    color: white;
    border-radius: 2px;
    font-size: 85%;
    overflow: hidden;
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
  }

  .tags {
    color: ${(props) => (props.color ? `${props.color}` : `grey`)};
    background-color: ${(props) => (props.color ? `${props.color}1a` : `grey`)};
  }

  .priority {
    background-color: ${(props) => (props.color ? `${props.color}` : `grey`)};
    margin: 0 .25rem;
  }
`;

export const Badge = ({ text, color, classname }: BadgeProps) => (
  <BadgeStyle color={color}>
    <span className={classname ? `${classname}` : "tags"}>{text}</span>
  </BadgeStyle>
);

export const PriorityIcon = ({ text }: BadgeProps) => {
  const getPriorityIcon = (): IconBaseProps | null => {
    switch (text) {
      case "High": {
        console.log("here High")
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
