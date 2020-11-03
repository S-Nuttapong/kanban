import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { NewFormProps } from "../../interface/IAddNewItem";
import { useFocus } from "../../utils/useFocus";

export const NewItemForm = ({ onAdd }: NewFormProps) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(inputText)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
