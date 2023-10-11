import React, { FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IBook } from "../../types/types";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import {
  StyledIconFavoriteDesk,
  StyledIconFavoriteMobile,
  StyledImg,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
  WrapperCard,
} from "./style";
import RatingStars from "../RatingStars/RatingStars";

const CardInFavorites = ({ book }: any) => {
  console.log(book);
  return (
    <WrapperCard>
      <StyledImg>
        <div>
          <img src={book.image} />
        </div>
        <StyledIconFavoriteMobile>
          <FavoriteOutlinedIcon />
        </StyledIconFavoriteMobile>
      </StyledImg>
      <div>
        <StyledPrice>
          <RatingStars rating={book.rating} />
        </StyledPrice>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <StyledPrice>{book.price}</StyledPrice>
      </div>

      <StyledIconFavoriteDesk>
        <FavoriteOutlinedIcon />
      </StyledIconFavoriteDesk>
    </WrapperCard>
  );
};

export default CardInFavorites;
