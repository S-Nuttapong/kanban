import { Dispatch } from "react";
import { DragItem } from "./IDragItem";
import { FormItem, Option } from "../interface/IAddNewItem";
import { SnackBarProps } from "../interface/IAlert";

export interface Task {
  id: string;
  text: string;
  tags?: Option[];
  priority?: Option;
}

export interface List extends Task {
  tasks: Task[];
}

export interface AppState {
  lists: List[];
  dragItem?: DragItem;
  alert?: Partial<Pick<SnackBarProps, "open" | "message">>;
}

export interface AppStoreProps {
  appStore?: AppState;
}
export interface IAppStateReducer {
  state: AppState;
  dispatch: Dispatch<Action>;
}

export type Action =
  | { type: "ADD_NEW_BOARD"; payload: string }
  | {
      type: "ADD_NEW_TASK";
      payload: { index: number; formItem: FormItem };
    }
  | { type: "DELETE_BOARD"; payload: number }
  | { type: "DELETE_CARD"; payload: { cardIndex: number; boardIndex: number } }
  | { type: "CLOSE_ALERT" }
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
