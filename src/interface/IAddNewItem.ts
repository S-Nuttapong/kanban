import { ReactElement } from "react";
import { UseFormMethods } from "react-hook-form";

export interface AddNewItemButtonProps {
  addTask?: boolean;
}

export interface ItemFormProps {
  onAdd(formItem: FormItem | string): void;
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

export interface SelectorProps
  extends Pick<UseFormMethods, "register" | "setValue"> {}

export interface NewItemFormProps extends ItemFormProps {
  isBoard?: boolean;
  title: string;
  children({ register, setValue }: SelectorProps): ReactElement;
}

export interface AddNewItemProps extends ItemFormProps {
  addTask?: boolean;
  text: string;
  initShowForm?: boolean;
}
