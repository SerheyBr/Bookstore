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
import { Link } from "react-router-dom";

const CardInFavorites = ({ book }: any) => {
  return (
    <WrapperCard>
      <Link to={`Book/${book.isbn13}`}>
        <StyledImg>
          <div>
            <img src={book.image} />
          </div>
          <StyledIconFavoriteMobile>
            <FavoriteOutlinedIcon />
          </StyledIconFavoriteMobile>
        </StyledImg>
      </Link>

      <div>
        <StyledPrice>
          <RatingStars rating={book.rating} />
        </StyledPrice>
        <Link to={`Book/${book.isbn13}`}>
          <StyledTitle>{book.title}</StyledTitle>
        </Link>

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
