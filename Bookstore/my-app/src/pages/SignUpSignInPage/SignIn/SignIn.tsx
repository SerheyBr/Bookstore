import React, { useEffect, useState } from "react";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { StyledBtn, StyledError, WrapperBody, WrapperInput } from "./style";
import { UserActions } from "../../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const SignIn = () => {
  const { setUser }: { setUser: any } = UserActions();
  const navigation = useNavigate();
  const user: any = useSelector<RootState>((state) => state.user);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hendlerLogIn = (email: any, password: any) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }: { user: any }) => {
        setUser({ email: user.email, id: user.uid, token: user.accessToken });
      })
      .catch((error) => {
        const errorCode = error.code;
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
          value={email}
          title={"Email"}
          type={"text"}
          placeholder={"Email"}
          onChange={(event: any) => {
            setEmail(event.target.value);
          }}
        />
      </WrapperInput>
      <WrapperInput>
        <CustomInput
          value={pass}
          title={"Password"}
          type={"password"}
          placeholder={"Password"}
          onChange={(event: any) => {
            setPass(event.target.value);
          }}
        />
      </WrapperInput>
      {errorMessage ? <StyledError>{errorMessage}</StyledError> : ""}
      <StyledBtn>
        <CustomButton
          title={"sign in"}
          typebtn={"fill"}
          onClick={() => {
            hendlerLogIn(email, pass);
          }}
        />
      </StyledBtn>
    </WrapperBody>
  );
};

export default SignIn;
