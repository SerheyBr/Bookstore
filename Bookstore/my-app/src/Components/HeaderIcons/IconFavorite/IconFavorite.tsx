import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { StyledFavoriteIcon, FavoriteIconCircle } from "./style";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { SearchActions } from "../../../store/actions/searchActions";

const IconFavorite = () => {
  const favoritesBooks = useTypedSelector((state) => state.books.favorites);
  const { showListResultSearch } = SearchActions();
  return (
    <StyledFavoriteIcon
      onClick={() => {
        showListResultSearch(false);
      }}
    >
      {favoritesBooks.length ? (
        <FavoriteIconCircle>
          <p>{favoritesBooks.length}</p>
        </FavoriteIconCircle>
      ) : (
        ""
      )}
      <FavoriteBorder />
    </StyledFavoriteIcon>
  );
};

export default IconFavorite;
