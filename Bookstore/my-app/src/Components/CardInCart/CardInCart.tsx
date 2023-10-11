import React, { FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IBook } from "../../types/types";
import {
  StyledButton,
  StyledClose,
  StyledImg,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
  WrapperCard,
  WrapperCount,
} from "./style";

const CardInCart = ({ book }: any) => {
  return (
    <WrapperCard>
      <StyledImg>
        <div>
          <img src={book.image} />
        </div>
      </StyledImg>
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
      {/* <StyledPrice>{book.price}</StyledPrice> */}
      <StyledClose>
        <CloseIcon />
      </StyledClose>
    </WrapperCard>
  );
};

export default CardInCart;
