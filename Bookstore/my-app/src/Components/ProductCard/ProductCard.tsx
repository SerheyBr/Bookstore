import React, { FC } from "react";
import {
  WrapperCard,
  ImgCard,
  TitleCard,
  SubtitleCard,
  PriseCard,
  StyledLikeBtn,
} from "./style";
import { IBook } from "../../types/types";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { findElementFromArray } from "../../utilits/helpers";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BooksActions } from "../../store/actions/booksActions";

interface IProductCardProps {
  book: IBook;
}

const ProductCard: FC<IProductCardProps> = ({ book }) => {
  const favorites = useTypedSelector((state) => state.books.favorites);
  const { removeFromFavoritesBooks, addToFavoriteBooks } = BooksActions();

  const isShowSearchList = useTypedSelector((state) => state.search.showList);

  return (
    <WrapperCard className="card">
      {findElementFromArray(favorites, book) ? (
        <StyledLikeBtn onClick={() => removeFromFavoritesBooks(book)}>
          <FavoriteIcon />
        </StyledLikeBtn>
      ) : (
        <StyledLikeBtn onClick={() => addToFavoriteBooks(book)}>
          <FavoriteBorderIcon />
        </StyledLikeBtn>
      )}

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
