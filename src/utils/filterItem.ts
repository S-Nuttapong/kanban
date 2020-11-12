import { Task } from "../interface/IAppStateReducer";

export const filterItem = <T extends Task>(lists: T[], id: string) => {
  lists.filter((list) => list.id !== id);
};
