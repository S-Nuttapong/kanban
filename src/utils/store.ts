import { AppState } from "../interface/IAppStateReducer";
import { tagOptions, priorityOptions } from "../shared/constant";

export const store = (): AppState => ({
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "4",
          text: "Window 95 Portfolio",
          tags: [tagOptions[1]],
          priority: priorityOptions[1],
        },
        {
          id: "5",
          text: "Nampha Payai with Aoey",
          tags: [tagOptions[0], tagOptions[3]],
          priority: priorityOptions[0],
        },
        {
          id: "6",
          text: "Takhaek Climbing",
          tags: [tagOptions[0], tagOptions[2]],
          priority: priorityOptions[2],
        },
      ],
    },
    {
      id: "1",
      text: "Doing",
      tasks: [
        {
          id: "7",
          text: "Vue TypeScript todo project",
          tags: [tagOptions[1]],
          priority: priorityOptions[0],
        },
        {
          id: "8",
          text: "Shark Baited V8",
          tags: [tagOptions[0]],
          priority: priorityOptions[1],
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "9",
          text: "San KanBan Project",
          tags: [tagOptions[1]],
          priority: priorityOptions[0],
        },
      ],
    },
  ],
});
