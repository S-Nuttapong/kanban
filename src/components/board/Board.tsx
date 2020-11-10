import React, { useRef } from "react";
import { BoardContainer, BoardTitle } from "./styles";
import { BoardProps } from "../../interface/IBoard";
import { Card } from "../card/Card";
import { AddNewItem, AddNewCard } from "../newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { useDragItem, useDropBoard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";

export const Board = ({ id, text, index, boardPreview }: BoardProps) => {
  const { state, dispatch } = useAppState();
  const boardRef = useRef<HTMLDivElement>(null);
  const drag = useDragItem({ id, text, index, type: "BOARD" });
  const drop = useDropBoard({ id, text, index, type: "BOARD" });

  drag(drop(boardRef));
  return (
    <BoardContainer
      boardPreview={boardPreview}
      isHidden={isHidden(id, "BOARD", state.dragItem, boardPreview)}
      ref={boardRef}
    >
      <BoardTitle>{text}</BoardTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card
          boardIndex={index}
          text={task.text}
          key={task.id}
          id={task.id}
          index={i}
        />
      ))}
      <AddNewCard
        addTask={true}
        onAdd={(text) =>
          dispatch({ type: "ADD_NEW_TASK", payload: { text, index } })
        }
        text="+ Add New Task"
      />
    </BoardContainer>
  );
};
