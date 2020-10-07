import { AppState, Action } from "../interface/IAppStateReducer";
import { nanoid } from "nanoid";
import { switchItem } from "../utils/switchItem";

export const AppStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      state.lists.push({ text: action.payload, id: nanoid(), tasks: [] });
      return { ...state };
    }
    case "ADD_NEW_TASK": {
      /**
       * add new task(card) to selected Board
       * @ param {number} index The index to access selected Board in List of Board
       */
      const { text, index } = action.payload;
      state.lists[index].tasks.push({ text: text, id: nanoid() });
      return { ...state };
    }
    case "SET_DRAG_ITEM": {
      return { ...state, dragItem: action.payload };
    }
    case "MOVE_BOARD": {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = switchItem(state.lists, dragIndex, hoverIndex);
      return { ...state };
    }
    case "MOVE_CARD": {
      const {
        boardDragIndex,
        dragIndex,
        boardHoverIndex,
        hoverIndex,
      } = action.payload;
      const item = state.lists[boardDragIndex].tasks.splice(dragIndex, 1)[0];
      state.lists[boardHoverIndex].tasks.splice(hoverIndex, 0, item);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
