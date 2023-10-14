import React from "react";
import {
  StyledBtn,
  StyledTitle,
  WrapperBody,
  WrapperContainer,
  WrapperInput,
} from "./style";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";

const NewPasswordPage = () => {
  return (
    <div className="container">
      <WrapperContainer>
        <WrapperBody>
          <StyledTitle>New password</StyledTitle>
          <WrapperInput>
            <CustomInput
              title={"Password"}
              type={"Password"}
              placeholder={"Your Password"}
            />
          </WrapperInput>
          <WrapperInput>
            <CustomInput
              title={"Confirm password"}
              type={"password"}
              placeholder={"Confirm your password"}
            />
          </WrapperInput>
          <StyledBtn>
            <CustomButton title={"set password"} typebtn={"fill"} />
          </StyledBtn>
        </WrapperBody>
      </WrapperContainer>
    </div>
  );
};

export default NewPasswordPage;
