import React, { useState } from "react";
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
  ItemFormContainer,
} from "./styles";
import { NewFormProps, Option } from "../../interface/IAddNewItem";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useFocus } from "../../utils/useFocus";
import {
  tagOptions,
  priorityOptions,
  singleSelectStyles,
  multiSelectStyles,
} from "../../shared/constant";

const SelectGroup = () => {
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<Option>({
    value: "",
    label: "",
  });
  return (
    <React.Fragment>
      <div>
        <Select
          value={selectedTags}
          placeholder="Tags"
          onChange={(options: any) => setSelectedTags(options)}
          options={tagOptions}
          styles={multiSelectStyles}
          isMulti
        />
      </div>
      <div>
        <Select
          placeholder="Priority"
          value={selectedPriority.value ? selectedPriority : null}
          options={priorityOptions}
          styles={singleSelectStyles}
          onChange={(option: any) => setSelectedPriority(option)}
        />
      </div>
    </React.Fragment>
  );
};

interface NewItemFormProps extends NewFormProps {
  title: string;
  isBoard?: boolean;
}

const NewItemForm = ({
  children,
  onAdd,
  title,
  isBoard,
}: React.PropsWithChildren<NewItemFormProps>) => {
  return (
    <NewItemFormContainer isBoard={isBoard}>
      <TextField
        id="outlined-basic"
        label={title}
        variant={isBoard ? ("filled" as any) : ("outlined" as any)}
        size="small"
        autoFocus={true}
      />
      {children}
      <NewItemButton type="submit" onClick={() => onAdd("ass")}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

export const CardItemForm = ({ onAdd }: NewFormProps) => {
  return (
    <NewItemForm onAdd={() => onAdd("ass")} title="Task Title">
      <SelectGroup />
    </NewItemForm>
  );
};

export const BoardItemForm = ({ onAdd }: NewFormProps) => {
  return (
    <NewItemForm isBoard={true} title="Board Title" onAdd={() => onAdd("ass")}>
      {""}
    </NewItemForm>
  );
};
