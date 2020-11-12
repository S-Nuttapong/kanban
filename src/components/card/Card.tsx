import React, { useRef } from "react";
import { CardContainer } from "./styles";
import { BadgeContainer } from "../badge/styles";
import { CardProps } from "../../interface/ICard";
import { useDragItem, useDropCard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";
import { useAppState } from "../../provider/AppStateContext";
import { Badge, PriorityIcon } from "../badge/Badge";
import { DeleteButton } from "../button/Button";
import { Snackbars } from "../alert/Snackbar";

export const Card = ({
  id,
  text,
  index,
  boardIndex,
  cardPreview,
  tags,
  priority,
}: CardProps) => {
  const { state, dispatch } = useAppState();
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
          <div className="flex full-width space-between">
            <div className="flex align-center">
              {" "}
              <PriorityIcon text={priority.label} />
              <Badge
                color={priority.color}
                text={priority.label}
                classname={"priority"}
              />
            </div>

            <DeleteButton
              message="Are you sure? Deleting a task cannot be undone."
              onDelete={() =>
                dispatch({
                  type: "DELETE_CARD",
                  payload: { boardIndex, cardIndex: index },
                })
              }
            />
          </div>
        ) : null}
      </BadgeContainer>
    </CardContainer>
  );
};
