import React, { useState } from "react";
import { AddNewItemButton } from "./styles";
import { AddNewItemProps, FormItem } from "../../interface/IAddNewItem";
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
      onAdd={(inputText: string) => {
        onAdd(inputText);
        setShowForm(!showForm);
      }}
      onCancel={() => setShowForm(!showForm)}
    />
  ) : (
    <AddNewItemButton addTask={addTask} onClick={() => setShowForm(!showForm)}>
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
      onAdd={(formItem: FormItem) => {
        onAdd(formItem);
        setShowForm(!showForm);
      }}
      onCancel={() => setShowForm(!showForm)}
    />
  ) : (
    <AddNewItemButton addTask={addTask} onClick={() => setShowForm(true)}>
      {text}
    </AddNewItemButton>
  );
};
