import React from "react";
import { Layout } from "./Layout";
import { renderWithRouter } from "../../testHelper";
import { fireEvent } from "@testing-library/react";


describe("Layout", () => {
  describe("on screen width > 768px", () => {
    it("renders desktop layout", () => {
      const { queryByTestId } = renderWithRouter(() => <Layout />);
      expect(queryByTestId("layout-desktop")).toBeTruthy();
    expect(queryByTestId("layout-mobile")).toBeFalsy();
    });

    it("redirects to '/' on 'Home-link' click ", () => {
      const { history, queryByTestId } = renderWithRouter(() => <Layout />);
      const $link = queryByTestId("Home-link") as HTMLAnchorElement;
      fireEvent.click($link);
      expect(history.location.pathname).toEqual("/");
    });
  });

  describe("on screen width < 768px", () => {
    const renderMobileLayout = () => ({
      ...renderWithRouter(() => <Layout mockWidth={767} />),
    });


    it("renders mobile layout", () => {
      const { queryByTestId } = renderMobileLayout();
      expect(queryByTestId("layout-desktop")).toBeFalsy();
      expect(queryByTestId("layout-mobile")).toBeTruthy();
    });

    it.todo("toggles sidebar on 'sidebar-button' click ", () => {
      const { queryByTestId } = renderMobileLayout();
      const $button = queryByTestId("sidebar-button") as HTMLButtonElement
      fireEvent.click($button)
    });

    it.todo("redirects to '/' on 'Kanban-link' click ", () => {
      const { history, queryByTestId } = renderMobileLayout();
      const $link = queryByTestId("Kanban-link") as HTMLAnchorElement;
      fireEvent.click($link);
      expect(history.location.pathname).toEqual("/kanban");
    });
  });
});
