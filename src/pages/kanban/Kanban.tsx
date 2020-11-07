import React from "react";
import { Board } from "../../components/board/Board";
import { AddNewItem } from "../../components/newitem/AddNewItem";
import { useAppState } from "../../provider/AppStateContext";
import { CustomPreview } from "../../components/preview/CustomPreview";
import styled from "styled-components";

export const KanbanContainer = styled.div`
  width: 100vw;
  margin-top: 1rem;
  background-color: ;
  display: flex;
  background-color: #072e54;
  overflow-x: scroll;
  padding: 20px;
  align-items: flex-start;
`;

export const Home = () => {
  const { state, dispatch } = useAppState();

  return (
    <KanbanContainer>
      <CustomPreview />

      {state.lists.map((list, i) => {
        return <Board id={list.id} text={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_NEW_BOARD", payload: text })}
        text="+ Add New Board"
      />
    </KanbanContainer>
  );
};
