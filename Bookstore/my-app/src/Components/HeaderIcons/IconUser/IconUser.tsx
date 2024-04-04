import React from "react";
import { PersonOutline } from "@mui/icons-material";
import { StyledUserIcon } from "./style";
import { SearchActions } from "../../../store/actions/searchActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const IconUser = () => {
  const user = useTypedSelector((state) => state.user);
  const userEmail = user.email;
  const userInitial = userEmail.split("")[0];

  const { showListResultSearch } = SearchActions();
  return (
    <StyledUserIcon
      onClick={() => {
        showListResultSearch(false);
      }}
    >
      {userEmail ? (
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
