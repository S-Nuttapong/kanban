import React from "react";
import { AddNewItem } from "./AddNewItem";
import { render, fireEvent } from "@testing-library/react";

describe("AddNewItem", () => {
  const testText = "+ Add Foo";
  const onAdd = () => {};
  it("renders correctly", () => {
    const { container } = render(<AddNewItem text={testText} onAdd={onAdd} />);
    expect(container.innerHTML).toMatch(testText);
  });

  describe("on AddNewItemButton click", () => {
    it("toggles NewItemForm", () => {
      const { container, getByText } = render(
        <AddNewItem text={testText} onAdd={onAdd} />
      );
      fireEvent.click(getByText(testText));
      expect(container.innerHTML).toMatch("Create");
    });
  });

  describe("on 'Create' click", () => {
    it("toggles AddNewItemButton", () => {
      const { container, getByText } = render(
        <AddNewItem text={testText} onAdd={onAdd} initShowForm={true} />
      );
      expect(container.innerHTML).toMatch("Create");
      fireEvent.click(getByText("Create"));
      expect(container.innerHTML).toMatch("+ Add Foo");
    });
  });
});
