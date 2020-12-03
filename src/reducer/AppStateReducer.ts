import { AppState, Action } from "../interface/IAppStateReducer";
import nanoid from "nanoid";
import { switchItem } from "../utils/switchItem";
import { priorityOptions } from "../shared/constant";

export const AppStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_NEW_BOARD": {
      state.lists.push({ text: action.payload, id: nanoid(), tasks: [] });
      const alert = {
        message: "Board created",
        open: true,
      };
      return { ...state, alert: alert };
    }
    case "ADD_NEW_TASK": {
      /**
       * add new task(card) to selected Board
       * @ param {number} index The index to access selected Board in List of Board
       */
      const { formItem, index } = action.payload;
      const [text, tags, priority] = Object.values(formItem);

      state.lists[index].tasks.push({
        text: text,
        tags: tags,
        priority: priority ? priority : priorityOptions[1],
        id: nanoid(),
      });
      const alert = {
        message: "Task created",
        open: true,
      };
      return { ...state, alert: alert };
    }
    case "DELETE_BOARD": {
      const boardIndex = action.payload;
      state.lists.splice(boardIndex, 1);
      const alert = {
        message: "Board deleted",
        open: true,
      };

      return { ...state, alert: alert };
    }
    case "DELETE_CARD": {
      const { boardIndex, cardIndex } = action.payload;
      state.lists[boardIndex].tasks.splice(cardIndex, 1);
      const alert = {
        message: "Task deleted",
        open: true,
      };
      return { ...state, alert: alert };
    }
    case "CLOSE_ALERT": {
      return { ...state, alert: { open: false } };
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
