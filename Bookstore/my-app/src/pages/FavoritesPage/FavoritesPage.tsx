import React, { useEffect, useState } from "react";
import { IBook } from "../../types/types";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import { StuledList, WrapperTitle } from "./style";
import Title from "../../Components/Title/Title";
import CardInFavorites from "../../Components/CardInFavorites/CardInFavorites";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";

const FavoritesPage = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  const getCards = async () => {
    return await fetch("https://api.itbook.store/1.0/books/9781782166283", {
      mode: "cors",
    });
  };

  useEffect(() => {
    getCards()
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your cart"} />
      </WrapperTitle>

      <StuledList>
        {books ? (
          <>
            <li>
              <CardInFavorites book={books} />
            </li>
            <li>
              <CardInFavorites book={books} />
            </li>
            <li>
              <CardInFavorites book={books} />
            </li>
            <li>
              <CardInFavorites book={books} />
            </li>
          </>
        ) : (
          "В избранном нет книг"
        )}
      </StuledList>
      <ProductCarousel title={"Popular Books"} />
    </div>
  );
};

export default FavoritesPage;
