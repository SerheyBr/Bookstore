import React, { FC, useState } from "react";
import { StyledBurger, WrapperBurgerMenu } from "./style";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

interface IBurgerMenuProps {
  $open?: boolean;
}

const Burger: FC<IBurgerMenuProps> = ({ $open }) => {
  const [isOpen, setIsOpen] = useState(false);

  const body = document.body;

  const toggleBurger = () => {
    setIsOpen((prevState) => (prevState === false ? true : false));
    isOpen
      ? (body.style.background = "inherit")
      : (body.style.background = "rgba(49, 48, 55, 0.50)");
  };

  return (
    <WrapperBurgerMenu>
      <StyledBurger $open={isOpen} onClick={toggleBurger}>
        <span></span>
      </StyledBurger>
      <BurgerMenu $open={isOpen} />
    </WrapperBurgerMenu>
  );
};

export default Burger;
