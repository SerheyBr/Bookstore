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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { UserActions } from "../../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setUser } = UserActions();
  const user: any = useSelector<RootState>((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigate();

  const handlerSignUp = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }: { user: any }) => {
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          userName: name,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode);
      });
  };

  useEffect(() => {
    if (user.id) {
      navigation("/");
    }
  }, [user]);

  return (
    <WrapperBody>
      <WrapperInput>
        <CustomInput
          value={name}
          title={"Name"}
          type={"text"}
          placeholder={"Your name"}
          onChange={(event: any) => {
            setName(event.target.value);
          }}
        />
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          value={email}
          title={"Email"}
          type={"text"}
          placeholder={"Your email"}
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
        />
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          value={pass}
          title={"Password"}
          type={"Password"}
          placeholder={"Your password"}
          onChange={(event: any) => {
            setPass(event.target.value);
          }}
        />
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          value={confirmPass}
          title={"Confirm password"}
          type={"password"}
          placeholder={"Your confirm password"}
          onChange={(event: any) => {
            setConfirmPass(event.target.value);
          }}
        />
      </WrapperInput>
      {errorMessage ? <StyledError>{errorMessage}</StyledError> : ""}
      <StyledBtn>
        <CustomButton
          title={"sign up"}
          typebtn={"fill"}
          onClick={() => {
            handlerSignUp();
          }}
        />
      </StyledBtn>
    </WrapperBody>
  );
};

export default SignUp;
