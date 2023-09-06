import React from "react";
import { LocalMallOutlined } from "@mui/icons-material";
import { StyledCartIcon, CartIconCircle } from "./style";

const IconCart = () => {
  return (
    <StyledCartIcon>
      <CartIconCircle />
      <LocalMallOutlined />
    </StyledCartIcon>
  );
};

export default IconCart;
