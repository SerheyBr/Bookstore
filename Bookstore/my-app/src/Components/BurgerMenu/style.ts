import styled from "styled-components";

interface IBurgerMenuProps {
  $open?: boolean;
}

export const StyledBurgerMenu = styled("div")<IBurgerMenuProps>`
  position: absolute;
  top: -36px;
  left: -351px;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  transition: all 0.3s;
  flex-direction: column;
  align-items: center;
  padding-bottom: 56px;
  ${(props) => (props.$open ? "display: flex" : "display: none")};

  h3 {
    color: #313037;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    text-transform: uppercase;
    margin-bottom: 50px;
    cursor: pointer;
  }

  @media (max-width: 550px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

export const StyledInput = styled("div")<IBurgerMenuProps>`
  border-top: 1px solid #e7e7e7;
  padding-top: 56px;
  margin-top: 80px;
  margin-bottom: 48px;
  max-width: 287px;
`;

export const StyledBtn = styled("div")`
  width: 288px;
  height: 56px;
  margin-top: auto;
`;
