import React, { useState, useEffect } from "react";
import { NewItemFormContainer, NewItemButton } from "./styles";
import {
  NewItemFormProps,
  ItemFormProps,
  FormItem,
  Option,
  SelectorProps,
} from "../../interface/IAddNewItem";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import {
  tagOptions,
  priorityOptions,
  singleSelectStyles,
  multiSelectStyles,
} from "../../shared/constant";


const SelectGroup = ({ register, setValue }: SelectorProps) => {
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<Option>({
    value: "",
    label: "",
  });

  const handleChangeTags = (options: any) => {
    setSelectedTags(options);
    setValue("Tags", options);
  };
  const handleChangePriority = (option: any) => {
    setSelectedPriority(option);
    setValue("Priority", option);
  };

  useEffect(() => {
    register({ name: "Tags" });
    register({ name: "Priority" });
  }, [register]);

  return (
    <React.Fragment>
      <div>
        <Select
          name="Tags"
          value={selectedTags}
          placeholder="Tags"
          onChange={handleChangeTags}
          options={tagOptions}
          styles={multiSelectStyles}
          isMulti
        />
      </div>
      <div>
        <Select
          name="Priority"
          placeholder="Priority"
          value={selectedPriority.value ? selectedPriority : null}
          options={priorityOptions}
          styles={singleSelectStyles}
          onChange={handleChangePriority}
        />
      </div>
    </React.Fragment>
  );
};

const NewItemForm = ({ onAdd, title, isBoard, children }: NewItemFormProps) => {
  const { register, handleSubmit, errors, setValue } = useForm();
  const onFormSubmit = (formItem: FormItem) => {
    onAdd(formItem);
  };

  return (
    <NewItemFormContainer
      id={`${title}-addItemForm`}
      onSubmit={handleSubmit(onFormSubmit)}
      isBoard={isBoard}
    >
      <TextField
        name={title}
        id="outlined-basic"
        label={title}
        variant={isBoard ? ("filled" as any) : ("outlined" as any)}
        size="small"
        autoFocus={true}
        inputRef={register({ required: true })}
        error={errors[title] ? true : false}
        autoComplete="off"
      />
      {children && children({ register, setValue })}
      <NewItemButton form={`${title}-addItemForm`} type="submit">
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

export const CardItemForm = ({ onAdd }: ItemFormProps) => {
  return (
    <NewItemForm title="Task Title" onAdd={(formItem) => onAdd(formItem)}>
      {({ register, setValue }: SelectorProps) => (
        <SelectGroup register={register} setValue={setValue} />
      )}
    </NewItemForm>
  );
};

export const BoardItemForm = ({ onAdd }: ItemFormProps) => {
  return (
    <NewItemForm
      isBoard={true}
      title="Board Title"
      onAdd={(formItem) => onAdd(formItem)}
    >
      {({ register, setValue }: SelectorProps) => <React.Fragment />}
    </NewItemForm>
  );
};
