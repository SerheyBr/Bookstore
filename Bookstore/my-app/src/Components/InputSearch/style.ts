import styled from "styled-components";

export const StyledSearchInput = styled("label")`
  position: relative;
  z-index: 3;
  border: 1px solid #e7e7e7;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 20px;
  input {
    width: 100%;
    border: none;
    outline: none;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    height: 32px;
    &::placeholder {
      color: #a8a8a8;
    }
  }
`;

export const WrapperSearchList = styled("div")`
  width: 100%;
  max-width: 542px;
  position: relative;
  z-index: 5;
`;
