import { ReactElement, Dispatch, SetStateAction } from "react";
import { UseFormMethods } from "react-hook-form";

export interface AddNewItemButtonProps {
  addTask?: boolean;
}

export interface ItemFormProps {
  onAdd(formItem: FormItem | string): void;
  onCancel(): void;
}

export interface CardItemFormProps extends ItemFormProps {
  showForm: boolean;
}

export interface Option {
  value: string;
  label: string;
  color?: string;
}

export interface FormItem {
  text?: string;
  tags?: Option[];
  priority?: Option;
}

export interface UseFormProps
  extends Pick<UseFormMethods, "register" | "setValue"> {}
export interface SelectorProps {
  handleChangeTags(options: any): void;
  handleChangePriority(options: any): void;
  selectedTags: Option[];
  setSelectedTags?: Dispatch<SetStateAction<Option[]>>;
}

export interface NewItemFormProps extends ItemFormProps {
  isBoard?: boolean;
  title: string;
  children({
    handleChangeTags,
    handleChangePriority,
    selectedTags,
    setSelectedTags,
  }: SelectorProps): ReactElement;
}
