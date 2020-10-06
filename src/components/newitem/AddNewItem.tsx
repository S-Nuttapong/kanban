import React, { useState } from "react";
import { AddNewItemButton } from "./styles";
import { AddNewItemProps } from "../../interface/IAddNewItem";
import { NewItemForm } from "./NewItemForm";

export const AddNewItem = ({ addTask, text, onAdd }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  return showForm ? (
    <NewItemForm
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
};
