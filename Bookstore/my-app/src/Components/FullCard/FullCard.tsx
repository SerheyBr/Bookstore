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

const FullCard = ({ book }: any) => {
  const [like, setLike] = useState<boolean>(false);
  const [openMore, setOpenMore] = useState<boolean>(false);

  const handleMore = () => {
    setOpenMore((prev) => !prev);
  };

  const handleBtnLike = () => {
    setLike((prev) => !prev);
  };
  console.log(book);
  return (
    <WrapperFullCard>
      <ItemFullCard>
        <StyledImg>
          <StyledBtnLick onClick={handleBtnLike}>
            {like ? <FavoriteRoundedIcon /> : <FavoriteBorderTwoToneIcon />}
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
            <StyledBtnAdd>
              <CustomButton title={"add to cart"} typebtn={"fill"} />
            </StyledBtnAdd>
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
