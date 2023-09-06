import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import { StyledSearchInput, WrapperSearchList, SearchList } from "./style";

const InputSearch = () => {
  return (
    <WrapperSearchList>
      <StyledSearchInput>
        <input type="text" placeholder="Search" />
        <SearchOutlined />
      </StyledSearchInput>
      {/* <SearchList>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </SearchList> */}
    </WrapperSearchList>
  );
};

export default InputSearch;
