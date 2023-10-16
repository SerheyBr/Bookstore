export interface ICountState {
  counter: number;
}

export enum counterType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

interface IIncrementCounterAction {
  type: counterType.INCREMENT;
}

interface IDecrementCounterAction {
  type: counterType.DECREMENT;
}

export type typeCounterActions =
  | IIncrementCounterAction
  | IDecrementCounterAction;
