import React from "react";
import { renderWithRouter } from "../../testHelper";
import { MenuItem } from "../navbar/Navbar";
import { fireEvent } from "@testing-library/react";

const items = [
  {
    title: "testItem1",
    path: "/testItem1",
  },
  {
    title: "testItem2",
    path: "/testItem2",
  },
  {
    title: "testItem3",
    path: "/testItem3",
  },
];

const renderMenuItem = () => ({
  ...renderWithRouter(() => <MenuItem items={items} />),
});

describe("MenuItem", () => {
  it("renders correctly", () => {
    const { queryAllByRole, queryAllByTestId } = renderMenuItem();
    expect(queryAllByTestId("menuItem-link")).toHaveLength(3);
    expect(queryAllByRole("link")).toHaveLength(4);
  });

  it("directs to correct  on link click", () => {
    const { history, queryAllByTestId } = renderMenuItem();
    const [$link1, $link2, $link3] = queryAllByTestId("menuItem-link");

    fireEvent.click($link1);
    expect(history.location.pathname).toEqual("/testItem1");

    fireEvent.click($link2);
    expect(history.location.pathname).toEqual("/testItem2");

    fireEvent.click($link3);
    expect(history.location.pathname).toEqual("/testItem3");
  });
});
