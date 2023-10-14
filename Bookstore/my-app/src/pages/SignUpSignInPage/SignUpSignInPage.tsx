import React, { useState } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import {
  StyledBtn,
  StyledText,
  WrapperBody,
  WrapperContainer,
  WrapperInput,
} from "./style";

const SignUpSignInPage = () => {
  const [indexTab, setIndexTab] = useState(1);

  const handlerToggleTabs = (index: number) => {
    setIndexTab(index);
  };
  return (
    <div className="container">
      <WrapperContainer>
        <ul>
          <li className={indexTab === 1 ? "active" : ""}>
            <button onClick={() => handlerToggleTabs(1)}>Sign in</button>
          </li>
          <li className={indexTab === 2 ? "active" : ""}>
            <button onClick={() => handlerToggleTabs(2)}>Sign up</button>
          </li>
        </ul>
        {indexTab === 1 ? (
          <WrapperBody>
            <WrapperInput>
              <CustomInput
                title={"Email"}
                type={"text"}
                placeholder={"Your email"}
              />
            </WrapperInput>
            <WrapperInput>
              <CustomInput
                title={"Password"}
                type={"password"}
                placeholder={"Your password"}
              />
            </WrapperInput>
            <StyledText>Forgot password ?</StyledText>
            <StyledBtn>
              <CustomButton title={"sign in"} typebtn={"fill"} />
            </StyledBtn>
          </WrapperBody>
        ) : (
          <WrapperBody>
            <WrapperInput>
              <CustomInput
                title={"Name"}
                type={"text"}
                placeholder={"Your name"}
              />
            </WrapperInput>
            <WrapperInput>
              <CustomInput
                title={"Email"}
                type={"text"}
                placeholder={"Your email"}
              />
            </WrapperInput>
            <WrapperInput>
              <CustomInput
                title={"Password"}
                type={"Password"}
                placeholder={"Your password"}
              />
            </WrapperInput>
            <WrapperInput>
              <CustomInput
                title={"Confirm password"}
                type={"password"}
                placeholder={"Your confirm password"}
              />
            </WrapperInput>
            <StyledBtn>
              <CustomButton title={"sign up"} typebtn={"fill"} />
            </StyledBtn>
          </WrapperBody>
        )}
      </WrapperContainer>
    </div>
  );
};

export default SignUpSignInPage;
