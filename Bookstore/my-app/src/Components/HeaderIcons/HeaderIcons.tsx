import React from "react";
import IconCart from "./IconCart/IconCart";
import IconFavorite from "./IconFavorite/IconFavorite";
import IconUser from "./IconUser/IconUser";
import Burger from "../Burger/Burger";
import { WrapperIcons } from "./style";
import { Link } from "react-router-dom";

const HeaderIcons = () => {
  return (
    <WrapperIcons>
      <Link to={"/Favorites"}>
        <IconFavorite />
      </Link>
      <Link to={"/Cart"}>
        <IconCart />
      </Link>
      <Link to={"/Account"}>
        <IconUser />
      </Link>
      <Burger />
    </WrapperIcons>
  );
};

export default HeaderIcons;
