import styled from "styled-components";

export const WrapperCard = styled("div")`
  display: flex;
  align-items: center;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled("div")`
  position: relative;
  background-color: #d7e4fd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  div {
    width: 163px;
    height: 190px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 580px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyledTitle = styled("h3")`
  color: #313037;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 8px;
`;

export const StyledSubtitle = styled("p")`
  color: #a8a8a8;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
`;

export const WrapperCount = styled("div")`
  display: flex;
  align-items: center;
  button,
  p {
    color: #313037;
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    padding: 16px;
  }
`;

export const StyledButton = styled("button")`
  cursor: pointer;
  border: none;
  background: inherit;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background-color: #e7e7e7;
  }
  &:active {
    background-color: #c7bbbba3;
  }
`;

export const StyledPrice = styled("p")`
  color: #313037;
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  margin-left: auto;
  margin-right: 130px;
`;

const StyledIconFavorite = styled("button")`
  cursor: pointer;
  border: none;
  background: none;
  color: red;
  transition: all 0.3s;
  padding: 16px;
  &:hover {
    color: #ff000057;
  }
`;

export const StyledIconFavoriteDesk = styled(StyledIconFavorite)`
  margin-left: auto;
  @media (max-width: 580px) {
    display: none;
  }
`;

export const StyledIconFavoriteMobile = styled(StyledIconFavorite)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #313037;
  @media (min-width: 580px) {
    display: none;
  }
`;
