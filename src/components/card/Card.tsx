import React, { useRef } from "react";
import { CardContainer } from "./styles";
import { CardProps } from "../../interface/ICard";
import { useDragItem, useDropCard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";
import { useAppState } from "../../provider/AppStateContext";

export const Card = ({ id, text, index, boardIndex, cardPreview }: CardProps) => {
  const { state } = useAppState();
  const cardRef = useRef<HTMLDivElement>(null);
  const drag = useDragItem({ id, text, index, boardIndex, type: "CARD" });
  const drop = useDropCard({ id, text, index, boardIndex, type: "CARD" });
  drag(drop(cardRef));
  return (
    <CardContainer
      isHidden={isHidden(id, "CARD", state.dragItem, cardPreview)}
      cardPreview={cardPreview}
      ref={cardRef}
    >
      {text}
    </CardContainer>
  );
};
