import { useDispatch } from "react-redux";
import { ByrgerMenuType, IShowBurgerMenuAction } from "../types/burgerMenu";
import { Dispatch } from "redux";

export const BurgerMenuActions = () => {
  const dispatch: Dispatch<IShowBurgerMenuAction> = useDispatch();
  return {
    showBurgerMtnu: (payload: boolean) =>
      dispatch({ type: ByrgerMenuType.IS_SHOW_MENU, payload: payload }),
  };
};
