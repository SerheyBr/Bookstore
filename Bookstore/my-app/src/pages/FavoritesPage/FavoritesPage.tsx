import React, { useEffect, useState } from "react";
import ArrowBackPage from "../../Components/ArrowGoHome/ArrowGoHome";
import { StuleCartImg, StuledList, WrapperTitle } from "./style";
import Title from "../../Components/Title/Title";
import CardInFavorites from "../../Components/CardInFavorites/CardInFavorites";
import ProductCarousel from "../../Components/ProductCarousel/ProductCarousel";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { WrapperCartImg } from "../CartPage/style";
import { saveLocalStorageArray } from "../../utilits/helpers";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import { IBook } from "../../types/types";

const FavoritesPage = () => {
  const favoritesBooks = useTypedSelector((state) => state.books.favorites);

  useEffect(() => {
    saveLocalStorageArray(favoritesBooks, "favorites");
  }, [favoritesBooks]);

  const handlerPaginations = (arr: IBook[]) => {
    return arr.length / 5;
  };

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your favorites"} />
      </WrapperTitle>

      <StuledList>
        {favoritesBooks.length ? (
          favoritesBooks.map((el) => (
            <li key={el.isbn13}>
              <CardInFavorites book={el} />
            </li>
          ))
        ) : (
          <WrapperCartImg>
            <StuleCartImg>
              <FavoriteIcon />
              <p>no favorite products</p>
            </StuleCartImg>
          </WrapperCartImg>
        )}
      </StuledList>
      <ProductCarousel title={"Popular Books"} />
    </div>
  );
};

export default FavoritesPage;
