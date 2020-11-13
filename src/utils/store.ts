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
          text: "Nampha Payai with Aoey",
          tags: [tagOptions[0], tagOptions[3]],
          priority: priorityOptions[0],
        },
        {
          id: "5",
          text: "Christmas with Aoey",
          tags: [tagOptions[2], tagOptions[3]],
          priority: priorityOptions[1],
        },
      ],
    },
    {
      id: "1",
      text: "Doing",
      tasks: [
        {
          id: "6",
          text: "Vue: Highly testable TypeScript todo app",
          tags: [tagOptions[1]],
          priority: priorityOptions[0],
        },
        {
          id: "7",
          text: "React: Window 95 Portfolio",
          tags: [tagOptions[1]],
          priority: priorityOptions[1],
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "8",
          text: "React: San-KanBan Project",
          tags: [tagOptions[1]],
          priority: priorityOptions[0],
        },
      ],
    },
    {
      id: "3",
      text: "Future Plan",
      tasks: [
        {
          id: "9",
          text: "Climbing in Thakaek",
          tags: [tagOptions[0], tagOptions[2]],
          priority: priorityOptions[2],
        },
      ],
    },
  ],
});
