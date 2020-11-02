import { AppState, Action } from "../interface/IAppStateReducer";
import { nanoid } from "nanoid";
import { findItemIndex } from "../utils/findItemIndex";

export const AppStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      state.lists.push({ text: action.payload, id: nanoid(), tasks: [] });
      return { ...state };
    }
    case "ADD_NEW_TASK": {
      /**
       * add new task(card) based on selected Board
       * @ param {number} index The index to access selected Board in List of Board
       */
      const { text, index } = action.payload;
      state.lists[index].tasks.push({ text: text, id: nanoid() });
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
