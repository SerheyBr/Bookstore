import React, { useState } from "react";
import {
  StyledBtn,
  StyledError,
  StyledTitle,
  WrapperBody,
  WrapperContainer,
  WrapperInput,
} from "./style";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

const NewPasswordPage = () => {
  const { uidReset, tokenReset } = useParams();
  const newPasswordData = {
    uid: uidReset,
    token: tokenReset,
    new_password: "",
    confirm_password: "",
  };
  const navigation = useNavigate();
  const [errorMessage, seteErrorMessage] = useState("");
  const [newPassword, setNewpassword] = useState(newPasswordData);

  const handlerValueInput = (event: any, name: string) => {
    setNewpassword((prev) => {
      return { ...prev, [name]: event.target.value };
    });
  };

  const passwordComparison = (password1: string, password2: string) => {
    if (!(password1 === password2)) {
      seteErrorMessage("An invalid password has been entered.");
      return false;
    }
    return true;
  };

  const handlerSetPasswordBtn = () => {
    seteErrorMessage("");

    if (
      passwordComparison(newPassword.new_password, newPassword.confirm_password)
    ) {
      api
        .newPassword(newPassword)
        .then(() => {
          navigation("/SignUpSignIn");
        })
        .catch((error) => {
          seteErrorMessage(error.response.data.new_password[0]);
        });
    }
  };

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
              onChange={(event: any) => {
                handlerValueInput(event, "new_password");
              }}
            />
            <StyledError>{errorMessage}</StyledError>
          </WrapperInput>
          <WrapperInput>
            <CustomInput
              title={"Confirm password"}
              type={"password"}
              placeholder={"Confirm your password"}
              onChange={(event: any) => {
                handlerValueInput(event, "confirm_password");
              }}
            />
          </WrapperInput>
          <StyledBtn>
            <CustomButton
              title={"set password"}
              typebtn={"fill"}
              onClick={() => handlerSetPasswordBtn()}
            />
          </StyledBtn>
        </WrapperBody>
      </WrapperContainer>
    </div>
  );
};

export default NewPasswordPage;
