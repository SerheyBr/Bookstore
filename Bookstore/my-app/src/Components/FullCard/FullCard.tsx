import React, { useState } from "react";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  WrapperFullCard,
  ItemFullCard,
  StyledImg,
  StyledBtnLick,
  WrapperBookInfo,
  WrapperPriceStars,
  StyledPrice,
  StyledListItem,
  StyledTitleDetails,
  StyledBtnMore,
  StyledBtnAdd,
  StyledBtnPreview,
} from "./style";
import CustomButton from "../CustomButton/CustomButton";
import RatingStars from "../RatingStars/RatingStars";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { BooksActions } from "../../store/actions/booksActions";
import { IBook } from "../../types/types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const FullCard = ({ book }: any) => {
  const [openMore, setOpenMore] = useState<boolean>(false);
  const handleMore = () => {
    setOpenMore((prev) => !prev);
  };

  const {
    addToFavoriteBooks,
    removeFromFavoritesBooks,
    addToCartBooks,
    addMoreToCartBooks,
  } = BooksActions();
  const favorite = useTypedSelector((state) => state.books.favorites);
  const cart = useTypedSelector((state) => state.books.cart);
  //   console.log(cart);
  const selectedBookFromArray = (array: IBook[], selectedBook: IBook) => {
    const book = array.find((el) => el.isbn13 === selectedBook.isbn13);
    return book;
  };

  return (
    <WrapperFullCard>
      <ItemFullCard>
        <StyledImg>
          <StyledBtnLick>
            {selectedBookFromArray(favorite, book) ? (
              <FavoriteRoundedIcon
                onClick={() => {
                  removeFromFavoritesBooks(book);
                }}
              />
            ) : (
              <FavoriteBorderTwoToneIcon
                onClick={() => {
                  addToFavoriteBooks(book);
                }}
              />
            )}
          </StyledBtnLick>
          <div>
            <img src={book.image} />
          </div>
        </StyledImg>
      </ItemFullCard>
      <ItemFullCard>
        <WrapperBookInfo>
          <WrapperPriceStars>
            <StyledPrice>{book.price}</StyledPrice>
            <RatingStars rating={book.rating} />
          </WrapperPriceStars>
          <div>
            <ul>
              <StyledListItem>
                <StyledTitleDetails>Authors</StyledTitleDetails>
                <p>{book.authors}</p>
              </StyledListItem>
              <StyledListItem>
                <StyledTitleDetails>Publisher</StyledTitleDetails>
                <p>{book.publisher}</p>
              </StyledListItem>
              <StyledListItem>
                <StyledTitleDetails>Language</StyledTitleDetails>
                <p>{book.language}</p>
              </StyledListItem>
              <StyledListItem>
                <StyledTitleDetails>Format</StyledTitleDetails>
                <p>{book.title}</p>
              </StyledListItem>
              {openMore ? (
                <>
                  <StyledListItem>
                    <StyledTitleDetails>pages</StyledTitleDetails>
                    <p>{book.pages}</p>
                  </StyledListItem>
                  <StyledListItem>
                    <StyledTitleDetails>year</StyledTitleDetails>
                    <p>{book.year}</p>
                  </StyledListItem>
                  <StyledListItem>
                    <div>
                      <StyledTitleDetails>Description:</StyledTitleDetails>
                      <p>{book.desc}</p>
                    </div>
                  </StyledListItem>
                </>
              ) : (
                ""
              )}
            </ul>
            <StyledBtnMore onClick={handleMore}>
              {openMore ? (
                <div>
                  <p>Conceal details</p> <ExpandLessIcon />
                </div>
              ) : (
                <div>
                  <p>More detailse</p> <ExpandMoreIcon />
                </div>
              )}
            </StyledBtnMore>
            {selectedBookFromArray(cart, book) ? (
              <StyledBtnAdd>
                <div>
                  <ShoppingCartOutlinedIcon />
                  <p>{selectedBookFromArray(cart, book)?.inCart}</p>
                </div>
                <CustomButton
                  title={"add more to cart"}
                  typebtn={"fill"}
                  onClick={() => {
                    addMoreToCartBooks(book);
                  }}
                />
              </StyledBtnAdd>
            ) : (
              <StyledBtnAdd>
                <CustomButton
                  title={"add to cart"}
                  typebtn={"fill"}
                  onClick={() => {
                    addToCartBooks(book);
                  }}
                />
              </StyledBtnAdd>
            )}
            <StyledBtnPreview>
              <CustomButton title={"Preview book"} typebtn={"ghost"} />
            </StyledBtnPreview>
          </div>
        </WrapperBookInfo>
      </ItemFullCard>
    </WrapperFullCard>
  );
};

export default FullCard;
