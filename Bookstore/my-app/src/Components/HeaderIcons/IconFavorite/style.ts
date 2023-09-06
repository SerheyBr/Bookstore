import styled from "styled-components";

export const StyledFavoriteIcon = styled("div")`
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

export const FavoriteIconCircle = styled("div")`
  height: 8px;
  width: 8px;
  background-color: #fc857f;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 16px;
`;
