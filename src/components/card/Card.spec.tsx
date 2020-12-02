import React from "react";
import { Card } from "../../../components copy/card/Card";
import { render } from "@testing-library/react";
import { Wrapper } from "../../testHelper";

describe("Card", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Wrapper>
        <Card id="0" text="Foo Card" boardIndex={0} index={0} />
      </Wrapper>
    );
    expect(container.innerHTML).toMatch("Foo Card");
  });
});
