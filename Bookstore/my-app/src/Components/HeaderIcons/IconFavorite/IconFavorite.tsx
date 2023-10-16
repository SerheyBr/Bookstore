import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { StyledFavoriteIcon, FavoriteIconCircle } from "./style";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const IconFavorite = () => {
  const favoritesBooks = useTypedSelector((state) => state.books.favorites);

  return (
    <StyledFavoriteIcon>
      {favoritesBooks.length ? <FavoriteIconCircle /> : ""}
      <FavoriteBorder />
    </StyledFavoriteIcon>
  );
};

export default IconFavorite;
