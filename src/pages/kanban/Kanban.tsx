import React from "react";
import { Board } from "../../components/board/Board";
import { AddNewBoard } from "../../components/newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { CustomPreview } from "../../components/preview/CustomPreview";
import { MotionWrapper } from "../../shared/Motion/Motion";
import "../../shared/Motion/Motion.css";
import { useCalWidth } from "../../utils/useWindow";
import { Snackbars } from "../../components/alert/Snackbar";

export const Kanban = () => {
  const { state, dispatch } = useAppState();

  return (
    <MotionWrapper className="KanbanMotion" width={useCalWidth(1680, 88, 180)}>
      <CustomPreview />

      {state.lists.map((list, i) => {
        return (
          <Board
            id={list.id}
            text={list.text}
            key={list.id}
            index={i}
            data-testid="Board"
          />
        );
      })}
      <AddNewBoard
        onAdd={(formItem) =>
          dispatch({
            type: "ADD_NEW_BOARD",
            payload: Object.values(formItem)[0],
          })
        }
      />
      {state.alert ? (
        <Snackbars
          open={state.alert.open}
          setOpen={() => dispatch({ type: "CLOSE_ALERT" })}
          message={state.alert.message}
        />
      ) : null}
    </MotionWrapper>
  );
};
