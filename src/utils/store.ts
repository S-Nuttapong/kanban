import { AppState } from "../interface/IAppStateReducer";

export const store = (): AppState => ({
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        { id: "3", text: "Window 95 Portfolio" },
        { id: "4", text: "Vue TypeScript todo project" },
      ],
    },
    { id: "1", text: "Doing", tasks: [{ id: "5", text: "React Piano" }] },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "6", text: "San KanBan Project" }],
    },
  ],
});
