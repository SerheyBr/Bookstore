import {
  IPreviewBookState,
  IShowPreviewBookAction,
  previewBookType,
} from "../types/previewBook";

const defaultState: IPreviewBookState = {
  isShowPreviewBook: false,
};

export const previewBookReduser = (
  state = defaultState,
  action: IShowPreviewBookAction
) => {
  switch (action.type) {
    case previewBookType.IS_PREVIEW_SHOW:
      return { ...state, isShowPreviewBook: action.payload };

    default:
      return state;
  }
};
