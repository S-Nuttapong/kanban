import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
} from "react";
import { AppStateReducer } from "../reducer/AppStateReducer";
import { AppState, IAppStateReducer } from "../interface/IAppStateReducer";

const appData: AppState = {
  lists: [
    { id: "0", text: "List 1", tasks: [{ id: "0", text: "Task 1" }] },
    { id: "1", text: "List 2", tasks: [{ id: "1", text: "Task 2" }] },
  ],
};

const AppStateContext = createContext<IAppStateReducer>({} as IAppStateReducer);

export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(AppStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
