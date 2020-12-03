import React from "react";
import { fireEvent, render, act } from "@testing-library/react";
import { Board } from "./Board";
import { Wrapper } from "../../testHelper";
import { Task } from "../../interface/IAppStateReducer";

const renderBoard = (tasks: Task[] = []) => {
  const mockBoardData = {
    id: "0",
    text: "Board 1",
  };

  const mockAppStore = {
    lists: [
      {
        ...mockBoardData,
        tasks: tasks,
      },
    ],
  };
  return {
    ...render(
      <Wrapper appStore={mockAppStore}>
        <Board {...mockBoardData} index={0} />
      </Wrapper>
    ),
  };
};

describe("Board", () => {
  const getTask = () => [
    { id: "0", text: "Card 1" },
    { id: "1", text: "Card 2" },
    { id: "2", text: "Card 3" },
  ];

  it("renders correctly", () => {
    const tasks = getTask()
    const { getByTestId } = renderBoard(tasks);
    const $board = getByTestId("board-container");
    const $cards = $board.querySelectorAll("[data-testid=card-container]");

    expect($board.innerHTML).toMatch("Board 1");
    $cards.forEach(($card, i) => {
      expect($card.innerHTML).toMatch(tasks[i].text);
    });
    expect($board.querySelector("[data-testid=newCard-button]")).toBeTruthy();
  });

  describe("on create", () => {
    it("creates new Card on 'Create' click", async () => {
      const cardTitle = "testCard";
      const { queryByTestId } = renderBoard();
      const $button = queryByTestId("newCard-button") as HTMLButtonElement;

      fireEvent.click($button);
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

    it("does not create new Card on 'Cancel' click", () => {
      const { queryByTestId, queryByText } = renderBoard();

      fireEvent.click(queryByTestId("newCard-button") as HTMLButtonElement);
      expect(queryByTestId("newItem-form")).toBeTruthy();

      fireEvent.click(queryByTestId("cancel-button") as HTMLButtonElement);
      fireEvent.click(queryByText("OK") as HTMLButtonElement);

      expect(queryByTestId("newItem-form")).toBeFalsy();
      expect(queryByTestId("card-container")).toBeFalsy();
    });

    it("prevents creating new card with no title", async () => {
      const { queryByTestId } = renderBoard();

      fireEvent.click(queryByTestId("newCard-button") as HTMLButtonElement);
      expect(queryByTestId("newItem-form")).toBeTruthy();

      await act(async () => {
        fireEvent.submit(queryByTestId("submit-button") as HTMLButtonElement);
      });

      expect(queryByTestId("newItem-form")).toBeTruthy();
      expect(queryByTestId("card-container")).toBeFalsy();
    });
  });

  describe("on delete", () => {
    it("deletes Card on 'delete Card' click", () => {
      const { queryAllByTestId, queryByText } = renderBoard(getTask());
      const $cards = queryAllByTestId("card-container") as HTMLDivElement[];
      expect($cards).toHaveLength(3);

      fireEvent.click(
        $cards[0].querySelector("[aria-label=delete]") as HTMLButtonElement
      );

      fireEvent.click(queryByText("OK") as HTMLButtonElement);

      expect(
        queryAllByTestId("card-container") as HTMLDivElement[]
      ).toHaveLength(2);

      fireEvent.click(
        $cards[1].querySelector("[aria-label=delete]") as HTMLButtonElement
      );

      fireEvent.click(queryByText("OK") as HTMLButtonElement);
      const $cardsFinal = queryAllByTestId(
        "card-container"
      ) as HTMLDivElement[];

      expect($cardsFinal).toHaveLength(1);
      expect($cardsFinal[0].innerHTML).toMatch("Card 3");
    });

    it("deletes Board on 'delete Board' click", () => {
      const { queryByTestId, queryByText } = renderBoard(getTask());
      const $board = queryByTestId("board-container") as HTMLDivElement;
      expect($board).toBeTruthy();
      expect(
        $board.querySelectorAll("[data-testid=card-container]")
      ).toHaveLength(3);

      act(() => {
        fireEvent.click(
          $board.querySelector("[aria-label=delete]") as HTMLButtonElement
        );
      });

      fireEvent.click(queryByText("OK") as HTMLButtonElement);
      expect(queryByTestId("board-container")).toBeFalsy();
    });
  });
});
