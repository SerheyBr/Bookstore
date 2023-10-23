import React, { useState } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { WrapperContainer } from "./style";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

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
        {indexTab === 1 ? <SignIn /> : <SignUp />}
      </WrapperContainer>
    </div>
  );
};

export default SignUpSignInPage;
