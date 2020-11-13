import styled from "styled-components";
import { BadgeProps } from "../../interface/IBadge";

export const BadgeStyle = styled.div<{ color: BadgeProps["color"] }>`
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
    margin: 0 0.25rem;
  }
`;

export const BadgeContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

`;
