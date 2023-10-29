export interface IBurgerMenuState {
  isShowMenu: boolean;
}

export enum ByrgerMenuType {
  IS_SHOW_MENU = "IS_SHOW_MENU",
}

export interface IShowBurgerMenuAction {
  type: ByrgerMenuType.IS_SHOW_MENU;
  payload: boolean;
}
