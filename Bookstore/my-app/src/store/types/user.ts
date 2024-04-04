export interface IUserState {
  email: string;
  token: string;
  id: string;
  userName: string;
}

export enum userAuthType {
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}

interface IUserAction {
  type: userAuthType.SET_USER;
  payload: IUserState;
}

interface IUserLogoutAction {
  type: userAuthType.REMOVE_USER;
}

export type typeUserActions = IUserAction | IUserLogoutAction;
