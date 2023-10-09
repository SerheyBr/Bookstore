import styled from "styled-components";

export const StyledIcons = styled("ul")`
  color: #313037d1;
  display: flex;
  list-style-type: none;

  li {
    cursor: pointer;
    margin-right: 24px;
    transition: all 0.3s;
    &:hover {
      color: #313037;
    }
  }

  button {
    cursor: pointer;
    background-color: inherit;
    border: none;
  }
`;
