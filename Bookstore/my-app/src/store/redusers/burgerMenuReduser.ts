import {
  IBurgerMenuState,
  IShowBurgerMenuAction,
  ByrgerMenuType,
} from "../types/burgerMenu";

const defaultState: IBurgerMenuState = {
  isShowMenu: false,
};

export const burgerMenuReduser = (
  state = defaultState,
  action: IShowBurgerMenuAction
) => {
  switch (action.type) {
    case ByrgerMenuType.IS_SHOW_MENU:
      return { ...state, isShowMenu: action.payload };

    default:
      return state;
  }
};
