import { Dispatch } from "react";
import { DragItem } from "./IDragItem";

interface Task {
  id: string;
  text: string;
}

export interface List extends Task {
  tasks: Task[];
}

export interface AppState {
  lists: List[];
  dragItem?: DragItem;
}

export interface IAppStateReducer {
  state: AppState;
  dispatch: Dispatch<Action>;
}

export type Action =
  | { type: "ADD_NEW_BOARD"; payload: string }
  | { type: "ADD_NEW_TASK"; payload: { text: string; index: number } }
  | { type: "SET_DRAG_ITEM"; payload: DragItem | undefined }
  | { type: "MOVE_BOARD"; payload: { dragIndex: number; hoverIndex: number } }
  | {
      type: "MOVE_CARD";
      payload: {
        boardDragIndex: number;
        dragIndex: number;
        boardHoverIndex: number;
        hoverIndex: number;
      };
    };
