import React from "react";
import { Home } from "./Home";
import { fireEvent, render } from "@testing-library/react";
import { Wrapper } from "../../testHelper";

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
          expect(dragElement.length).toEqual(1);
          fireEvent.dragStart(dragElement[0]);
          expect(getAllByText("Foo Board").length).toEqual(2);
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
          expect(dragElement.length).toEqual(1);
          fireEvent.dragStart(dragElement[0]);
          expect(getAllByText("Foo Task").length).toEqual(2);
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
});

// const dragAndDrop = (src: Element, dst: Element) => {
//   fireEvent.dragStart(src);
//   fireEvent.dragEnter(dst);
//   fireEvent.drop(dst);
//   fireEvent.dragLeave(dst);
//   fireEvent.dragEnd(src);
// };
