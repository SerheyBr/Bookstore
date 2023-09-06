import React, { FC } from "react";
import { StyledCustomButton } from "./style";

interface ICustomButtonProps {
  title: string;
  typebtn: "fill" | "ghost";
  fontSize: string;
}

const CustomButton: FC<ICustomButtonProps> = ({ title, typebtn, fontSize }) => {
  return (
    <StyledCustomButton fontSize={fontSize} typebtn={typebtn}>
      {title}
    </StyledCustomButton>
  );
};

export default CustomButton;
