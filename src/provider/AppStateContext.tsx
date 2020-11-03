import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
} from "react";
import { AppStateReducer } from "../reducer/AppStateReducer";
import { AppStoreProps ,AppState, IAppStateReducer } from "../interface/IAppStateReducer";



const appData: AppState = {
  lists: [
    { id: "0", text: "To Do", tasks: [] },
    { id: "1", text: "Doing", tasks: [] },
    { id: "2", text: "Done", tasks: [] },
  ],
};

const AppStateContext = createContext<IAppStateReducer>(
  {} as IAppStateReducer
);

export const AppStateProvider = ({ children, appStore = appData }: PropsWithChildren<AppStoreProps>) => {
  const [state, dispatch] = useReducer(AppStateReducer, appStore);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
