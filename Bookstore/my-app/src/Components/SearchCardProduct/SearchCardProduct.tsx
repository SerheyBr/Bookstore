import React, { FC, useEffect, useState } from "react";
import {
  StyledImg,
  StyledLikeBtn,
  StyledNotLikeBtn,
  StyledTitle,
  WrapperCardSearch,
} from "./style";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import { SearchActions } from "../../store/actions/searchActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BooksActions } from "../../store/actions/booksActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { findElementFromArray } from "../../utilits/helpers";

interface IBook {
  book: any;
}

const SearchCardProduct: FC<IBook> = ({ book }) => {
  const favorites = useTypedSelector((state) => state.books.favorites);
  const { removeFromFavoritesBooks, addToFavoriteBooks } = BooksActions();
  const { showListResultSearch } = SearchActions();
  const isShowSearchList = useTypedSelector((state) => state.search.showList);

  const handlerBtnAddFavorites = () => {};

  console.log(isShowSearchList);
  return (
    <Link to={`/Book/${book.isbn13}`}>
      <WrapperCardSearch onClick={() => showListResultSearch(false)}>
        {/* {findElementFromArray(favorites, book) ? (
          <StyledLikeBtn
            onClick={(event) => {
              showListResultSearch(true);
              removeFromFavoritesBooks(book);
            }}
          >
            <FavoriteIcon />
          </StyledLikeBtn>
        ) : (
          <StyledNotLikeBtn
            onClick={(event) => {
              addToFavoriteBooks(book);
              showListResultSearch(true);
            }}
          >
            <FavoriteBorderIcon />
          </StyledNotLikeBtn>
        )} */}
        <StyledImg>
          <div>
            <img src={book.image} />
          </div>
        </StyledImg>
        <StyledTitle>{book.title}</StyledTitle>
      </WrapperCardSearch>
    </Link>
  );
};

export default SearchCardProduct;
