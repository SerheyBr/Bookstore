import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reduser } from "./redusers/counterReduser";
import { booksReduser } from "./redusers/booksReduser";
import { searchReduser } from "./redusers/searchReduser";
import { previewBookReduser } from "./redusers/previewBookReduser";
import { userReduser } from "./redusers/userReduser";

const rootReduser = combineReducers({
  counter: reduser,
  books: booksReduser,
  search: searchReduser,
  previewBook: previewBookReduser,
  user: userReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReduser>;
