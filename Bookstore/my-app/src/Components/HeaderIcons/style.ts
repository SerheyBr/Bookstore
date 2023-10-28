import styled from "styled-components";

export const WrapperIcons = styled("div")`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover svg {
    color: #7d0d0d94;
  }
  svg {
    transition: all 0.3s;
    width: 100%;
    height: 100%;
  }
`;
