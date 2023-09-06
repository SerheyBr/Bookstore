import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { StyledFavoriteIcon, FavoriteIconCircle } from "./style";

const IconFavorite = () => {
  return (
    <StyledFavoriteIcon>
      <FavoriteIconCircle />
      <FavoriteBorder />
    </StyledFavoriteIcon>
  );
};

export default IconFavorite;
