import React, { useEffect } from "react";
import Title from "../../Components/Title/Title";
import CardInCart from "../../Components/CardInCart/CardInCart";
import {
  StuleCartImg,
  StuledList,
  WrapperTitle,
  WrapperCartImg,
} from "./style";
import InfoCart from "../../Components/InfoCart/InfoCart";
import ArrowBackPage from "../../Components/ArrowGoHome/ArrowGoHome";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { saveLocalStorageArray } from "../../utilits/helpers";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigation = useNavigate();
  const cartBooks = useTypedSelector((state) => state.books.cart);

  //   useEffect(() => {
  //     navigation("/cart");
  //   }, []);

  useEffect(() => {
    saveLocalStorageArray(cartBooks, "cart");
  }, [cartBooks]);

  return (
    <div className="container">
      <ArrowBackPage />
      <WrapperTitle>
        <Title title={"Your cart"} />
      </WrapperTitle>
      {cartBooks.length ? (
        <>
          <StuledList>
            {cartBooks.map((cartBooks) => (
              <li key={cartBooks.isbn13}>
                <CardInCart book={cartBooks} />
              </li>
            ))}
          </StuledList>
          <InfoCart />
        </>
      ) : (
        <WrapperCartImg>
          <StuleCartImg>
            <ShoppingCartOutlinedIcon />
            <p>empty cart</p>
          </StuleCartImg>
        </WrapperCartImg>
      )}
    </div>
  );
};

export default CartPage;
