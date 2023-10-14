import React, { useState, useEffect, FC } from "react";
import {
  WrapperCard,
  ImgCard,
  TitleCard,
  SubtitleCard,
  PriseCard,
} from "./style";
import { IBook } from "../../types/types";
import { Link } from "react-router-dom";

interface IProductCardProps {
  book: IBook;
}

const ProductCard: FC<IProductCardProps> = ({ book }) => {
  return (
    <WrapperCard className="card">
      <Link to={`/Book/${book.isbn13}`}>
        <ImgCard className="card__img">
          <div>
            <img src={book.image} />
          </div>
        </ImgCard>
      </Link>
      <Link to={`/Book/${book.isbn13}`}>
        <TitleCard className="card__title">{book.title}</TitleCard>
      </Link>

      <SubtitleCard className="card__subtitle">{book.subtitle}</SubtitleCard>
      <PriseCard className="card__price">{book.price}</PriseCard>
    </WrapperCard>
  );
};

export default ProductCard;
