import React from "react";
import { LocalMallOutlined } from "@mui/icons-material";
import { StyledCartIcon, CartIconCircle } from "./style";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const IconCart = () => {
  const cart = useTypedSelector((state) => state.books.cart);
  return (
    <StyledCartIcon>
      {cart.length ? <CartIconCircle /> : ""}

      <LocalMallOutlined />
    </StyledCartIcon>
  );
};

export default IconCart;
