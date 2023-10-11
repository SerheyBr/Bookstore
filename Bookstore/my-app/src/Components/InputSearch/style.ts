import styled from "styled-components";

export const StyledSearchInput = styled("label")`
  border: 1px solid #e7e7e7;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 20px;
  input {
    border: none;
    outline: none;
    color: #a8a8a8;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    height: 32px;
  }
`;

export const WrapperSearchList = styled("div")`
  width: 100%;
  max-width: 542px;
  position: relative;
`;

export const SearchList = styled("ul")`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  border: 1px solid #e7e7e7;
  list-style-type: none;
  z-index: 1;
  @media (max-width: 765px) {
    max-height: 200px;
  }
  li {
    padding: 20px;
    border-bottom: 1px solid#e7e7e7;
    background-color: #fff;
    transition: all 0.3s;
    cursor: pointer;

    @media (max-width: 765px) {
      padding: 5px;
    }
  }
  li:hover {
    background-color: #f5f5f5;
  }
`;
