import { IBook } from "../../types/types";

export interface ISearchState {
  searchResult: any[];
  showList: boolean;
  stringResultSearch: string;
}

export enum searchType {
  SEARCH_RESULT = "SEARCH_RESULT",
  SHOW_LIST_RESULT = "SHOW_LIST_RESULT",
  STRING_RESULT_SEARCH = "STRING_RESULT_SEARCH",
}

interface ISearchResultAction {
  type: searchType.SEARCH_RESULT;
  payload: IBook[];
}

interface IShowListResultAction {
  type: searchType.SHOW_LIST_RESULT;
  payload: boolean;
}

interface IStringResultSearchAction {
  type: searchType.STRING_RESULT_SEARCH;
  payload: string;
}

export type typeSearchActions =
  | ISearchResultAction
  | IShowListResultAction
  | IStringResultSearchAction;
