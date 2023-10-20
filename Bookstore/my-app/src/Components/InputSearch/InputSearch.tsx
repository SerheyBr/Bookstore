import React, { useEffect, useState } from "react";
import {
  ContentPasteSearchOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { StyledSearchInput, WrapperSearchList } from "./style";
import SearchCardProduct from "../SearchCardProduct/SearchCardProduct";
import SearchList from "../SearchList/SearchList";
import { api } from "../../api/api";
import { getSearchResult } from "../../store/actions/searchActions";
import { useDispatch } from "react-redux";
import { SearchActions } from "../../store/actions/searchActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IBook {
  book: any;
}

const InputSearch = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);
  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState("");
  const { showListResultSearch } = SearchActions();
  const isShowList = useTypedSelector((steat) => steat.search.showList);
  const searchResult = useTypedSelector((state) => state.search.searchResult);

  console.log(searchResult);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getSearchResult(value));

    //  api.getSearchBooks("mong").then((data) => setBooks(data.books));
  }, [value]);
  console.log(value);

  return (
    <WrapperSearchList>
      <StyledSearchInput>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onClick={(event) => {
            showListResultSearch(true);
            console.log("asd");
          }}
          onChange={(event) => {
            setValue(event.target.value);
            showListResultSearch(true);
          }}
        />
        <SearchOutlined />
      </StyledSearchInput>
      {searchResult && searchResult.length && isShowList ? (
        <SearchList books={searchResult} />
      ) : (
        ""
      )}
    </WrapperSearchList>
  );
};

export default InputSearch;
