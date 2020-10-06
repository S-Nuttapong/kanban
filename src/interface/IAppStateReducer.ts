import { Dispatch } from "react";

interface Task {
  id: string;
  text: string;
}

export interface List extends Task {
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

export interface IAppStateReducer {
  state: AppState;
  dispatch: Dispatch<Action>;
}

export type Action =
  | { type: "ADD_NEW_BOARD"; payload: string }
  | { type: "ADD_NEW_TASK"; payload: { text: string; index: number } };
