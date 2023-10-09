import React, { FC } from "react";
import { StyledBurgerMenu, StyledInput, StyledBtn } from "./style";
import InputSearch from "../InputSearch/InputSearch";
import CustomButton from "../CustomButton/CustomButton";

interface IBurgerMenuProps {
  $open?: boolean;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ $open }) => {
  return (
    <StyledBurgerMenu $open={$open}>
      <StyledInput>
        <InputSearch />
      </StyledInput>
      <h3>Favorites</h3>
      <h3>Cart</h3>
      <StyledBtn>
        <CustomButton title={"log out"} typebtn={"fill"} />
      </StyledBtn>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
