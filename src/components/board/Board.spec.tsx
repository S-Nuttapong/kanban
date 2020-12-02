import React from "react";
import { render } from "@testing-library/react";
import { Board } from "./Board";
import { Wrapper } from "../../testHelper";

describe("Board", () => {
  it("renders correctly", () => {
    const mockBoardData = {
      id: "0",
      text: "Foo Board",
    };

    const mockAppStore = {
      lists: [
        {
          ...mockBoardData,
          tasks: [{ id: "0", text: "Foo Card" }],
        },
      ],
    };

    const { container } = render(
      <Wrapper appStore={mockAppStore}>
        <Board {...mockBoardData} index={0} />
      </Wrapper>
    );
    expect(container.innerHTML).toMatch("Foo Board");
    expect(container.innerHTML).toMatch("Foo Card");
    expect(container.innerHTML).toMatch("+ Add New Task");
  });
});
