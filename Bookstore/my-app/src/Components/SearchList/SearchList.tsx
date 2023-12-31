import React, { FC } from "react";
import SearchCardProduct from "../SearchCardProduct/SearchCardProduct";
import { WrapperSearchList } from "./style";
import { SearchActions } from "../../store/actions/searchActions";

interface IBook {
  books: any;
}

const SearchList: FC<IBook> = ({ books }) => {
  const { showListResultSearch } = SearchActions();

  return (
    <WrapperSearchList
      onClick={(event) => {
        showListResultSearch(false);
      }}
    >
      {books
        ? books.map((el: any) => (
            <li key={el.isbn13}>
              <SearchCardProduct book={el} />
            </li>
          ))
        : ""}
    </WrapperSearchList>
  );
};

export default SearchList;
