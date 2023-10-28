import React from "react";
import { PersonOutline } from "@mui/icons-material";
import { StyledUserIcon } from "./style";
import { SearchActions } from "../../../store/actions/searchActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const IconUser = () => {
  const userName = useTypedSelector((state) => state.user.username);
  const userInitial = userName.split("")[0];
  const { showListResultSearch } = SearchActions();
  return (
    <StyledUserIcon
      onClick={() => {
        showListResultSearch(false);
      }}
    >
      {userName ? (
        <div>
          <p>{userInitial}</p>
        </div>
      ) : (
        <PersonOutline />
      )}
    </StyledUserIcon>
  );
};

export default IconUser;
