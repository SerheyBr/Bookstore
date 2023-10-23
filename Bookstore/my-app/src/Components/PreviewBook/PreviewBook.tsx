import React, { FC, useEffect } from "react";
import { IBook } from "../../types/types";
import {
  StyledCloseIkon,
  StyledImg,
  WrapperContent,
  StyledBody,
} from "./style";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { PrevievBookActions } from "../../store/actions/previewBookAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IPreviewBookProps {
  bookImg: string;
}

// document.body.style.overflow = "hidden";

const PreviewBook: FC<IPreviewBookProps> = ({ bookImg }) => {
  const isShowPrievBook = useTypedSelector(
    (state) => state.previewBook.isShowPreviewBook
  );
  const { showPreviewBook } = PrevievBookActions();
  return (
    <WrapperContent onClick={() => showPreviewBook(false)}>
      <StyledBody onClick={(event) => event.stopPropagation()}>
        <StyledCloseIkon onClick={() => showPreviewBook(false)}>
          <CancelOutlinedIcon />
        </StyledCloseIkon>
        <StyledImg>
          <img src={bookImg} />
        </StyledImg>
      </StyledBody>
    </WrapperContent>
  );
};

export default PreviewBook;
