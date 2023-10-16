import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reduser } from "./redusers/counterReduser";
import { booksReduser } from "./redusers/booksReduser";

const rootReduser = combineReducers({
  counter: reduser,
  books: booksReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReduser>;
