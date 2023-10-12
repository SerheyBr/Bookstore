import React from "react";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import Title from "../../Components/Title/Title";
import CustomInput from "../../Components/CustomInput/CustomInput";
import {
  StuledBtn,
  StyledInput,
  StyledTitle,
  WrapperBtns,
  WrapperContent,
  WrapperNewPassword,
  WrapperPassword,
  WrapperUserInfo,
} from "./style";
import CustomButton from "../../Components/CustomButton/CustomButton";

const AccountPage = () => {
  return (
    <div className="container">
      <ArrowBackPage />
      <StyledTitle>
        <Title title={"account"} />
      </StyledTitle>
      <WrapperContent>
        <WrapperUserInfo>
          <h5>Profile</h5>
          <div>
            <StyledInput>
              <CustomInput title={"Name"} type={"text"} placeholder={"Name"} />
            </StyledInput>
            <StyledInput>
              <CustomInput
                title={"Email"}
                type={"text"}
                placeholder={"Email"}
              />
            </StyledInput>
          </div>
        </WrapperUserInfo>
        <WrapperPassword>
          <h5>Password</h5>
          <div>
            <StyledInput>
              <CustomInput
                title={"Password"}
                type={"Password"}
                placeholder={"Password"}
              />
            </StyledInput>

            <WrapperNewPassword>
              <StyledInput>
                <CustomInput
                  title={"New password"}
                  type={"Password"}
                  placeholder={"New password"}
                />
              </StyledInput>

              <StyledInput>
                <CustomInput
                  title={"Confirm new password"}
                  type={"Password"}
                  placeholder={"Confirm new password"}
                />
              </StyledInput>
            </WrapperNewPassword>
          </div>
        </WrapperPassword>
      </WrapperContent>
      <WrapperBtns>
        <StuledBtn>
          <CustomButton title={"Save changes"} typebtn={"fill"} />
        </StuledBtn>
        <StuledBtn>
          <CustomButton title={"cancel"} typebtn={"fill"} />
        </StuledBtn>
      </WrapperBtns>
    </div>
  );
};

export default AccountPage;
