import React, { FC } from "react";
import { StyledCustomButton } from "./style";

interface ICustomButtonProps {
  title: string;
  typebtn: "fill" | "ghost";
}

const CustomButton: FC<ICustomButtonProps> = ({ title, typebtn }) => {
  return <StyledCustomButton typebtn={typebtn}>{title}</StyledCustomButton>;
};

export default CustomButton;
