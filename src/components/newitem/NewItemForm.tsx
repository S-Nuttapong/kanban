import React from "react";
import { useSelect } from "../../utils/useSelect";
import { NewItemFormContainer, NewItemButton } from "./styles";
import {
  NewItemFormProps,
  ItemFormProps,
  FormItem,
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
import { CancelButton } from "../button/Button";

const SelectGroup = ({
  handleChangeTags,
  handleChangePriority,
  selectedTags,
}: SelectorProps) => {
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
          defaultValue={priorityOptions[1]}
          options={priorityOptions}
          styles={singleSelectStyles}
          onChange={handleChangePriority}
        />
      </div>
    </React.Fragment>
  );
};

const NewItemForm = ({
  onAdd,
  onCancel,
  title,
  isBoard,
  children,
}: NewItemFormProps) => {
  const { register, handleSubmit, errors, setValue, reset } = useForm();
  const onFormSubmit = (formItem: FormItem) => {
    onAdd(formItem);
  };
  const {
    handleChangeTags,
    handleChangePriority,
    selectedTags,
    defaultTags,
  } = useSelect({
    register,
    setValue,
  });

  return (
    <React.Fragment>
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
        {children &&
          children({
            handleChangeTags,
            handleChangePriority,
            selectedTags,
          })}

        <div className="flex bg-none mt-2 mb-0">
          <NewItemButton form={`${title}-addItemForm`} type="submit">
            Create
          </NewItemButton>
          <CancelButton
            action={() => {
              handleChangeTags(defaultTags);
              reset({ title: "" });
              onCancel();
            }}
          />
        </div>
      </NewItemFormContainer>
    </React.Fragment>
  );
};

export const CardItemForm = ({ onAdd, onCancel }: ItemFormProps) => {
  return (
    <NewItemForm
      title="Task Title"
      onAdd={(formItem) => onAdd(formItem)}
      onCancel={() => onCancel()}
    >
      {({
        handleChangeTags,
        handleChangePriority,
        selectedTags,
      }: SelectorProps) => (
        <SelectGroup
          handleChangeTags={handleChangeTags}
          handleChangePriority={handleChangePriority}
          selectedTags={selectedTags}
        />
      )}
    </NewItemForm>
  );
};

export const BoardItemForm = ({ onAdd, onCancel }: ItemFormProps) => {
  return (
    <NewItemForm
      isBoard={true}
      title="Board Title"
      onAdd={(formItem) => onAdd(formItem)}
      onCancel={() => onCancel()}
    >
      {() => <React.Fragment />}
    </NewItemForm>
  );
};
