import React from "react";
import { AppContainer } from "./styles";
import { Board } from "./components/board/Board";
import { AddNewItem } from "./components/newitem/AddNewItem";
import { useAppState } from "./provider/AppStateContext";
import { CustomPreview } from "./components/preview/CustomPreview";

function App() {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomPreview />

      {state.lists.map((list, i) => (
        <Board id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        onAdd={(text) => dispatch({ type: "ADD_NEW_BOARD", payload: text })}
        text="+ Add New Board"
      />
    </AppContainer>
  );
}

export default App;
