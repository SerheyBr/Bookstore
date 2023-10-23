export interface IUserState {
  email: string;
  username: string;
}

export enum userAuthType {
  USER_AUTH = "USER_AUTH",
  USER_LOGOUT = "USER_LOGOUT",
}

interface IUserAction {
  type: userAuthType.USER_AUTH;
  payload: IUserState;
}

interface IUserLogoutAction {
  type: userAuthType.USER_LOGOUT;
}

export type typeUserActions = IUserAction | IUserLogoutAction;
