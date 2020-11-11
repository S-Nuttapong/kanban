import React, { useRef } from "react";
import { CardContainer, BadgeContainer } from "./styles";
import { CardProps } from "../../interface/ICard";
import { useDragItem, useDropCard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";
import { useAppState } from "../../provider/AppStateContext";
import { Badge, PriorityIcon } from "../badge/Badge";

export const Card = ({
  id,
  text,
  index,
  boardIndex,
  cardPreview,
  tags,
  priority,
}: CardProps) => {
  const { state } = useAppState();
  const cardRef = useRef<HTMLDivElement>(null);
  const drag = useDragItem({
    id,
    text,
    index,
    boardIndex,
    tags,
    priority,
    type: "CARD",
  });
  const drop = useDropCard({
    id,
    text,
    index,
    boardIndex,
    tags,
    priority,
    type: "CARD",
  });
  drag(drop(cardRef));
  return (
    <CardContainer
      isHidden={isHidden(id, "CARD", state.dragItem, cardPreview)}
      cardPreview={cardPreview}
      ref={cardRef}
    >
      <div>
        {" "}
        <span>{text}</span>
      </div>
      <BadgeContainer>
        {tags
          ? tags.map((tag, i) => (
              <Badge
                color={tag.color}
                text={tag.label}
                key={i.toString()}
                classname={"tags"}
              />
            ))
          : null}
      </BadgeContainer>
      <BadgeContainer>
        {priority ? (
          <React.Fragment>
            {" "}
            <PriorityIcon text={priority.label} />
            <Badge
              color={priority.color}
              text={priority.label}
              classname={"priority"}
            />
          </React.Fragment>
        ) : null}
      </BadgeContainer>
    </CardContainer>
  );
};
