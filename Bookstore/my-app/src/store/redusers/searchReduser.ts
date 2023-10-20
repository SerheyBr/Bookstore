import { typeSearchActions, searchType, ISearchState } from "../types/search";

const defaultState: ISearchState = {
  searchResult: [],
  showList: true,
};

export const searchReduser = (
  state = defaultState,
  action: typeSearchActions
) => {
  switch (action.type) {
    case searchType.SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case searchType.SHOW_LIST_RESULT:
      return { ...state, showList: action.payload };
    default:
      return state;
  }
};
