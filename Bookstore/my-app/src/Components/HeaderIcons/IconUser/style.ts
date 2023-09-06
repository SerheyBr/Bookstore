import styled from "styled-components";

export const StyledUserIcon = styled("div")`
  width: 24px;
  height: 24px;
  margin: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
