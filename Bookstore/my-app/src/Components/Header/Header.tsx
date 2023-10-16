import React, { useEffect } from "react";
import InputSearch from "../InputSearch/InputSearch";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import { WrapperHeader, HeaderTitle, StyledInput } from "./style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ConterActions } from "../../store/actions/counterActions";

const Header = () => {
  //remove
  const { counterDecrement, counterIncrement } = ConterActions();
  const count = useTypedSelector((state) => state.counter.counter);

  //remove
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
        {/* <p>remove</p> */}
        <div>
          <button
            onClick={() => {
              counterDecrement();
            }}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              counterIncrement();
            }}
          >
            +
          </button>
          {/* <p>remove</p> */}
        </div>
      </WrapperHeader>
    </div>
  );
};

export default Header;
