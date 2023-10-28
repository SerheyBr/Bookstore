import React from "react";
import IconCart from "./IconCart/IconCart";
import IconFavorite from "./IconFavorite/IconFavorite";
import IconUser from "./IconUser/IconUser";
import Burger from "../Burger/Burger";
import { WrapperIcons, StyledIcon } from "./style";
import { Link } from "react-router-dom";

const HeaderIcons = () => {
  return (
    <WrapperIcons>
      <Link to={"/Favorites"}>
        <StyledIcon>
          <IconFavorite />
        </StyledIcon>
      </Link>
      <Link to={"/Cart"}>
        <StyledIcon>
          <IconCart />
        </StyledIcon>
      </Link>
      <Link to={"/Account"}>
        <StyledIcon>
          <IconUser />
        </StyledIcon>
      </Link>
      <Burger />
    </WrapperIcons>
  );
};

export default HeaderIcons;
