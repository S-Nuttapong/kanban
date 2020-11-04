import React from "react";
import { Home } from "./Home";
import { fireEvent, render } from "@testing-library/react";
import { Wrapper } from "../../testHelper";
import { act } from "react-dom/test-utils";

describe("Home", () => {
  describe("with no data", () => {
    const mockAppStore = {
      lists: [],
    };
    it("renders only '+ Add New Board' button", () => {
      const { container } = render(
        <Wrapper appStore={mockAppStore}>
          <Home />
        </Wrapper>
      );
      const innerHTML = container.innerHTML;
      expect(innerHTML).toMatch("+ Add New Board");
    });

    describe("on create new Board", () => {
      it("creates new Board component", () => {
        const { container, getByText, getByRole } = render(
          <Wrapper appStore={mockAppStore}>
            <Home />
          </Wrapper>
        );

        fireEvent.click(getByText("+ Add New Board"));
        fireEvent.change(getByRole("textbox"), {
          target: { value: "Test Board" },
        });
        fireEvent.click(getByText("Create"));
        expect(container.innerHTML).toMatch("Test Board");
        expect(container.innerHTML).toMatch("+ Add New Task");
        expect(container.innerHTML).toMatch("+ Add New Board");
      });
    });
  });

  describe("with data", () => {
    const mockAppStore = {
      lists: [
        { id: "0", text: "Foo Board", tasks: [{ id: "0", text: "Foo Task" }] },
      ],
    };
    it("renders correctly", () => {
      const { container } = render(
        <Wrapper appStore={mockAppStore}>
          <Home />
        </Wrapper>
      );
      const innerHTML = container.innerHTML;
      expect(innerHTML).toMatch("Foo Board");
      expect(innerHTML).toMatch("Foo Task");
      expect(innerHTML).toMatch("+ Add New Task");
      expect(innerHTML).toMatch("+ Add New Board");
    });

    describe("on create new Task", () => {
      it("creates new Card component", () => {
        const { container, getByText, getByRole } = render(
          <Wrapper appStore={mockAppStore}>
            <Home />
          </Wrapper>
        );

        fireEvent.click(getByText("+ Add New Task"));
        fireEvent.change(getByRole("textbox"), {
          target: { value: "Test Task" },
        });
        fireEvent.click(getByText("Create"));
        expect(container.innerHTML).toMatch("Foo Board");
        expect(container.innerHTML).toMatch("Foo Task");
        expect(container.innerHTML).toMatch("Test Task");
        expect(container.innerHTML).toMatch("+ Add New Task");
        expect(container.innerHTML).toMatch("+ Add New Board");
      });
    });
    describe("on drag", () => {
      const mockAppStore = {
        lists: [
          {
            id: "0",
            text: "Foo Board",
            tasks: [{ id: "0", text: "Foo Task" }],
          },
        ],
      };

      describe("drags Board", () => {
        it("toggle CustomPreview component with correct css", () => {
          const { getAllByText } = render(
            <Wrapper appStore={mockAppStore}>
              <Home />
            </Wrapper>
          );

          const dragElement = getAllByText("Foo Board");
          expect(dragElement).toHaveLength(1);
          fireEvent.dragStart(dragElement[0]);
          expect(getAllByText("Foo Board")).toHaveLength(2);
        });
      });

      describe("drags Card", () => {
        it("renders Board with correct css", () => {
          const { queryAllByRole } = render(
            <Wrapper appStore={mockAppStore}>
              <Home />
            </Wrapper>
          );
          const boardDragElement = queryAllByRole("generic")[2];
          expect(boardDragElement).toHaveStyleRule("opacity", "1");
          fireEvent.dragStart(boardDragElement);
          expect(boardDragElement).toHaveStyleRule("opacity", "0");
        });
        it("toggle Custom Card Preview component with correct css", () => {
          const { getAllByText } = render(
            <Wrapper appStore={mockAppStore}>
              <Home />
            </Wrapper>
          );

          const dragElement = getAllByText("Foo Task");
          expect(dragElement).toHaveLength(1);
          fireEvent.dragStart(dragElement[0]);
          expect(getAllByText("Foo Task")).toHaveLength(2);
        });
        it("renders Card with correct css", () => {
          const { queryByText } = render(
            <Wrapper appStore={mockAppStore}>
              <Home />
            </Wrapper>
          );
          const cardDragElement = queryByText("Foo Task") as HTMLDivElement;
          expect(cardDragElement).toHaveStyleRule("opacity", "1");
          fireEvent.dragStart(cardDragElement);
          expect(cardDragElement).toHaveStyleRule("opacity", "0");
        });
      });
    });
  });

  describe("on 'MOVE'", () => {
    const drangAndDrop = (src: Element, dst: Element) => {
      fireEvent.dragStart(src);
      fireEvent.dragEnter(dst);
      fireEvent.drop(dst);
    };

    describe("on 'MOVE_BOARD'", () => {
      const mockAppStore = {
        lists: [
          {
            id: "0",
            text: "Foo Board",
            tasks: [{ id: "0", text: "Foo Task" }],
          },
          {
            id: "1",
            text: "Bar Board",
            tasks: [{ id: "1", text: "Bar Task" }],
          },
        ],
      };
      it("switches Board position", () => {
        const { queryAllByRole } = render(
          <Wrapper appStore={mockAppStore}>
            <Home />
          </Wrapper>
        );

        const dragElement = queryAllByRole("generic");
        const [, , firstBoard, secondBoard] = dragElement.filter((element) =>
          element.querySelector("[draggable=true]")
        );

        act(() => {
          drangAndDrop(firstBoard, secondBoard);
        });

        const dragElementAfter = queryAllByRole("generic");
        const [
          ,
          ,
          firstBoardAfter,
          secondBoardAfter,
        ] = dragElementAfter.filter((element) =>
          element.querySelector("[draggable=true]")
        );

        expect(firstBoardAfter.innerHTML).toEqual(secondBoard.innerHTML);
        expect(secondBoardAfter.innerHTML).toEqual(firstBoard.innerHTML);
      });
    });

    describe("on MOVE_CARD", () => {
      it("can switch Card within the Same Board", () => {
        const mockAppStore = {
          lists: [
            {
              id: "0",
              text: "Foo Board",
              tasks: [
                { id: "0", text: "Foo Task 1" },
                { id: "1", text: "Foo Task 2" },
              ],
            },
          ],
        };
        const { queryAllByRole, getByText } = render(
          <Wrapper appStore={mockAppStore}>
            <Home />
          </Wrapper>
        );

        const divElement = queryAllByRole("generic");
        const [, , Board] = divElement.filter((element) =>
          element.querySelector("[draggable=true]")
        );

        const firstCard = getByText("Foo Task 1");
        const secondCard = getByText("Foo Task 2");

        let stringOrder = Board.innerHTML.match(/Foo Task\s\d+/g) || [];
        expect(stringOrder[0]).toEqual(firstCard.innerHTML);
        expect(stringOrder[1]).toEqual(secondCard.innerHTML);

        act(() => {
          drangAndDrop(firstCard, secondCard);
        });

        stringOrder = Board.innerHTML.match(/Foo Task\s\d+/g) || [];
        expect(stringOrder[0]).toEqual(secondCard.innerHTML);
        expect(stringOrder[1]).toEqual(firstCard.innerHTML);
      });

      it("can move Card to other Board", () => {
        const mockAppStore = {
          lists: [
            {
              id: "0",
              text: "Foo Board",
              tasks: [{ id: "0", text: "Foo Task" }],
            },
            {
              id: "1",
              text: "Bar Board",
              tasks: [{ id: "1", text: "Bar Task" }],
            },
          ],
        };

        const { queryAllByRole, getByText } = render(
          <Wrapper appStore={mockAppStore}>
            <Home />
          </Wrapper>
        );

        const dragElement = queryAllByRole("generic");
        const [, , firstBoard, secondBoard] = dragElement.filter((element) =>
          element.querySelector("[draggable=true]")
        );
        const firstCard = getByText("Foo Task");
        const secondCard = getByText("Bar Task");
        expect(firstBoard.innerHTML).toMatch(firstCard.innerHTML);
        expect(secondBoard.innerHTML).toMatch(secondCard.innerHTML);

        act(() => {
          drangAndDrop(firstCard, secondCard);
        });

        const dragElementAfter = queryAllByRole("generic");
        const [, , secondBoardAfter] = dragElementAfter.filter((element) =>
          element.querySelector("[draggable=true]")
        );
        expect(secondBoardAfter.innerHTML).toMatch(firstCard.innerHTML);
        expect(secondBoardAfter.innerHTML).toMatch(secondCard.innerHTML);
      });

      it("can switch Card Between Boards", () => {
        const mockAppStore = {
          lists: [
            {
              id: "0",
              text: "Foo Board",
              tasks: [{ id: "0", text: "Foo Task" }],
            },
            {
              id: "1",
              text: "Bar Board",
              tasks: [{ id: "1", text: "Bar Task" }],
            },
          ],
        };

        let { queryAllByRole, getByText } = render(
          <Wrapper appStore={mockAppStore}>
            <Home />
          </Wrapper>
        );
        const dragElement = queryAllByRole("generic");
        const [
          ,
          ,
          firstContainer,
          secondContainer,
        ] = dragElement.filter((element) =>
          element.querySelector("[draggable=true]")
        );

        const firstCard = getByText("Foo Task");
        const secondCard = getByText("Bar Task");
        const firstBoard = getByText("Foo Board");
        expect(firstContainer.innerHTML).toMatch(firstCard.innerHTML);
        expect(secondContainer.innerHTML).toMatch(secondCard.innerHTML);

        act(() => {
          drangAndDrop(firstCard, secondCard);
        });

        act(() => {
          drangAndDrop(secondCard, firstBoard);
        });

        const dragElementAfter = queryAllByRole("generic");
        const [
          ,
          ,
          firstContainerAfter,
          secondContainerAfter,
        ] = dragElementAfter.filter((element) =>
          element.querySelector("[draggable=true]")
        );

        expect(firstContainerAfter.innerHTML).toMatch(secondCard.innerHTML);
        expect(secondContainerAfter.innerHTML).toMatch(firstCard.innerHTML);
      });
    });
  });
});
