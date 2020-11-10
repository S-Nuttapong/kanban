export interface AddNewItemButtonProps {
  addTask?: boolean;
}

export interface AddNewItemProps extends NewFormProps {
  addTask?: boolean;
  text: string;
  initShowForm?: boolean;
}

export interface NewFormProps {
  onAdd(text: string): void;
}

export interface Option {
  value: string;
  label: string;
  color?: string;
}