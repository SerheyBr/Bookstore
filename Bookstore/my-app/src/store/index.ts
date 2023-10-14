import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reduser } from "./redusers/counterReduser";

// const rootReduser = combineReducers(reduser);

export const store = createStore(
  reduser,
  composeWithDevTools(applyMiddleware(thunk))
);
