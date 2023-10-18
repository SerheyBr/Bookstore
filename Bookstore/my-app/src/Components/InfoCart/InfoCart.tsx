import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { WrapperInfoCart } from "./style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBook } from "../../types/types";
import { priceFormatting } from "../../utilits/priceFormatting";

const InfoCart = () => {
  const cart = useTypedSelector((state) => state.books.cart);

  const sumTotal = (arr: IBook[]): number => {
    const newArr = arr.reduce((acc, el) => {
      return acc + priceFormatting(el.price) * (el.inCart ? el.inCart : 0);
    }, 0);
    return +newArr.toFixed(2);
  };

  const vat = (percent: number, price: number): number => {
    let result = (percent / 100) * price;
    return +result.toFixed(2);
  };

  const total = () => {
    const result = sumTotal(cart) + vat(18, sumTotal(cart));
    return result.toFixed(2);
  };
  console.log(sumTotal(cart));
  console.log(vat(18, sumTotal(cart)));
  console.log(total());
  return (
    <WrapperInfoCart>
      <ul>
        <li>
          <h5>Sum total</h5>
          <p>${sumTotal(cart)}</p>
        </li>
        <li>
          <h5>VAT</h5>
          <p>${vat(18, sumTotal(cart))}</p>
        </li>
        <li>
          <h5>Total:</h5>
          <p>${total()}</p>
        </li>
      </ul>
      <CustomButton title={"check out"} typebtn={"fill"} />
    </WrapperInfoCart>
  );
};

export default InfoCart;
