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
import { api } from "../../api/api";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setshowMessage] = useState(false);

  const handlerResetPasswordBtn = () => {
    setshowMessage(true);
    api.resetPassword(email).then((data) => console.log(data));
  };

  return (
    <div className="container">
      <WrapperContainer>
        <WrapperBody>
          <StyledTitle>reset password</StyledTitle>
          {showMessage ? (
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
              onChange={(event: any) => setEmail(event.target.value)}
            />
          </WrapperInput>
          <StyledBtn>
            <CustomButton
              onClick={handlerResetPasswordBtn}
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
