import React from "react";
import { NewItemForm } from "../../../components copy/newitem/NewItemForm";
import { render, fireEvent } from "@testing-library/react";



describe("NewItemForm", () => {
    const onAdd = jest.fn()
    it("renders correctly", () => {
        const { getByRole, getByText } = render(<NewItemForm onAdd={onAdd}/>)
        expect(getByRole("textbox")).toHaveAttribute("value", "")
        expect(getByText("Create")).toBeInTheDocument()

    })
    describe("on 'Create' click with item", () => {
        it("calls passed function with item", () => {
            const { getByRole, getByText } = render(<NewItemForm onAdd={onAdd}/>)
            const input = getByRole("textbox") as HTMLInputElement
            const button = getByText("Create") as HTMLButtonElement
            fireEvent.change(input, {target: {value: "test"}})
            expect(input.value).toEqual("test")
            fireEvent.click(button)
            expect(onAdd).toHaveBeenCalledWith(input.value)
        })
    })
    
})