import React from "react";
import { Board } from "../../components/board/Board";
import { AddNewItem } from "../../components/newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { CustomPreview } from "../../components/preview/CustomPreview";
import styled from "styled-components";
import { useAppStateHookProps } from "../../interface/IAppStateReducer";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ;
  display: flex;
  background-color: #3179ba;
  overflow-x: scroll;
  padding: 20px;
  align-items: flex-start;
`;

export const Home = ({
  useAppStateHook = useAppState,
}: useAppStateHookProps) => {
  const { state, dispatch } = useAppStateHook();

  return (
    <HomeContainer>
      <CustomPreview />

      {state.lists.map((list, i) => (
        <Board id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_NEW_BOARD", payload: text })}
        text="+ Add New Board"
      />
    </HomeContainer>
  );
};
