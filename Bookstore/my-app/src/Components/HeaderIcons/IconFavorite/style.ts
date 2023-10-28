import styled from "styled-components";

export const StyledFavoriteIcon = styled("div")`
  width: 40px;
  height: 40px;
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
  height: 15px;
  width: 15px;
  background-color: #fc857f;
  border-radius: 35%;
  position: absolute;
  top: 0px;
  left: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 10px;
  }
`;
