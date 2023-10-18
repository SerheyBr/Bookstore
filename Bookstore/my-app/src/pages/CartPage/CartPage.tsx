import React, { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import CardInCart from "../../Components/CardInCart/CardInCart";
import { IBook } from "../../types/types";
import { StuledList, WrapperTitle } from "./style";
import InfoCart from "../../Components/InfoCart/InfoCart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import { api } from "../../api/api";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CartPage = () => {
  const cartBooks = useTypedSelector((state) => state.books.cart);

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
        "Корзина пустая"
      )}
    </div>
  );
};

export default CartPage;
