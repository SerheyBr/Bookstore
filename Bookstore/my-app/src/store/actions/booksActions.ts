import { useDispatch } from "react-redux";
import { booksType, typeBooksActions } from "../types/books";
import { Dispatch } from "redux";
import { api } from "../../api/api";
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
    addToCartBooks: (payload: IBook) =>
      dispatch({ type: booksType.ADD_TO_CART, payload: payload }),
    addMoreToCartBooks: (payload: IBook) =>
      dispatch({ type: booksType.ADD_MORE_TO_CART, payload: payload }),
    removeOneBookFromCartAction: (payload: IBook) =>
      dispatch({ type: booksType.REMOVE_ONE_BOOK_FROM_CART, payload: payload }),
    removeCollectionBooksFromCartAction: (payload: IBook) =>
      dispatch({
        type: booksType.REMOVE_COLLECTION_BOOKS_FROM_CART,
        payload: payload,
      }),
  };
};
