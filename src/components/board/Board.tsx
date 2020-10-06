import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { BoardProps } from "../../interface/IBoard";
import { Card } from "../card/Card";
import { AddNewItem } from "../newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";

export const Board = ({ text, index }: BoardProps) => {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        addTask={true}
        onAdd={(text) =>
          dispatch({ type: "ADD_NEW_TASK", payload: { text, index } })
        }
        text="+ Add New Task"
      />
    </ColumnContainer>
  );
};
