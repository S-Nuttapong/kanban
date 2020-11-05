import styled from "styled-components";
import { AddNewItemButtonProps } from "../../interface/IAddNewItem";

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

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  flex-shrink: 0;
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

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: calc(100% - 2rem);
`;
