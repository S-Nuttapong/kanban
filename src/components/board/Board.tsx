import React, { useRef } from "react";
import { BoardContainer, BoardTitle } from "./styles";
import { BoardProps } from "../../interface/IBoard";
import { Card } from "../card/Card";
import { AddNewCard } from "../newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { useDragItem, useDropBoard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";
import { FormItem } from "../../interface/IAddNewItem";
import { DeleteButton } from "../button/Button";


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
      <div className="flex align-center space-between">
        <BoardTitle>{text}</BoardTitle>
        <DeleteButton
          onDelete={() => dispatch({ type: "DELETE_BOARD", payload: index })}
          message="Are you sure? Deleting the column will also delete related tasks and this cannot be undone."
        />
      </div>
      {state.lists[index].tasks.map((task, i) => (
        <Card
          boardIndex={index}
          text={task.text}
          key={task.id}
          id={task.id}
          index={i}
          tags={task.tags}
          priority={task.priority}
        />
      ))}
      <AddNewCard
        addTask={true}
        text="+ Add New Task"
        onAdd={(formItem: FormItem) => {
          dispatch({ type: "ADD_NEW_TASK", payload: { index, formItem } });
        }}
      />
    </BoardContainer>
  );
};
