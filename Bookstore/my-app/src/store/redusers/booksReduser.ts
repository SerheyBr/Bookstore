import { typeBooksActions, IBooksState, booksType } from "../types/books";

const defaultState: IBooksState = {
  newRelises: [],
  favorites: [],
  cart: [],
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
      return { ...state, favorites: [...state.favorites, action.payload] };
    case booksType.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (el) => !(el.isbn13 === action.payload.isbn13)
        ),
      };
    case booksType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, inCart: 1 }],
      };
    case booksType.ADD_MORE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((el) =>
          el.isbn13 === action.payload.isbn13
            ? { ...el, inCart: el.inCart + 1 }
            : el
        ),
      };
    case booksType.REMOVE_ONE_BOOK_FROM_CART:
      return {
        ...state,
        cart: state.cart.map((el) =>
          el.isbn13 === action.payload.isbn13
            ? { ...el, inCart: el.inCart - 1 }
            : el
        ),
      };
    case booksType.REMOVE_COLLECTION_BOOKS_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((el) => !(el.isbn13 === action.payload.isbn13)),
      };
    default:
      return state;
  }
};
