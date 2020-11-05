import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
} from "react";
import { AppStateReducer } from "../reducer/AppStateReducer";
import { AppStoreProps, IAppStateReducer } from "../interface/IAppStateReducer";
import { store } from "../utils/store";

const AppStateContext = createContext<IAppStateReducer>(
  {} as IAppStateReducer
);

export const AppStateProvider = ({ children, appStore = store() }: PropsWithChildren<AppStoreProps>) => {
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
