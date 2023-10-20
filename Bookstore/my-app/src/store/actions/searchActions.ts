import { useDispatch } from "react-redux";
import { searchType, typeSearchActions } from "../types/search";
import { Dispatch } from "redux";
import { api } from "../../api/api";
import axios from "axios";
import { IBook } from "../../types/types";

export const getSearchResult = (search: string) => {
  console.log(search);
  return async (dispatch: Dispatch<typeSearchActions>) => {
    try {
      const res: any = await api
        .getSearchBooks(search)
        .then((data) => data.books);
      dispatch({ type: searchType.SEARCH_RESULT, payload: res });
    } catch (error) {
      console.log(error);
    }
  };
};

export const SearchActions = () => {
  const dispatch: Dispatch<typeSearchActions> = useDispatch();
  return {
    showListResultSearch: (payload: boolean) =>
      dispatch({ type: searchType.SHOW_LIST_RESULT, payload: payload }),
  };
};
