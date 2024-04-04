import { useDispatch } from "react-redux";
import { userAuthType, typeUserActions, IUserState } from "../types/user";
import { Dispatch } from "redux";

export const UserActions = () => {
  const dispatch: Dispatch<typeUserActions> = useDispatch();
  return {
    setUser: (payload: IUserState) =>
      dispatch({ type: userAuthType.SET_USER, payload: payload }),
    removeUser: () => dispatch({ type: userAuthType.REMOVE_USER }),
  };
};
