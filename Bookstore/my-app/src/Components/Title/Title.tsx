import React, { FC } from "react";
import { StyledTitle } from "./style";

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
