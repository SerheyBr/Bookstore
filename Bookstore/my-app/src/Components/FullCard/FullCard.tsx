import React, { useEffect, useState } from "react";
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
import { BooksActions } from "../../store/actions/booksActions";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PreviewBook from "../PreviewBook/PreviewBook";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PrevievBookActions } from "../../store/actions/previewBookAction";
import {
  findElementFromArray,
  saveLocalStorageArray,
} from "../../utilits/helpers";

const FullCard = ({ book }: any) => {
  const {
    addToFavoriteBooks,
    removeFromFavoritesBooks,
    addToCartBooks,
    addMoreToCartBooks,
  } = BooksActions();
  const favorite = useTypedSelector((state) => state.books.favorites);
  const cart = useTypedSelector((state) => state.books.cart);
  const isShowPrewiev = useTypedSelector(
    (state) => state.previewBook.isShowPreviewBook
  );
  const { showPreviewBook } = PrevievBookActions();
  const [openMore, setOpenMore] = useState<boolean>(false);

  const handlerMore = () => {
    setOpenMore((prev) => !prev);
  };

  useEffect(() => {
    isShowPrewiev
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isShowPrewiev]);

  useEffect(() => {
    saveLocalStorageArray(favorite, "favorites");
    saveLocalStorageArray(cart, "cart");
  }, [favorite, cart]);

  return (
    <WrapperFullCard>
      <ItemFullCard>
        <StyledImg>
          <StyledBtnLick>
            {findElementFromArray(favorite, book) ? (
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
            <StyledBtnMore onClick={handlerMore}>
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
            {findElementFromArray(cart, book) ? (
              <StyledBtnAdd>
                <div>
                  <ShoppingCartOutlinedIcon />
                  <p>{findElementFromArray(cart, book)?.inCart}</p>
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
              <CustomButton
                title={"Preview book"}
                typebtn={"ghost"}
                onClick={() => showPreviewBook(true)}
              />
            </StyledBtnPreview>
          </div>
        </WrapperBookInfo>
      </ItemFullCard>
      {isShowPrewiev ? <PreviewBook bookImg={book.image} /> : ""}
    </WrapperFullCard>
  );
};

export default FullCard;
