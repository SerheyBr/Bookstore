import React from "react";
import { LocalMallOutlined } from "@mui/icons-material";
import { StyledCartIcon, CartIconCircle } from "./style";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { SearchActions } from "../../../store/actions/searchActions";

const IconCart = () => {
  const cart = useTypedSelector((state) => state.books.cart);
  const { showListResultSearch } = SearchActions();
  return (
    <StyledCartIcon
      onClick={() => {
        showListResultSearch(false);
      }}
    >
      {cart.length ? <CartIconCircle /> : ""}

      <LocalMallOutlined />
    </StyledCartIcon>
  );
};

export default IconCart;
