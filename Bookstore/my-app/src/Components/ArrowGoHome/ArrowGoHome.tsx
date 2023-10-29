import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { StyledArrowBackPage } from "./style";
import { useNavigate } from "react-router-dom";

const ArrowGoHome = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <StyledArrowBackPage onClick={goHome}>
      <KeyboardBackspaceIcon fontSize="large" />
    </StyledArrowBackPage>
  );
};

export default ArrowGoHome;
