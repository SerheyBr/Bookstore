import React from "react";
import IconCart from "./IconCart/IconCart";
import IconFavorite from "./IconFavorite/IconFavorite";
import IconUser from "./IconUser/IconUser";
import Burger from "../Burger/Burger";
import { WrapperIcons } from "./style";

const HeaderIcons = () => {
  return (
    <WrapperIcons>
      <IconFavorite />
      <IconCart />
      <IconUser />
      <Burger />
    </WrapperIcons>
  );
};

export default HeaderIcons;
