import React, { FC } from "react";
import { StyledBurgerMenu, StyledInput, StyledBtn } from "./style";
import InputSearch from "../InputSearch/InputSearch";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

interface IBurgerMenuProps {
  $open?: boolean;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ $open }) => {
  return (
    <StyledBurgerMenu $open={$open}>
      <StyledInput>
        <InputSearch />
      </StyledInput>
      <h3>
        <Link to={"/Favorites"}>Favorites</Link>
      </h3>
      <h3>
        <Link to={"/Cart"}>Cart</Link>
      </h3>
      <StyledBtn>
        <Link to={"/SignUpSignIn"}>
          <CustomButton title={"log out"} typebtn={"fill"} />
        </Link>
      </StyledBtn>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
