import React, { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import CardInCart from "../../Components/CardInCart/CardInCart";
import { IBook } from "../../types/types";
import {
  StuleCartImg,
  StuledList,
  WrapperTitle,
  WrapperCartImg,
} from "./style";
import InfoCart from "../../Components/InfoCart/InfoCart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import { api } from "../../api/api";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { saveLocalStorageArray } from "../../utilits/helpers";

const CartPage = () => {
  const cartBooks = useTypedSelector((state) => state.books.cart);

  useEffect(() => {
    console.log(cartBooks);
    saveLocalStorageArray(cartBooks, "cart");
  }, [cartBooks]);

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your cart"} />
      </WrapperTitle>
      {cartBooks.length ? (
        <>
          <StuledList>
            {cartBooks.map((cartBooks) => (
              <li key={cartBooks.isbn13}>
                <CardInCart book={cartBooks} />
              </li>
            ))}
          </StuledList>
          <InfoCart />
        </>
      ) : (
        <WrapperCartImg>
          <StuleCartImg>
            <ShoppingCartOutlinedIcon />
            <p>empty cart</p>
          </StuleCartImg>
        </WrapperCartImg>
      )}
    </div>
  );
};

export default CartPage;
