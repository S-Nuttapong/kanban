import { useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItem, CardDrag } from "../interface/IDragItem";
import { useAppState } from "../provider/AppStateContext";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useDragItem = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    item,
    begin: () => dispatch({ type: "SET_DRAG_ITEM", payload: item }),
    end: () => dispatch({ type: "SET_DRAG_ITEM", payload: undefined }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  });

  return drag;
};

export const useDropBoard = (hoverItem: DragItem) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: ["BOARD", "CARD"],
    hover(dragItem: DragItem) {
      if (dragItem.type === "BOARD") {
        const dragIndex = dragItem.index;
        const hoverIndex = hoverItem.index;

        if (dragIndex === hoverIndex) {
          return;
        }

        dispatch({ type: "MOVE_BOARD", payload: { dragIndex, hoverIndex } });

        //update dragItem position preventing re-triggering dispatch
        dragItem.index = hoverIndex;
      } else {
        const boardDragIndex = dragItem.boardIndex;
        const dragIndex = dragItem.index;
        const boardHoverIndex = hoverItem.index;
        const hoverIndex = 0;

        if (boardDragIndex === boardHoverIndex) {
          return;
        }

        dispatch({
          type: "MOVE_CARD",
          payload: { boardDragIndex, dragIndex, boardHoverIndex, hoverIndex },
        });

        dragItem.boardIndex = boardHoverIndex;
        dragItem.index = hoverIndex;
      }
    },
  });
  return drop;
};

export const useDropCard = (hoverItem: CardDrag) => {
  const { dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: "CARD",
    hover(dragItem: CardDrag) {
      const boardDragIndex = dragItem.boardIndex;
      const dragIndex = dragItem.index;
      const boardHoverIndex = hoverItem.boardIndex;
      const hoverIndex = hoverItem.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({
        type: "MOVE_CARD",
        payload: { boardDragIndex, dragIndex, boardHoverIndex, hoverIndex },
      });

      dragItem.boardIndex = boardHoverIndex;
      dragItem.index = hoverIndex;
    },
  });
  return drop;
};
