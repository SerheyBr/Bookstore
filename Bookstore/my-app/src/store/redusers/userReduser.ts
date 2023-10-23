import { typeUserActions, IUserState, userAuthType } from "../types/user";

// @ts-ignore
const defaultState: IUserState = {
  email: "",
  username: "",
};

export const userReduser = (state = defaultState, action: typeUserActions) => {
  switch (action.type) {
    case userAuthType.USER_AUTH:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
      };
    case userAuthType.USER_LOGOUT:
      return {
        ...state,
        email: "",
        username: "",
      };
    default:
      return state;
  }
};
