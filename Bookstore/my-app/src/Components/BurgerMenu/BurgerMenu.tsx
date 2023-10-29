import React, { FC } from "react";
import { StyledBurgerMenu, StyledInput, StyledBtn } from "./style";
import InputSearch from "../InputSearch/InputSearch";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { BurgerMenuActions } from "../../store/actions/burgerMenuActions";

interface IBurgerMenuProps {
  $open?: boolean;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ $open }) => {
  const { showBurgerMtnu } = BurgerMenuActions();

  const handlerLink = () => {
    showBurgerMtnu(false);
    document.body.style.overflow = "visible";
  };

  return (
    <StyledBurgerMenu $open={$open}>
      <StyledInput>
        <InputSearch />
      </StyledInput>
      <h3>
        <Link
          to={"/"}
          onClick={() => {
            handlerLink();
          }}
        >
          Main
        </Link>
      </h3>
      <h3>
        <Link
          to={"/Favorites"}
          onClick={() => {
            handlerLink();
          }}
        >
          Favorites
        </Link>
      </h3>
      <h3>
        <Link
          to={"/Cart"}
          onClick={() => {
            handlerLink();
          }}
        >
          Cart
        </Link>
      </h3>
      <h3>
        <Link
          to={"/Account"}
          onClick={() => {
            handlerLink();
          }}
        >
          Account
        </Link>
      </h3>
      <StyledBtn>
        <Link
          to={"/SignUpSignIn"}
          onClick={() => {
            handlerLink();
          }}
        >
          <CustomButton
            title={"log out"}
            typebtn={"fill"}
            onClick={() => {
              handlerLink();
            }}
          />
        </Link>
      </StyledBtn>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
