import React, { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import CardInCart from "../../Components/CardInCart/CardInCart";
import { IBook } from "../../types/types";
import { StuledList, WrapperTitle } from "./style";
import InfoCart from "../../Components/InfoCart/InfoCart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";

const CartPage = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  const getCards = async () => {
    return await fetch("https://api.itbook.store/1.0/new", {
      mode: "cors",
    });
  };

  useEffect(() => {
    getCards()
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your cart"} />
      </WrapperTitle>

      <StuledList>
        {books
          ? books.map((book) => (
              <li>
                <CardInCart book={book} />
              </li>
            ))
          : "Корзина пустая"}
      </StuledList>
      <InfoCart />
    </div>
  );
};

export default CartPage;
