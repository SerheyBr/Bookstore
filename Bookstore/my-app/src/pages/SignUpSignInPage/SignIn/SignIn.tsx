import React, { useState } from "react";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import {
  StyledBtn,
  StyledMessage,
  StyledText,
  WrapperBody,
  WrapperInput,
} from "./style";
import axios from "axios";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { UserActions } from "../../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

const SignIn = () => {
  const navigation = useNavigate();
  const user = useTypedSelector((state) => state.user);
  const { userAuth } = UserActions();
  const userInfo = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(userInfo);

  //   const createJwtToken = async (user: any) => {
  //     console.log("забрали токены");
  //     return await axios({
  //       method: "post",
  //       url: "https://studapi.teachmeskills.by/auth/jwt/create/",
  //       data: user,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   };

  //   const retrieveUser = async (token: any) => {
  //     console.log("передаем access токен и получаем пользователя");
  //     return await axios({
  //       method: "get",
  //       url: "https://studapi.teachmeskills.by/auth/users/me/",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   };

  const loginUser = () => {
    api.createJwtToken(userData).then((res) => {
      if (res.data) {
        localStorage.setItem("access_token", JSON.stringify(res.data.access));
        localStorage.setItem("refresh_token", JSON.stringify(res.data.refresh));
      }

      api.retrieveUser(res.data.access).then((res) => {
        if (res.data.id) {
          userAuth(res.data);
          navigation("/");
        }
      });
    });
  };

  //   .then((data) => {
  // 	if (data.data) {
  // 	  localStorage.setItem("access_token", JSON.stringify(data.data.access));
  // 	  localStorage.setItem(
  // 		 "refresh_token",
  // 		 JSON.stringify(data.data.refresh)
  // 	  );
  // 	}
  //  });

  //   const accessToken = localStorage.getItem("access_token");
  //   const refreshToken = localStorage.getItem("refresh_token");
  //   console.log(accessToken);
  //   console.log(refreshToken);

  //   const retrieveUser = async (user: any) => {
  //     axios({
  //       method: "get",
  //       url: "https://studapi.teachmeskills.by/auth/users/me/",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "X-CSRFToken": accessToken,
  //       },
  //     }).then((data) => {
  //       console.log(data);
  //     });
  //   };

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
