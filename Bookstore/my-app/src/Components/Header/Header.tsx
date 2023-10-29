import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import { WrapperHeader, HeaderTitle, StyledInput } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <WrapperHeader>
        <HeaderTitle>
          <Link to={"/"}>BOOKSTORE</Link>
        </HeaderTitle>
        <StyledInput>
          <InputSearch />
        </StyledInput>
        <HeaderIcons />
      </WrapperHeader>
    </div>
  );
};

export default Header;
