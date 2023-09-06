import styled from "styled-components";

interface IBurgerMenuProps {
  $open?: boolean;
}

export const WrapperBurgerMenu = styled("div")`
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledBurger = styled("div")<IBurgerMenuProps>`
  position: relative;
  width: 24px;
  height: 19px;
  cursor: pointer;
  z-index: 5;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #000;
    transform: translateY(-50%);
    transition: all 0.3s;
    ${(props) =>
      props.$open
        ? "top: 50%; transform: rotate(-45deg);"
        : "top: 100%; transform: rotate(0);"}
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #000;
    transition: all 0.3s;
    ${(props) =>
      props.$open ? "transform: rotate(45deg);" : "transform: rotate(0);"}
  }

  span {
    display: block;
    height: 2px;
    border-radius: 2px;
    background-color: #000;
    transition: all 0.3s;
    ${(props) => (props.$open ? "opacity: 0;" : "opacity: 1;")}
  }
`;
