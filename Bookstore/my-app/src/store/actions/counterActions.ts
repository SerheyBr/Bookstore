import { useDispatch } from "react-redux";
import { counterType, typeCounterActions } from "../types/counter";
import { Dispatch } from "redux";

export const ConterActions = () => {
  const dispatch: Dispatch<typeCounterActions> = useDispatch();
  return {
    counterIncrement: () => dispatch({ type: counterType.INCREMENT }),
    counterDecrement: () => dispatch({ type: counterType.DECREMENT }),
  };
};
