import React, { FC, useEffect, useState } from "react";
import { StyledImg, StyledTitle, WrapperCardSearch } from "./style";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import { SearchActions } from "../../store/actions/searchActions";

interface IBook {
  book: any;
}

const SearchCardProduct: FC<IBook> = ({ book }) => {
  //   const [books, setBooks] = useState<null | IBook[]>(null);

  //   useEffect(() => {
  //     api.getSearchBooks("mong").then((data) => setBooks(data.books));
  //   }, []);
  const { showListResultSearch } = SearchActions();
  return (
    <Link to={`/Book/${book.isbn13}`}>
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
