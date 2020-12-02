import React from "react";
import { Kanban } from "./Kanban";
import { fireEvent, queryAllByTestId, render } from "@testing-library/react";
import { Wrapper } from "../../testHelper";
import { act } from "react-dom/test-utils";
import { AppState, List } from "../../interface/IAppStateReducer";

const renderKanban = (list: List[] = []) => {
  const mockAppStore: AppState = {
    lists: list,
  };

  return {
    ...render(
      <Wrapper appStore={mockAppStore}>
        <Kanban />
      </Wrapper>
    ),
  };
};

describe("Home", () => {
  describe("with no data", () => {
    it("renders '+ Add New Board' button", () => {
      const { queryByTestId } = renderKanban([]);
      const $button = queryByTestId("newBaord-button") as HTMLButtonElement;
      expect($button?.innerHTML).toMatch("+ Add New Board");
    });

    describe("on create new Board", () => {
      it("renders new Board with correct behavior", async () => {
        const boardTitle = "testBoard";
        const { queryByTestId } = renderKanban([]);
        const $button = queryByTestId("newBaord-button") as HTMLDivElement;

        act(() => {
          fireEvent.click($button);
        });

        expect(queryByTestId("newItem-form")).toBeTruthy();
        expect(queryByTestId("newBaord-button")).toBeFalsy();

        const $input = queryByTestId("newItem-input") as HTMLInputElement;
        const $submit = queryByTestId("submit-button") as HTMLButtonElement;

        await act(async () => {
          fireEvent.change($input, {
            target: { value: boardTitle },
          });
          expect($input.value).toEqual(boardTitle);
          fireEvent.submit($submit);
        });

        expect(queryByTestId("newItem-form")).toBeFalsy();
        expect(queryByTestId("board-container")?.innerHTML).toMatch(boardTitle);
      });
    });
  });

  describe("with data", () => {
    it("renders correctly", () => {
      const list = [
        { id: "0", text: "Board 1", tasks: [{ id: "2", text: "Card 1" }] },
        { id: "1", text: "Board 2", tasks: [{ id: "3", text: "Card 2" }] },
      ];
      const { queryAllByTestId, queryByTestId } = renderKanban(list);
      const $baordContainer = queryAllByTestId("board-container");
      expect($baordContainer).toHaveLength(2);
      $baordContainer.forEach((board, i) => {
        expect(board.innerHTML).toMatch(list[i].text);
        expect(board.innerHTML).toMatch(list[i].tasks[0].text);
        expect(board.innerHTML).toMatch("+ Add New Task");
      });
      expect(queryByTestId("newBaord-button")).toBeTruthy();
    });

    describe("on create new Task", () => {
      const list = [{ id: "0", text: "Board 1", tasks: [] }];
      const cardTitle = "testCard";
      it("creates new Card component", async () => {
        const { queryByTestId } = renderKanban(list);
        const $button = queryByTestId("newCard-button") as HTMLButtonElement;

        act(() => {
          fireEvent.click($button);
        });

        expect(queryByTestId("newItem-form")).toBeTruthy();

        const $input = queryByTestId("newItem-input") as HTMLInputElement;
        const $submit = queryByTestId("submit-button") as HTMLButtonElement;

        await act(async () => {
          fireEvent.change($input, {
            target: { value: cardTitle },
          });
          expect($input.value).toEqual(cardTitle);
          fireEvent.submit($submit);
        });

        expect(queryByTestId("newItem-form")).toBeFalsy();
        expect(queryByTestId("card-container")?.innerHTML).toMatch(cardTitle);
      });
    });

    describe("on drag", () => {
      const list = [
        {
          id: "0",
          text: "Board1",
          tasks: [{ id: "0", text: "Task1" }],
        },
      ];

      describe("drags Board", () => {
        it("renders Board correctly", () => {
          const { queryByTestId } = renderKanban(list);

          const $board = queryByTestId("board-container") as HTMLDivElement;
          expect($board).toBeTruthy();
          expect($board).toHaveStyleRule("opacity", "1");
          fireEvent.dragStart($board);
          expect($board).toHaveStyleRule("opacity", "0");
        });

        it("renders preview Board correctly", () => {
          const { queryByTestId } = renderKanban(list);

          let $preview = queryByTestId("preview-container") as HTMLElement;
          const $board = queryByTestId("board-container") as HTMLDivElement;
          expect($preview).toBeFalsy();

          fireEvent.dragStart($board);

          $preview = queryByTestId("preview-container") as HTMLElement;
          expect(
            $preview.querySelector("[data-testid=board-container]")
          ).toBeTruthy();
        });
      });

      describe("drags Card", () => {
        it("renders Card correctly", () => {
          const { queryByTestId } = renderKanban(list);
          const $card = queryByTestId("card-container") as HTMLDivElement;
          expect($card).toBeTruthy();
          expect($card).toHaveStyleRule("opacity", "1");
          fireEvent.dragStart($card);
          expect($card).toHaveStyleRule("opacity", "0");
        });

        it("renders preview Card correctly", () => {
          const { queryByTestId } = renderKanban(list);
          let $preview = queryByTestId("preview-container") as HTMLElement;
          const $card = queryByTestId("card-container") as HTMLDivElement;
          expect($preview).toBeFalsy();

          fireEvent.dragStart($card);
          $preview = queryByTestId("preview-container") as HTMLElement;
          expect(
            $preview.querySelector("[data-testid=card-container]")
          ).toBeTruthy();
        });
      });
    });
  });

  describe("on 'MOVE'", () => {
    const drangAndDrop = (src: Element, dst: Element) => {
      fireEvent.dragStart(src);
      fireEvent.dragEnter(dst);
      fireEvent.drop(dst);
      fireEvent.dragLeave(dst);
      fireEvent.dragEnd(src);
    };

    describe("on 'MOVE_BOARD'", () => {
      const list = [
        {
          id: "0",
          text: "Board1",
          tasks: [{ id: "0", text: "Task1" }],
        },
        {
          id: "1",
          text: "Board2",
          tasks: [{ id: "1", text: "Task2" }],
        },
      ];
      it("switches Board position", () => {
        const { queryAllByTestId } = renderKanban(list);

        const [$board1, $board2] = queryAllByTestId(
          "board-container"
        ) as HTMLDivElement[];
        const board1HTML = $board1.innerHTML;
        const board2HTML = $board2.innerHTML;
        expect(board1HTML).toMatch("Board1");
        expect(board2HTML).toMatch("Board2");

        act(() => {
          drangAndDrop($board2, $board1);
        });

        const [, $board1After, $board2After] = queryAllByTestId(
          "board-container"
        ) as HTMLDivElement[];
        expect($board1After.innerHTML).toEqual(board2HTML);
        expect($board2After.innerHTML).toEqual(board1HTML);
      });
    });

    describe("on MOVE_CARD", () => {
      it("can switch Cards inside the Board", () => {
        const list = [
          {
            id: "0",
            text: "Board1",
            tasks: [
              { id: "0", text: "Task1" },
              { id: "1", text: "Task2" },
            ],
          },
        ];
        const { queryAllByTestId } = renderKanban(list);

        const [$card1, $card2] = queryAllByTestId(
          "card-container"
        ) as HTMLDivElement[];
        const card1HTML = $card1.innerHTML;
        const card2HTML = $card2.innerHTML;
        expect(card1HTML).toMatch("Task1");
        expect(card2HTML).toMatch("Task2");

        act(() => {
          drangAndDrop($card1, $card2);
        });

        const [, $card1After, $card2After] = queryAllByTestId(
          "card-container"
        ) as HTMLDivElement[];
        expect($card1After.innerHTML).toEqual(card2HTML);
        expect($card2After.innerHTML).toEqual(card1HTML);
      });

      it("can switch Cards Between Boards", () => {
        const list = [
          {
            id: "0",
            text: "Board1",
            tasks: [{ id: "0", text: "Task1" }],
          },
          {
            id: "1",
            text: "Board2",
            tasks: [{ id: "1", text: "Task2" }],
          },
        ];

        let { queryAllByTestId } = renderKanban(list);

        const [$board1, $board2] = queryAllByTestId(
          "board-container"
        ) as HTMLDivElement[];
        const $card1 = $board1.querySelector(
          "[data-testid=card-container]"
        ) as HTMLDivElement;
        const $card2 = $board2.querySelector(
          "[data-testid=card-container]"
        ) as HTMLDivElement;
        const card1HTML = $card1.innerHTML;
        const card2HTML = $card2.innerHTML;

        expect(card1HTML).toMatch("Task1");
        expect(card2HTML).toMatch("Task2");

        act(() => {
          drangAndDrop($card1, $board2);
        });

        expect(
          $board1.querySelector("[data-testid=card-container]")
        ).toBeFalsy();
        expect(
          $board2.querySelectorAll("[data-testid=card-container]")
        ).toHaveLength(2);

        act(() => {
          drangAndDrop($card2, $board1);
        });

        const $card1After = $board1.querySelector(
          "[data-testid=card-container]"
        ) as HTMLDivElement;
        const $card2After = $board2.querySelector(
          "[data-testid=card-container]"
        ) as HTMLDivElement;

        expect($card1After.innerHTML).toEqual(card2HTML);
        expect($card2After.innerHTML).toEqual(card1HTML);
      });
    });
  });
});
