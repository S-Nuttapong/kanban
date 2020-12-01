import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../testHelper";
import { Home } from "./Home";

const renderHome = () => ({
  ...renderWithRouter(() => <Home />),
});

describe.only("Home", () => {
  it("renders correctly", () => {
    const { getByTestId } = renderHome();
    expect(getByTestId("home-banner").innerHTML).toMatch("San-Kanban");
    expect(getByTestId("home-button").innerHTML).toMatch("View Boards");
  });

  it("directs to 'Kanban' on 'View Board' click", () => {
    const { history, getByTestId } = renderHome();
    const $button = getByTestId("home-button");
    fireEvent.click($button);
    expect(history.location.pathname).toEqual("/kanban")
  });
});
