import React, { useRef } from "react";
import { CardContainer } from "./styles";
import { CardProps } from "../../interface/ICard";
import { useDragItem, useDropCard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";
import { useAppState } from "../../provider/AppStateContext";

export const Card = ({ id, text, index, boardIndex, isPreview }: CardProps) => {
  const { state } = useAppState();
  const cardRef = useRef<HTMLDivElement>(null);
  const drag = useDragItem({ id, text, index, boardIndex, type: "CARD" });
  const drop = useDropCard({ id, text, index, boardIndex, type: "CARD" });
  drag(drop(cardRef));
  return (
    <CardContainer
      isHidden={isHidden(id, "CARD", state.dragItem, isPreview)}
      isPreview={isPreview}
      ref={cardRef}
    >
      {text}
    </CardContainer>
  );
};
