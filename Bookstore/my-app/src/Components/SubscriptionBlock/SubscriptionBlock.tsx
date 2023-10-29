import React from "react";
import { WrapperSubscriptionBlock, StyledButton } from "./style";
import CustomButton from "../CustomButton/CustomButton";

const SubscriptionBlock = () => {
  return (
    <WrapperSubscriptionBlock>
      <h3>Subscribe to Newsletter</h3>
      <p>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </p>
      <label>
        <input type="text" placeholder="Your email" />
        <StyledButton>
          <CustomButton title={"Subscribe"} typebtn={"fill"} />
        </StyledButton>
      </label>
    </WrapperSubscriptionBlock>
  );
};

export default SubscriptionBlock;
