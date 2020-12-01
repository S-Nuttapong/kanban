import React from "react";
import { App } from "./App";
import { renderWithRouter, Wrapper } from "./testHelper";

const renderApp = (router?: string) => ({
  ...renderWithRouter(
    () => (
      <Wrapper>
        <App />
      </Wrapper>
    ),
    router
  ),
});

describe("App", () => {
  it("renders correctly", () => {
    const { getByTestId } = renderApp();
    expect(getByTestId("Home")).toBeTruthy();
  });

  describe("Routing", () => {
    it("renders Home page on '/' ", () => {
      const { getByTestId } = renderApp("/");
      expect(getByTestId("Home")).toBeTruthy();
    });

    it("renders Kanban page on '/kanban'", () => {
      const { getByTestId } = renderApp("/kanban");
      expect(getByTestId("newItem-button")).toBeTruthy();
    });
  });
});
