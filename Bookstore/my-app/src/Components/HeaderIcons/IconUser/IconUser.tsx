import React from "react";
import { PersonOutline } from "@mui/icons-material";
import { StyledUserIcon } from "./style";
import { SearchActions } from "../../../store/actions/searchActions";

const IconUser = () => {
  const { showListResultSearch } = SearchActions();
  return (
    <StyledUserIcon
      onClick={() => {
        showListResultSearch(false);
      }}
    >
      <PersonOutline />
    </StyledUserIcon>
  );
};

export default IconUser;
