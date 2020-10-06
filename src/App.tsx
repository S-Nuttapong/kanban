import React from "react";
import { AppContainer } from "./styles";
import { Board } from "./components/board/Board";
import { AddNewItem } from "./components/newitem/AddNewItem";
import { useAppState } from "./provider/AppStateContext";

function App() {
  const state = useAppState();
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Board text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem onAdd={() => console.log} text="+ Add New Board" />
    </AppContainer>
  );
}

export default App;
