import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { booksReduser } from "./redusers/booksReduser";
import { searchReduser } from "./redusers/searchReduser";
import { previewBookReduser } from "./redusers/previewBookReduser";
import { userReduser } from "./redusers/userReduser";
import { burgerMenuReduser } from "./redusers/burgerMenuReduser";

const rootReduser = combineReducers({
  books: booksReduser,
  search: searchReduser,
  previewBook: previewBookReduser,
  user: userReduser,
  burgerMenu: burgerMenuReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReduser>;
