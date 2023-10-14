import React, { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import CardInCart from "../../Components/CardInCart/CardInCart";
import { IBook } from "../../types/types";
import { StuledList, WrapperTitle } from "./style";
import InfoCart from "../../Components/InfoCart/InfoCart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import { api } from "../../api/api";

const CartPage = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  useEffect(() => {
    api.getNewReleases().then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your cart"} />
      </WrapperTitle>
      {books ? (
        <>
          <StuledList>
            {books.map((book) => (
              <li key={book.isbn13}>
                <CardInCart book={book} />
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
