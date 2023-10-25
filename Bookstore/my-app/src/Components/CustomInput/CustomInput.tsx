import React, { FC } from "react";
import { StyledCustomInput } from "./style";

interface ICustomInputProps {
  title: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: any;
  dislabel?: boolean;
}

const CustomInput: FC<ICustomInputProps> = ({
  title,
  type,
  placeholder,
  value,
  onChange,
  dislabel = false,
}) => {
  return (
    <StyledCustomInput>
      <p>{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={dislabel}
      />
    </StyledCustomInput>
  );
};

export default CustomInput;
