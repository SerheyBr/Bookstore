import React, { FC, useEffect, useState } from "react";
import { StyledBurger, WrapperBurgerMenu } from "./style";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BurgerMenuActions } from "../../store/actions/burgerMenuActions";

interface IBurgerMenuProps {
  $open?: boolean;
}

const Burger: FC<IBurgerMenuProps> = ({ $open }) => {
  const { showBurgerMtnu } = BurgerMenuActions();
  const isOpenBurgerMenu = useTypedSelector(
    (state) => state.burgerMenu.isShowMenu
  );

  const toggleBurger = () => {
    if (isOpenBurgerMenu) {
      showBurgerMtnu(false);
      document.body.style.overflow = "visible";
    } else {
      showBurgerMtnu(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <WrapperBurgerMenu>
      <StyledBurger $open={isOpenBurgerMenu} onClick={toggleBurger}>
        <span></span>
      </StyledBurger>
      <BurgerMenu $open={isOpenBurgerMenu} />
    </WrapperBurgerMenu>
  );
};

export default Burger;
