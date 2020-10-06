export interface AddNewItemButtonProps {
  addTask?: boolean;
}

export interface AddNewItemProps extends NewFormProps {
  addTask?: boolean;
  text: string;
}

export interface NewFormProps {
  onAdd(text: string): void;
}