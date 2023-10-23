import { useDispatch } from "react-redux";
import { previewBookType, IShowPreviewBookAction } from "../types/previewBook";
import { Dispatch } from "redux";

export const PrevievBookActions = () => {
  const dispatch: Dispatch<IShowPreviewBookAction> = useDispatch();
  return {
    showPreviewBook: (payload: boolean) =>
      dispatch({ type: previewBookType.IS_PREVIEW_SHOW, payload: payload }),
  };
};
