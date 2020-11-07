import styled from "styled-components";
import { CustomDragProps } from "../../interface/ICustomPreview";

export const CustomDragContainer = styled.div<CustomDragProps>`
  opacity: ${(props) => (props.isHidden ? `0` : `1`)};
  transform: ${(props) => (props.cardPreview ? `rotate(5deg)` : "none")};

`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
