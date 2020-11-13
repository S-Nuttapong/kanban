import styled, { css } from "styled-components";

const buttonBaseStyle = css`
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const Button = styled.button`
  ${buttonBaseStyle}
`;

export const CanCelButton = styled(Button)`
  background-color: red;
`;
