import React, { useState } from "react";
import { ItemFormProps } from "../../interface/IAddNewItem";
import { BoardItemForm } from "./NewItemForm";
import { AddNewItemButton } from "./styles";

export const AddNewBoard = ({ onAdd }: Omit<ItemFormProps, "onCancel">) => {
  const [showForm, setShowForm] = useState(false);

  return showForm ? (
    <BoardItemForm
      onAdd={(inputText: string) => {
        onAdd(inputText);
        setShowForm(false);
      }}
      onCancel={() => setShowForm(false)}
    />
  ) : (
    <AddNewItemButton addTask={false} onClick={() => setShowForm(true)}>
      Add New Board
    </AddNewItemButton>
  );
};
