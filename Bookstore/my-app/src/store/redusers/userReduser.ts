import { typeUserActions, IUserState, userAuthType } from "../types/user";

const defaultState: IUserState = {
  email: "",
  token: "",
  id: "",
  userName: "",
};

export const userReduser = (state = defaultState, action: typeUserActions) => {
  switch (action.type) {
    case userAuthType.SET_USER:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
        userName: action.payload.userName,
      };
    case userAuthType.REMOVE_USER:
      return {
        ...state,
        email: "",
        token: "",
        id: "",
        userName: "",
      };
    default:
      return state;
  }
};
