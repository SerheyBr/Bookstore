import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { StyledSearchInput, WrapperSearchList } from "./style";
import SearchList from "../SearchList/SearchList";
import { getSearchResult } from "../../store/actions/searchActions";
import { useDispatch } from "react-redux";
import { SearchActions } from "../../store/actions/searchActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

interface IBook {
  book: any;
}

const InputSearch = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { showListResultSearch, getStringResultSearch } = SearchActions();
  const isShowList = useTypedSelector((steat) => steat.search.showList);
  const searchResult = useTypedSelector((state) => state.search.searchResult);

  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getSearchResult(value));
  }, [value]);

  return (
    <WrapperSearchList>
      <StyledSearchInput>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onClick={(event) => {
            showListResultSearch(true);
          }}
          onChange={(event) => {
            getStringResultSearch(event.target.value);
            setValue(event.target.value);
            showListResultSearch(true);
          }}
        />
        <SearchOutlined
          onClick={() => {
            navigate("/search");
          }}
        />
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
