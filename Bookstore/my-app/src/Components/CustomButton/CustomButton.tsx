import React, { FC } from "react";
import { StyledCustomButton } from "./style";

interface ICustomButtonProps {
  title: string;
  typebtn: "fill" | "ghost";
  onClick?: any;
}

const CustomButton: FC<ICustomButtonProps> = ({ title, typebtn, onClick }) => {
  return (
    <StyledCustomButton onClick={onClick} typebtn={typebtn}>
      {title}
    </StyledCustomButton>
  );
};

export default CustomButton;
