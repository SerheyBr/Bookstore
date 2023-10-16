import React, { useEffect, useState } from "react";
import { IBook } from "../../types/types";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import { StuledList, WrapperTitle } from "./style";
import Title from "../../Components/Title/Title";
import CardInFavorites from "../../Components/CardInFavorites/CardInFavorites";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FavoritesPage = () => {
  const favoritesBooks = useTypedSelector((state) => state.books.favorites);

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your favorites"} />
      </WrapperTitle>

      <StuledList>
        {favoritesBooks.length
          ? favoritesBooks.map((el) => (
              <li key={el.isbn13}>
                <CardInFavorites book={el} />
              </li>
            ))
          : "В избранном нет книг"}
      </StuledList>
      <ProductCarousel title={"Popular Books"} />
    </div>
  );
};

export default FavoritesPage;
