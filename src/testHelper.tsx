import React from "react";
import { AppStoreProps } from "./interface/IAppStateReducer";
import { AppStateProvider } from "./provider/AppStateContext";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export const Wrapper = ({
  children,
  appStore,
}: React.PropsWithChildren<AppStoreProps>) => (
  <DndProvider backend={Backend}>
    <AppStateProvider appStore={appStore}>{children}</AppStateProvider>
  </DndProvider>
);
