import React, { FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IBook } from "../../types/types";
import {
  StyledButton,
  StyledClose,
  StyledCloseDesk,
  StyledCloseMobile,
  StyledImg,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
  WrapperCard,
  WrapperCount,
} from "./style";
import { Link } from "react-router-dom";

const CardInCart = ({ book }: any) => {
  return (
    <WrapperCard>
      <Link to={`/Book/${book.isbn13}`}>
        <StyledImg>
          <div>
            <img src={book.image} />
          </div>
          <StyledCloseMobile>
            <CloseIcon />
          </StyledCloseMobile>
        </StyledImg>
      </Link>

      <div>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledSubtitle>{book.subtitle}</StyledSubtitle>
        <WrapperCount>
          <WrapperCount>
            <StyledButton>-</StyledButton>
            <p>23</p>
            <StyledButton>+</StyledButton>
          </WrapperCount>
          <StyledPrice>{book.price}</StyledPrice>
        </WrapperCount>
      </div>
      <StyledCloseDesk>
        <CloseIcon />
      </StyledCloseDesk>
    </WrapperCard>
  );
};

export default CardInCart;
