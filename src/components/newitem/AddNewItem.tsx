import React, { useState } from "react";
import { AddNewItemButton } from "./styles";
import { AddNewItemProps } from "../../interface/IAddNewItem";
import { CardItemForm, BoardItemForm } from "./NewItemForm";

export const AddNewItem = ({
  addTask,
  text,
  onAdd,
  initShowForm = false,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(initShowForm);
  return showForm ? (
    <BoardItemForm
      onAdd={() => {
        onAdd(text)
        setShowForm(false);
      }}
    />
  ) : (
    <AddNewItemButton addTask={addTask} onClick={() => setShowForm(true)}>
      {text}
    </AddNewItemButton>
  );
};


export const AddNewCard = ({
  addTask,
  text,
  onAdd,
  initShowForm = false,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(initShowForm);
  return showForm ? (
    <CardItemForm
      onAdd={(text) => {
        onAdd(text);
        setShowForm(false);
      }}
    />
  ) : (
    <AddNewItemButton addTask={addTask} onClick={() => setShowForm(true)}>
      {text}
    </AddNewItemButton>
  );
}
