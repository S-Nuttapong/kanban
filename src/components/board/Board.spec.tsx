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
    const mockUseAppState = () => ({
      state: {
        lists: [
          {
            ...mockBoardData,
            tasks: [{ id: "0", text: "Foo Card" }],
          },
        ],
        dispatch: undefined
      },
    });
    const { container } = render(
      <Wrapper>
        <Board {...mockBoardData} index={0} useAppStateHook={mockUseAppState} />
      </Wrapper>
    );
    expect(container.innerHTML).toMatch("Foo Board");
    expect(container.innerHTML).toMatch("Foo Card");
    expect(container.innerHTML).toMatch("+ Add New Task");
  });
});
