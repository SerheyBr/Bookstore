import { useDispatch } from "react-redux";
import { booksType, typeBooksActions } from "../types/books";
import { Dispatch } from "redux";
import { api } from "../../api/api";
import axios from "axios";
import { IBook } from "../../types/types";

export const getNewRelises = () => {
  return async (dispatch: Dispatch<typeBooksActions>) => {
    try {
      const res: any = await api.getNewReleases().then((data) => data.books);
      dispatch({ type: booksType.NEW_RELISES, payload: res });
    } catch (error) {
      console.log(error);
    }
  };
};

export const BooksActions = () => {
  const dispatch: Dispatch<typeBooksActions> = useDispatch();
  return {
    addToFavoriteBooks: (payload: IBook) =>
      dispatch({ type: booksType.ADD_TO_FAVORITES, payload: payload }),
    removeFromFavoritesBooks: (payload: IBook) =>
      dispatch({ type: booksType.REMOVE_FROM_FAVORITES, payload: payload }),
  };
};
