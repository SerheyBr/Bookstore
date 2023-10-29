import React, { FC, useEffect } from "react";
import {
  StyledCloseIkon,
  StyledImg,
  WrapperContent,
  StyledBody,
} from "./style";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { PrevievBookActions } from "../../store/actions/previewBookAction";

interface IPreviewBookProps {
  bookImg: string;
}

const PreviewBook: FC<IPreviewBookProps> = ({ bookImg }) => {
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
