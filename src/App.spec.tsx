import React from "react";
import { App } from "./App";
import { renderWithRouter} from "./testHelper";

describe("App", () => {
  it("renders correctly", () => {
    const { getByTestId } = renderWithRouter(() => <App />);
    expect(getByTestId('Home')).toBeTruthy()
  });

  describe("Routing", () => {
    it("renders Home page on '/' ", () => {
      const { getByTestId } = renderWithRouter(() => <App />);
      expect(getByTestId('Home')).toBeTruthy()
    });

    it("renders Kanban page on '/kanban'", () => {
      const { container } = renderWithRouter(() => <App />, "/kanban");
      console.log(container.innerHTML);
    });
  });
});
