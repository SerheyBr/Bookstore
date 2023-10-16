import { Favorite } from "@mui/icons-material";
import { typeBooksActions, IBooksState, booksType } from "../types/books";

const defaultState: IBooksState = {
  newRelises: [],
  favorites: [],
  //   cart: [],
  //   selectedBook: {},
};

export const booksReduser = (
  state = defaultState,
  action: typeBooksActions
) => {
  switch (action.type) {
    case booksType.NEW_RELISES:
      return {
        ...state,
        newRelises: action.payload.map((el) => {
          return { ...el, isFavorite: false };
        }),
      };
    case booksType.ADD_TO_FAVORITES:
      let arr = state.favorites;
      arr.push(action.payload);
      return {
        ...state,
        favorites: arr.map((el) => {
          return { ...el, isFavorite: true };
        }),
      };
    case booksType.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (el) => !(el.isbn13 === action.payload.isbn13)
        ),
      };
    default:
      return state;
  }
};
