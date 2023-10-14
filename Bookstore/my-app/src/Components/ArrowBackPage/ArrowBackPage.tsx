import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { StyledArrowBackPage } from "./style";
import { useNavigate } from "react-router-dom";

const ArrowBackPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <StyledArrowBackPage onClick={goBack}>
      <KeyboardBackspaceIcon fontSize="large" />
    </StyledArrowBackPage>
  );
};

export default ArrowBackPage;
