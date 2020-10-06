import { List } from "../interface/IAppStateReducer";

export const findItemIndex = <T extends List>(lists: T[], id: string) => {
  return lists.findIndex((list) => list.id === id);
};
