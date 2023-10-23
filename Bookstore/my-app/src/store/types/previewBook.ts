export interface IPreviewBookState {
  isShowPreviewBook: boolean;
}

export enum previewBookType {
  IS_PREVIEW_SHOW = "IS_PREVIEW_SHOW",
}

export interface IShowPreviewBookAction {
  type: previewBookType.IS_PREVIEW_SHOW;
  payload: boolean;
}
