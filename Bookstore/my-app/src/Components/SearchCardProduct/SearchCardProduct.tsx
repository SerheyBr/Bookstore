import React, { FC } from "react";
import { StyledImg, StyledTitle, WrapperCardSearch } from "./style";
import { Link } from "react-router-dom";
import { SearchActions } from "../../store/actions/searchActions";
import { BurgerMenuActions } from "../../store/actions/burgerMenuActions";

interface IBook {
  book: any;
}

const SearchCardProduct: FC<IBook> = ({ book }) => {
  const { showBurgerMtnu } = BurgerMenuActions();
  const { showListResultSearch } = SearchActions();

  const handlerLink = () => {
    showBurgerMtnu(false);
    document.body.style.overflow = "visible";
  };

  return (
    <Link to={`/Book/${book.isbn13}`} onClick={() => handlerLink()}>
      <WrapperCardSearch onClick={() => showListResultSearch(false)}>
        <StyledImg>
          <div>
            <img src={book.image} />
          </div>
        </StyledImg>
        <StyledTitle>{book.title}</StyledTitle>
      </WrapperCardSearch>
    </Link>
  );
};

export default SearchCardProduct;
