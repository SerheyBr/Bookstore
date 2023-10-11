import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { StyledSearchInput, WrapperSearchList } from "./style";
import SearchCardProduct from "../SearchCardProduct/SearchCardProduct";
import SearchList from "../SearchList/SearchList";

interface IBook {
  book: any;
}

const InputSearch = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  const getCards = async () => {
    return await fetch("https://api.itbook.store/1.0/search/js", {
      mode: "cors",
    });
  };

  useEffect(() => {
    getCards()
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <WrapperSearchList>
      <StyledSearchInput>
        <input type="text" placeholder="Search" />
        <SearchOutlined />
      </StyledSearchInput>
      {/* {books ? <SearchList books={books} /> : ""} */}
    </WrapperSearchList>
  );
};

export default InputSearch;
