import React from "react";
import { App } from "./App";
import { renderWithRouter, Wrapper } from "./testHelper";

jest.mock("./pages/home/Home", () => ({ Home: () => <div>Home</div> }));
jest.mock("./pages/kanban/Kanban", () => ({ Kanban: () => <div>Kanban</div> }));

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
    const { container } = renderApp();
    expect(container.innerHTML).toMatch("Home");
  });

  describe("Routing", () => {
    it("renders Home page on '/' ", () => {
      const { container } = renderApp("/");
      expect(container.innerHTML).toMatch("Home");
    });

    it("renders Kanban page on '/kanban'", () => {
      const { container } = renderApp("/kanban");
      expect(container.innerHTML).toMatch("Kanban");
    });
  });
});
