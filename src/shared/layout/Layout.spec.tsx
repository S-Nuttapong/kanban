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

    it("directs to '/' on 'Home' link click ", () => {
      const { history, queryAllByTestId } = renderWithRouter(() => <Layout />);
      const $link = queryAllByTestId("menuItem-link")[0] as HTMLAnchorElement;
      fireEvent.click($link);
      expect(history.location.pathname).toEqual("/");
    });

    it("directs to '/' on 'Kanban' link click ", () => {
      const { history, queryAllByTestId } = renderWithRouter(() => <Layout />);
      const $link = queryAllByTestId("menuItem-link")[1] as HTMLAnchorElement;
      fireEvent.click($link);
      expect(history.location.pathname).toEqual("/kanban");
    });
  });

  describe("on screen width < 768px", () => {
    const renderMobileLayout = (
      mockOnToggle?: () => void,
      mockSidebar?: boolean
    ) => ({
      ...renderWithRouter(() => (
        <Layout
          mockWidth={767}
          mockOnToggle={mockOnToggle}
          mockSidebar={mockSidebar}
        />
      )),
    });

    it("renders mobile layout", () => {
      const { queryByTestId } = renderMobileLayout();
      expect(queryByTestId("layout-desktop")).toBeFalsy();
      expect(queryByTestId("layout-mobile")).toBeTruthy();
    });

    it("toggles sidebar on 'sidebar-button' click ", () => {
      const mockOnToggle = jest.fn();
      const mockSidebar = false;

      const { queryByTestId } = renderMobileLayout(mockOnToggle);
      const $button = queryByTestId("sidebar-button") as HTMLButtonElement;
      fireEvent.click($button);
      expect(mockOnToggle).toHaveBeenCalledWith(!mockSidebar);
    });

    it("directs to '/' on 'Home' link click ", () => {
      const { history, queryAllByTestId, queryByTestId } = renderMobileLayout();
      const $link = queryAllByTestId("menuItem-link")[0] as HTMLAnchorElement;
      const $button = queryByTestId("sidebar-button") as HTMLButtonElement;
      fireEvent.click($button);
      fireEvent.click($link);
      expect(history.location.pathname).toEqual("/");
    });

    it("directs to '/kanban' on 'Kanban' link click ", () => {
      const { history, queryAllByTestId, queryByTestId } = renderMobileLayout();
      const $link = queryAllByTestId("menuItem-link")[1] as HTMLAnchorElement;
      const $button = queryByTestId("sidebar-button") as HTMLButtonElement;
      fireEvent.click($button);
      fireEvent.click($link);
      expect(history.location.pathname).toEqual("/kanban");
    });
  });
});
