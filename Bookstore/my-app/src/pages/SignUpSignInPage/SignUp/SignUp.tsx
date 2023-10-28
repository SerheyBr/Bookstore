import React, { useEffect, useState } from "react";
import {
  StyledBtn,
  StyledError,
  StyledMessage,
  WrapperBody,
  WrapperInput,
} from "./style";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { api } from "../../../api/api";

const SignUp = () => {
  const userData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const errorEnterUser = {
    username: "",
    email: "",
    password: "",
  };
  const [inputValue, setInputValue] = useState(userData);
  const [errorEnter, setErrorEnter] = useState(errorEnterUser);
  const [successMessage, setSuccessMessage] = useState(false);

  const errorMessage = (inputName: string, message: string) => {
    setErrorEnter((prev) => {
      return { ...prev, [inputName]: message };
    });
  };

  const errorCheck = (error: any, inputName: string) => {
    error[inputName]
      ? errorMessage(inputName, error[inputName][0])
      : errorMessage(inputName, "");
  };

  const handlerValueInput = (event: any, nameValue: string) => {
    setInputValue((prev) => {
      return { ...prev, [nameValue]: event.target.value };
    });
  };

  const removegAllErrorMessages = () => {
    errorMessage("username", "");
    errorMessage("email", "");
    errorMessage("password", "");
  };

  const passwordComparison = (password1: string, password2: string) => {
    if (!(password1 === password2)) {
      errorMessage("password", "An invalid password has been entered.");
      return false;
    }
    return true;
  };

  const postRequest = async (data: any) => {
    api
      .authUser(data)
      .catch((error) => {
        if (error.response) {
          setSuccessMessage(false);
          const errorInput = error.response.data;
          errorCheck(errorInput, "username");
          errorCheck(errorInput, "email");
          errorCheck(errorInput, "password");
          console.log(error);
        }
      })
      .then((data: any) => {
        if (data) {
          if (data.status >= 200 && data.status <= 299) {
            removegAllErrorMessages();
            setSuccessMessage(true);
          }
        }
      });
  };

  const handlerSignUp = async () => {
    removegAllErrorMessages();
    if (passwordComparison(inputValue.password, inputValue.confirmPassword)) {
      postRequest(inputValue);
    }
  };

  return (
    <WrapperBody>
      {successMessage ? (
        <StyledMessage>
          A letter has been sent to your mail: <span>{inputValue.email}</span>
        </StyledMessage>
      ) : (
        ""
      )}
      <WrapperInput>
        <CustomInput
          title={"Name"}
          type={"text"}
          placeholder={"Your name"}
          onChange={(event: any) => {
            handlerValueInput(event, "username");
          }}
        />
        {errorEnter.username ? (
          <StyledError>{errorEnter.username}</StyledError>
        ) : (
          ""
        )}
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          title={"Email"}
          type={"text"}
          placeholder={"Your email"}
          onChange={(event: any) => {
            handlerValueInput(event, "email");
          }}
        />
        {errorEnter.email ? <StyledError>{errorEnter.email}</StyledError> : ""}
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          title={"Password"}
          type={"Password"}
          placeholder={"Your password"}
          onChange={(event: any) => {
            handlerValueInput(event, "password");
          }}
        />
        {errorEnter.password ? (
          <StyledError>{errorEnter.password}</StyledError>
        ) : (
          ""
        )}
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          title={"Confirm password"}
          type={"password"}
          placeholder={"Your confirm password"}
          onChange={(event: any) => {
            handlerValueInput(event, "confirmPassword");
          }}
        />
      </WrapperInput>
      <StyledBtn>
        <CustomButton
          title={"sign up"}
          typebtn={"fill"}
          onClick={() => handlerSignUp()}
        />
      </StyledBtn>
    </WrapperBody>
  );
};

export default SignUp;
