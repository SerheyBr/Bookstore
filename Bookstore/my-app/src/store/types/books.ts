import { IBook, ISelectorBook } from "../../types/types";

export interface IBooksState {
  newRelises: any[];
  favorites: any[];
  cart: any[];
  //   selectedBook: any;
}

export enum booksType {
  NEW_RELISES = "NEW_RELISES",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
  ADD_TO_CART = "ADD_TO_CART",
  ADD_MORE_TO_CART = "ADD_MORE_TO_CART",
  REMOVE_ONE_BOOK_FROM_CART = "REMOVE_ONE_BOOK_FROM_CART",
  REMOVE_COLLECTION_BOOKS_FROM_CART = "REMOVE_COLLECTION_BOOKS_FROM_CART",
  //   SELECTED_BOOK = "SELECTED_BOOK",
}

interface INewRelisesBooksAction {
  type: booksType.NEW_RELISES;
  payload: IBook[];
}

interface IAddToFavoritesBookAction {
  type: booksType.ADD_TO_FAVORITES;
  payload: IBook;
}

interface IRemoveFromFavoritesBookAction {
  type: booksType.REMOVE_FROM_FAVORITES;
  payload: IBook;
}

interface IAddToCartBookAction {
  type: booksType.ADD_TO_CART;
  payload: IBook;
}

interface IAddMoreToCartBookAction {
  type: booksType.ADD_MORE_TO_CART;
  payload: IBook;
}

interface IRemoveOneBookFromCartAction {
  type: booksType.REMOVE_ONE_BOOK_FROM_CART;
  payload: IBook;
}

interface IRemoveCollectionBooksFromCartAction {
  type: booksType.REMOVE_COLLECTION_BOOKS_FROM_CART;
  payload: IBook;
}
// interface ICartBooksAction {
//   type: booksType.CART;
//   payload: IBook[];
// }

// interface ISelectedBookAction {
//   type: booksType.SELECTED_BOOK;
//   payload: ISelectorBook;
// }

// export type typeBooksActions =
//   | INewRelisesBooksAction
//   | IAddToFavoritesBookAction
//   | ICartBooksAction
//   | ISelectedBookAction;

export type typeBooksActions =
  | INewRelisesBooksAction
  | IAddToFavoritesBookAction
  | IRemoveFromFavoritesBookAction
  | IAddToCartBookAction
  | IAddMoreToCartBookAction
  | IRemoveOneBookFromCartAction
  | IRemoveCollectionBooksFromCartAction;
