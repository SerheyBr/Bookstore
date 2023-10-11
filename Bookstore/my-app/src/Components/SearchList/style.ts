import styled from "styled-components";

export const WrapperSearchList = styled("ul")`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 500px;
  overflow: auto;
  border: 1px solid #e7e7e7;
  list-style-type: none;
  z-index: 5;
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
