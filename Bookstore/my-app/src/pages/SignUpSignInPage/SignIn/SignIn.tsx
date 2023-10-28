import React, { useEffect, useState } from "react";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import {
  StyledBtn,
  StyledError,
  StyledMessage,
  StyledText,
  WrapperBody,
  WrapperInput,
} from "./style";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { UserActions } from "../../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

const SignIn = () => {
  const navigation = useNavigate();
  const user = useTypedSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const { userAuth } = UserActions();
  const userInfo = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(userInfo);

  const loginUser = () => {
    api
      .createJwtToken(userData)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("access_token", JSON.stringify(res.data.access));
          localStorage.setItem(
            "refresh_token",
            JSON.stringify(res.data.refresh)
          );
        }

        api.retrieveUser(res.data.access).then((res) => {
          if (res.data.id) {
            userAuth(res.data);
            navigation("/");
          }
        });
      })
      .catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log(error.response.data.detail);
      });
  };

  const handlerValueInput = (event: any, nameValue: string) => {
    setUserData((prev) => {
      return { ...prev, [nameValue]: event.target.value };
    });
  };

  return (
    <WrapperBody>
      {user.username ? (
        <StyledMessage>
          Hello <span>{user.username}</span>!
        </StyledMessage>
      ) : (
        ""
      )}
      <WrapperInput>
        <CustomInput
          title={"Email"}
          type={"text"}
          placeholder={"Your email"}
          onChange={(event: any) => handlerValueInput(event, "email")}
        />
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          title={"Password"}
          type={"password"}
          placeholder={"Your password"}
          onChange={(event: any) => handlerValueInput(event, "password")}
        />
      </WrapperInput>
      <StyledText
        onClick={() => {
          navigation("/password/reset");
        }}
      >
        Forgot password ?
      </StyledText>
      {errorMessage ? <StyledError>{errorMessage}</StyledError> : ""}
      <StyledBtn>
        <CustomButton
          title={"sign in"}
          typebtn={"fill"}
          onClick={() => loginUser()}
        />
      </StyledBtn>
    </WrapperBody>
  );
};

export default SignIn;
