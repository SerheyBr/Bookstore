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
import axios from "axios";

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

  const handlerValueInput = (event: any, nameValue: string) => {
    setInputValue((prev) => {
      return { ...prev, [nameValue]: event.target.value };
    });
  };

  const postRequest = async (data: any) => {
    //  axios({
    //    method: "post",
    //    url: "https://studapi.teachmeskills.by/auth/users/",
    //    data: data,
    //    headers: {
    //      Accept: "application/json",
    //      "Content-Type": "application/json",
    //    },
    //  })
    api
      .authUser(data)
      .catch((error) => {
        if (error.response) {
          setSuccessMessage(false);
          const errorInput = error.response.data;
          errorInput.username
            ? errorMessage("username", errorInput.username[0])
            : errorMessage("username", "");
          errorInput.email
            ? errorMessage("email", errorInput.email[0])
            : errorMessage("email", "");
          errorInput.password
            ? errorMessage("password", errorInput.password[0])
            : errorMessage("password", "");
        }
      })
      .then((data: any) => {
        if (data) {
          if (data.status >= 200 && data.status <= 299) {
            errorMessage("username", "");
            errorMessage("email", "");
            errorMessage("password", "");
            setSuccessMessage(true);
          }
        }
      });
    console.log("завели новый акквунт");
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
          onClick={() => {
            postRequest(inputValue);
          }}
        />
      </StyledBtn>
    </WrapperBody>
  );
};

export default SignUp;
