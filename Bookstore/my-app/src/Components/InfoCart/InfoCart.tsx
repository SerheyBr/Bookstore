import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { WrapperInfoCart } from "./style";

const InfoCart = () => {
  return (
    <WrapperInfoCart>
      <ul>
        <li>
          <h5>Sum total</h5>
          <p>$ 69.26</p>
        </li>
        <li>
          <h5>VAT</h5>
          <p>$ 12.50</p>
        </li>
        <li>
          <h5>Total:</h5>
          <p>$81.76</p>
        </li>
      </ul>
      <CustomButton title={"check out"} typebtn={"fill"} />
    </WrapperInfoCart>
  );
};

export default InfoCart;
