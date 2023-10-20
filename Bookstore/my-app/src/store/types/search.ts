import { IBook } from "../../types/types";

export interface ISearchState {
  searchResult: any[];
  showList: boolean;
}

export enum searchType {
  SEARCH_RESULT = "SEARCH_RESULT",
  SHOW_LIST_RESULT = "SHOW_LIST_RESULT",
}

interface ISearchResultAction {
  type: searchType.SEARCH_RESULT;
  payload: IBook[];
}

interface IShowListResultAction {
  type: searchType.SHOW_LIST_RESULT;
  payload: boolean;
}

export type typeSearchActions = ISearchResultAction | IShowListResultAction;
