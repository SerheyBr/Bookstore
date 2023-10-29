import styled from "styled-components";

export const WrapperContent = styled("div")`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000a3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBody = styled("div")`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled("div")`
  position: relative;
  z-index: 4;
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledCloseIkon = styled("button")`
  position: absolute;
  z-index: 4;
  top: 5px;
  right: 5px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
