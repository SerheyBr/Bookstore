import React from "react";
import { WrapperSubscriptionBlock, StyledButton } from "./style";
import CustomButton from "../CustomButton/CustomButton";

const SubscriptionBlock = () => {
  return (
    <div className="container">
      <WrapperSubscriptionBlock>
        <h3>Subscribe to Newsletter</h3>
        <p>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <label>
          <input type="text" placeholder="Your email" />
          <StyledButton>
            <CustomButton
              title={"Subscribe"}
              typebtn={"fill"}
              fontSize={"18px"}
            />
          </StyledButton>
        </label>
      </WrapperSubscriptionBlock>
    </div>
  );
};

export default SubscriptionBlock;
