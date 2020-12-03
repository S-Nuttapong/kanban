import React, { useRef, useState } from "react";
import { BoardContainer, BoardTitle } from "./styles";
import { BoardProps } from "../../interface/IBoard";
import { Card } from "../card/Card";

import { useAppState } from "../../provider/AppStateContext";
import { useDragItem, useDropBoard } from "../../utils/useDnD";
import { isHidden } from "../../utils/isHidden";
import { FormItem } from "../../interface/IAddNewItem";
import { DeleteButton } from "../button/Button";
import { AddNewItemButton } from "../newitem/styles";
import {} from "../../interface/IAddNewItem";
import { CardItemForm } from "../newitem/NewItemForm";

export const Board = ({ id, text, index, boardPreview }: BoardProps) => {
  const { state, dispatch } = useAppState();
  const [showForm, setShowForm] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const drag = useDragItem({ id, text, index, type: "BOARD" });
  const drop = useDropBoard({ id, text, index, type: "BOARD" });

  drag(drop(boardRef));

  if (!state.lists[index]) {
    return <React.Fragment />;
  }

  return (
    <BoardContainer
      data-testid="board-container"
      boardPreview={boardPreview}
      isHidden={isHidden(id, "BOARD", state.dragItem, boardPreview)}
      ref={boardRef}
    >
      <div className="flex align-center space-between">
        <BoardTitle>{text}</BoardTitle>
        <DeleteButton
          action={() => dispatch({ type: "DELETE_BOARD", payload: index })}
          message="Are you sure? Deleting the column will also delete related tasks and this cannot be undone."
        />
      </div>
      <div className="card-section">
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
        <CardItemForm
          onAdd={(formItem: FormItem) => {
            dispatch({ type: "ADD_NEW_TASK", payload: { index, formItem } });
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
          showForm={showForm}
        />
      </div>
      <AddNewItemButton
        data-testid="newCard-button"
        addTask={true}
        onClick={() => setShowForm(true)}
      >
        + Add New Task
      </AddNewItemButton>
    </BoardContainer>
  );
};
