import React from "react";
import { AppStoreProps } from "./interface/IAppStateReducer";
import { AppStateProvider } from "./provider/AppStateContext";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import { render, RenderResult } from "@testing-library/react";

export const Wrapper = ({
  children,
  appStore,
}: React.PropsWithChildren<AppStoreProps>) => (
  <DndProvider backend={Backend}>
    <AppStateProvider appStore={appStore}>{children}</AppStateProvider>
  </DndProvider>
);

export const renderWithRouter = (
  renderComponent: () => React.ReactNode,
  route?: string
): RenderResult & { history: MemoryHistory } => {
  const history = createMemoryHistory();
  if (route) {
    history.push(route);
  }

  return {
    ...render(<Router history={history}>{renderComponent()}</Router>),
    history,
  };
};
