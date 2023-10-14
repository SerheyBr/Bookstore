enum counterType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

interface ICountState {
  count: number;
}

interface IIncrementCounterAction {
  type: counterType.INCREMENT;
  payload: number;
}

interface IDecrementCounterAction {
  type: counterType.DECREMENT;
  payload: number;
}

type CounterActions = IIncrementCounterAction | IDecrementCounterAction;

const defaultState: ICountState = {
  count: 0,
};
export const reduser = (state = defaultState, action: CounterActions) => {
  switch (action.type) {
    case counterType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case counterType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
