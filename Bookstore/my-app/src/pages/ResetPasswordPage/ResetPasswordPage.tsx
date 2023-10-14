import React, { useState } from "react";
import {
  StyledBtn,
  StyledMessage,
  StyledTitle,
  WrapperBody,
  WrapperContainer,
  WrapperInput,
} from "./style";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";

const ResetPasswordPage = () => {
  const [test, setTest] = useState(false);
  const [email, setEmail] = useState("");

  const handlerTest = () => {
    setTest((prev) => !prev);
  };

  const handleInputValue = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <WrapperContainer>
        <WrapperBody>
          <StyledTitle>reset password</StyledTitle>
          {test ? (
            <StyledMessage>
              You will receive an email <span>{email}</span> with a link to
              reset your password!
            </StyledMessage>
          ) : (
            ""
          )}
          <WrapperInput>
            <CustomInput
              title={"Email"}
              type={"text"}
              placeholder={"Your email"}
              onChange={(event: any) => {
                handleInputValue(event);
              }}
            />
          </WrapperInput>
          <StyledBtn>
            <CustomButton
              onClick={handlerTest}
              title={"Reset"}
              typebtn={"fill"}
            />
          </StyledBtn>
        </WrapperBody>
      </WrapperContainer>
    </div>
  );
};

export default ResetPasswordPage;
