import React, { useState, useEffect, FC } from "react";
import {
  WrapperCard,
  ImgCard,
  TitleCard,
  SubtitleCard,
  PriseCard,
} from "./style";
import { IBook } from "../../types/types";

interface IProductCardProps {
  book: IBook;
}

const ProductCard: FC<IProductCardProps> = ({ book }) => {
  return (
    <WrapperCard className="card">
      <ImgCard className="card__img">
        <div>
          <img src={book.image} />
        </div>
      </ImgCard>
      <TitleCard className="card__title">{book.title}</TitleCard>
      <SubtitleCard className="card__subtitle">{book.subtitle}</SubtitleCard>
      <PriseCard className="card__price">{book.price}</PriseCard>
    </WrapperCard>
  );
};

export default ProductCard;
