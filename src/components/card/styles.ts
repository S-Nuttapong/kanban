import styled, { css } from "styled-components";
import { CustomDragContainer } from "../preview/styles";

export const CardBaseStyle = css`
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

export const CardContainer = styled(CustomDragContainer)`
  ${CardBaseStyle}
  cursor: pointer;
  line-break: anywhere;
`;
