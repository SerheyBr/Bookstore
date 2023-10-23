import { useDispatch } from "react-redux";
import { userAuthType, typeUserActions, IUserState } from "../types/user";
import { Dispatch } from "redux";

export const UserActions = () => {
  const dispatch: Dispatch<typeUserActions> = useDispatch();
  return {
    userAuth: (payload: IUserState) =>
      dispatch({ type: userAuthType.USER_AUTH, payload: payload }),
    userLogout: () => dispatch({ type: userAuthType.USER_LOGOUT }),
  };
};
