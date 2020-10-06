import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { BoardProps } from "../../interface/IBoard";
import { Card } from "../card/Card";
import { AddNewItem } from "../newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";

export const Board = ({ text, index }: BoardProps) => {
  const state = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        addTask={true}
        onAdd={() => console.log}
        text="+ Add New Task"
      />
    </ColumnContainer>
  );
};
