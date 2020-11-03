import { DragItem } from "../interface/IDragItem";

export const isHidden = (id: string, type: string, dragItem?: DragItem, isPreview?: boolean) => {
  return !isPreview && dragItem && dragItem.type === type && dragItem.id === id;
};
