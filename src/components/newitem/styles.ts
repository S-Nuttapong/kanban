import styled, { css } from "styled-components";
import { AddNewItemButtonProps } from "../../interface/IAddNewItem";
import { CardBaseStyle } from "../card/styles";

export const AddNewItemButton = styled.div<AddNewItemButtonProps>`
  color: ${(props) => (props.addTask ? "#000000" : "#ffffff")};
  border-radius: 3px;
  border: none;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: calc(100% - 24px);
  &:hover {
    background-color: ${(props) =>
      props.addTask ? `#ffffffc9;` : `#ffffff52`};
  }
  flex-shrink: 0;
  scroll-snap-align: center;
`;

export const NewItemFormContainer = styled.form<{ isBoard?: boolean }>`
  ${CardBaseStyle}
  padding: 1rem 1rem;
  ${(props) =>
    props.isBoard &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-shrink: 0;
      overflow-x: scroll;
      background: none;
      width: 100%;
      padding: 0;

      div, input, .MuiInputBase-input:focus, .MuiInputBase-input:hover {
        background-color: #fff;
        border-radius: 3px;
      }

      button {
        margin-top: .5rem; 
      }
    `}

  > * {
    margin: 0.25rem 0;
  }

  > button {
    margin-bottom: 0;
  }

  .MuiFormControl-root {
    max-width: 300px;
    width: 100%;
  }


`;

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const ItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  flex-shrink: 0;
  overflow-x: scroll;
`;

export const NewItemInput = styled.input`
  font-size: 1rem;
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: calc(100% - 2rem);

  :focus::placeholder {
    color: #3f51b5;
  }

  :focus {
    outline-color: #3f51b5;
  }
`;
