import React from "react";
import { CardContainer } from "./styles";
import { CardProps } from "../../interface/ICard";

export const Card = ({ text }: CardProps) => {
return <CardContainer>{text}</CardContainer>
};
