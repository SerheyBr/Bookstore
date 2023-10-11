import React, { FC } from "react";
import SearchCardProduct from "../SearchCardProduct/SearchCardProduct";
import { WrapperSearchList } from "./style";

interface IBook {
  books: any;
}

const SearchList: FC<IBook> = ({ books }) => {
  return (
    <WrapperSearchList>
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
