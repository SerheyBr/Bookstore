import React, { useEffect } from "react";
import InputSearch from "../InputSearch/InputSearch";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import { WrapperHeader, HeaderTitle, StyledInput } from "./style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  //remove
  const dispatch = useDispatch();
  //@ts-ignore
  const count = useSelector((store) => store.count);

  useEffect(() => {
    console.log(count);
  }, [count]);
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
              dispatch({ type: "DECREMENT" });
            }}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
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
