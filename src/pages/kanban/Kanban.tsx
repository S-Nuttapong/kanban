import React from "react";
import { Board } from "../../components/board/Board";
import { AddNewItem } from "../../components/newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { CustomPreview } from "../../components/preview/CustomPreview";
import { MotionWrapper } from "../../shared/Motion/Motion";
import "../../shared/Motion/Motion.css";

export const Kanban = () => {
  const { state, dispatch } = useAppState();

  return (
    <MotionWrapper className="KanbanMotion">
      <CustomPreview />

      {state.lists.map((list, i) => {
        return <Board id={list.id} text={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_NEW_BOARD", payload: text })}
        text="+ Add New Board"
      />
    </MotionWrapper>
  );
};
