import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import { WrapperHeader, HeaderTitle, StyledInput } from "./style";

const Header = () => {
  return (
    <div className="container">
      <WrapperHeader>
        <HeaderTitle>BOOKSTORE</HeaderTitle>
        <StyledInput>
          <InputSearch />
        </StyledInput>
        <HeaderIcons />
      </WrapperHeader>
    </div>
  );
};

export default Header;
