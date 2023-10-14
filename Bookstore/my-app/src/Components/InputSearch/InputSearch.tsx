import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { StyledSearchInput, WrapperSearchList } from "./style";
import SearchCardProduct from "../SearchCardProduct/SearchCardProduct";
import SearchList from "../SearchList/SearchList";
import { api } from "../../api/api";

interface IBook {
  book: any;
}

const InputSearch = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  useEffect(() => {
    api.getSearchBooks("mong").then((data) => setBooks(data.books));
  }, []);

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
