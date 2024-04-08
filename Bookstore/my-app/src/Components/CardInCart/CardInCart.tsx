import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledButton,
  StyledCloseDesk,
  StyledCloseMobile,
  StyledImg,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
  WrapperBody,
  WrapperCard,
  WrapperCount,
} from "./style";
import { Link } from "react-router-dom";
import { BooksActions } from "../../store/actions/booksActions";
import { priceFormatting } from "../../utilits/helpers";

const CardInCart = ({ book }: any) => {
  const {
    addMoreToCartBooks,
    removeOneBookFromCartAction,
    removeCollectionBooksFromCartAction,
  } = BooksActions();

  const priceCollectionBooks = (price: string, quantity: number): string => {
    let result = priceFormatting(price) * quantity;
    return result.toFixed(2);
  };

  return (
    <WrapperCard>
      <Link to={`/Book/${book.isbn13}`}>
        <StyledImg>
          <div>
            <img src={book.image} />
          </div>
          <StyledCloseMobile
            onClick={(event) => {
              event.preventDefault();
              removeCollectionBooksFromCartAction(book);
            }}
          >
            <CloseIcon />
          </StyledCloseMobile>
        </StyledImg>
      </Link>

      <WrapperBody>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <WrapperCount>
          <WrapperCount>
            <StyledButton
              disabled={book.inCart >= 2 ? false : true}
              onClick={() => {
                removeOneBookFromCartAction(book);
              }}
            >
              -
            </StyledButton>
            <p>{book.inCart}</p>
            <StyledButton
              onClick={() => {
                addMoreToCartBooks(book);
              }}
            >
              +
            </StyledButton>
          </WrapperCount>
          <StyledPrice>{`$${priceCollectionBooks(
            book.price,
            book.inCart
          )}`}</StyledPrice>
        </WrapperCount>
      </WrapperBody>
      <StyledCloseDesk
        onClick={(event) => {
          //  event.stopPropagation();
          console.log("asd");
          removeCollectionBooksFromCartAction(book);
        }}
      >
        <CloseIcon />
      </StyledCloseDesk>
    </WrapperCard>
  );
};

export default CardInCart;
