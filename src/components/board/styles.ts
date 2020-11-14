import styled from "styled-components";
import { CustomDragContainer } from "../preview/styles";

export const BoardContainer = styled(CustomDragContainer)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  max-height: 90%;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-shrink: 0;
  z-index: 10;
  overflow-y: scroll;

`;

export const BoardTitle = styled.div`
  padding: 16px 12px;
  font-weight: bold;
  line-break: anywhere;

`;

