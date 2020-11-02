import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { NewFormProps } from "../../interface/IAddNewItem";

export const NewItemForm = ({onAdd}: NewFormProps) => {
  const [inputText, setInputText] = useState("");
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(inputText)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
