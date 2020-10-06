import React, { createContext, useContext, PropsWithChildren } from "react";
import { AppState } from "../interface/IAppStateContext";

const appData: AppState = {
  lists: [
    { id: "0", text: "List 1", tasks: [{ id: "0", text: "Task 1" }] },
    { id: "1", text: "List 2", tasks: [{ id: "1", text: "Task 2" }] },
  ],
};

const AppStateContext = createContext<AppState>({} as AppState);

export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={appData}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
