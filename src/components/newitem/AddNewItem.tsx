import React, { useState, ReactElement, Dispatch, SetStateAction } from "react";
import { AddNewItemButton } from "./styles";
import { AddItemProps, FormItem } from "../../interface/IAddNewItem";
import { CardItemForm, BoardItemForm } from "./NewItemForm";

interface AddNewItemProps extends Omit<AddItemProps, "onAdd"> {
  children(setShowForm: Dispatch<SetStateAction<boolean>>): ReactElement;
}

const AddNewItem = ({
  addTask,
  text,
  children,
  initShowForm = false,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(initShowForm);

  return showForm ? (
    <React.Fragment>{children && children(setShowForm)}</React.Fragment>
  ) : (
    <AddNewItemButton addTask={addTask} onClick={() => setShowForm(true)}>
      {text}
    </AddNewItemButton>
  );
};

export const AddNewBoard = ({
  addTask,
  text,
  onAdd,
}: AddItemProps) => (
  <AddNewItem addTask={addTask} text={text}>
    {(setShowForm) => (
      <BoardItemForm
        onAdd={(inputText: string) => {
          onAdd(inputText);
          setShowForm(false);
        }}
        onCancel={() => setShowForm(false)}
      />
    )}
  </AddNewItem>
);

export const AddNewCard = ({
  addTask,
  text,
  onAdd,
}: AddItemProps) => (
  <AddNewItem addTask={addTask} text={text}>
    {(setShowForm) => (
       <CardItemForm
       onAdd={(formItem: FormItem) => {
         onAdd(formItem);
         setShowForm(false);
       }}
       onCancel={() => setShowForm(false)}
       />
    )}
  </AddNewItem>
)