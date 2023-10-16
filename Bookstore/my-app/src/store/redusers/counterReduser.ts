import { typeCounterActions, ICountState, counterType } from "../types/counter";

const defaultState: ICountState = {
  counter: 0,
};
export const reduser = (state = defaultState, action: typeCounterActions) => {
  switch (action.type) {
    case counterType.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case counterType.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
