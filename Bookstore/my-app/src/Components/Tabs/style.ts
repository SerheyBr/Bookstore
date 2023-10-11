import styled from "styled-components";

export const StyledTitlesTabs = styled("ul")`
  display: flex;
  list-style-type: none;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 48px;

  @media (max-width: 400px) {
    overflow-y: auto;
  }
  li {
    position: relative;
    cursor: pointer;
    padding: 0 40px 24px 40px;

    @media (max-width: 769px) {
      padding: 0 20px 24px 20px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 2px;
      width: 100%;
      transition: all 0.4s;
    }
    &:hover::after {
      background-color: #00000047;
    }
    &.active::after {
      background-color: #000;
    }
  }
`;
