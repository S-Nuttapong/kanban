import React, { useRef } from "react";
import { BoardContainer, BoardTitle } from "./styles";
import { BoardProps } from "../../interface/IBoard";
import { Card } from "../card/Card";
import { AddNewItem } from "../newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { useDragItem, useDropBoard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";

export const Board = ({ id, text, index, isPreview, useAppStateHook = useAppState }: BoardProps) => {
  const { state, dispatch } = useAppStateHook();
  const boardRef = useRef<HTMLDivElement>(null);
  const drag = useDragItem({ id, text, index, type: "BOARD" });
  const drop = useDropBoard({ id, text, index, type: "BOARD" });

  drag(drop(boardRef));

  return (
    <BoardContainer
      isPreview={isPreview}
      isHidden={isHidden(id, "BOARD", state.dragItem, isPreview)}
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
      <AddNewItem
        addTask={true}
        onAdd={(text) =>
          dispatch({ type: "ADD_NEW_TASK", payload: { text, index } })
        }
        text="+ Add New Task"
      />
    </BoardContainer>
  );
};
