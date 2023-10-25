import React from "react";
import ArrowBackPage from "../../Components/ArrowBackPage/ArrowBackPage";
import Title from "../../Components/Title/Title";
import CustomInput from "../../Components/CustomInput/CustomInput";
import {
  StuledBtn,
  StuledBtnLogout,
  StyledInput,
  StyledTitle,
  WrapperBtns,
  WrapperContent,
  WrapperNewPassword,
  WrapperPassword,
  WrapperUserInfo,
} from "./style";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { UserActions } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const { uidReset, tokenReset } = useParams();
  const user = useTypedSelector((state) => state.user);
  const navigation = useNavigate();
  const { userLogout } = UserActions();
  const handlerLogoutBtn = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    userLogout();
    navigation("/SignUpSignIn");
  };

  console.log(uidReset);
  console.log(tokenReset);

  //   const resetPassword = async (email: any) => {
  //     return await axios({
  //       method: "post",
  //       url: "https://studapi.teachmeskills.by/auth/users/reset_password/",
  //       data: { email: email },
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   };

  //   const resetPasswordConfirm = async (email: any) => {
  //     return await axios({
  //       method: "post",
  //       url: "/auth/users/reset_password_confirm/",
  //       data: { email: email },
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   };

  //   const resetPasswordData = () => {
  //     resetPassword(user.email).then((data) => console.log(data));
  //   };

  return (
    <div className="container">
      <ArrowBackPage />
      <StyledTitle>
        <Title title={"account"} />
      </StyledTitle>
      <WrapperContent>
        <WrapperUserInfo>
          <h5>Profile</h5>
          <div>
            <StyledInput>
              <CustomInput
                title={"Name"}
                type={"text"}
                value={user.username}
                placeholder={"Name"}
                dislabel={true}
              />
            </StyledInput>
            <StyledInput>
              <CustomInput
                title={"Email"}
                type={"text"}
                value={user.email}
                placeholder={"Email"}
                dislabel={true}
              />
            </StyledInput>
          </div>
        </WrapperUserInfo>
        {/* <WrapperPassword>
          <h5>Password</h5>
          <div>
            <StyledInput>
              <CustomInput
                title={"Password"}
                type={"Password"}
                placeholder={"Password"}
              />
            </StyledInput>
            <button
              onClick={() => {
                navigation("/password/reset");
              }}
            >
              Reset password
            </button>
            <WrapperNewPassword>
              <StyledInput>
                <CustomInput
                  title={"New password"}
                  type={"Password"}
                  placeholder={"New password"}
                />
              </StyledInput>

              <StyledInput>
                <CustomInput
                  title={"Confirm new password"}
                  type={"Password"}
                  placeholder={"Confirm new password"}
                />
              </StyledInput>
            </WrapperNewPassword>
          </div>
        </WrapperPassword> */}
      </WrapperContent>
      <WrapperBtns>
        <StuledBtnLogout>
          <CustomButton
            title={"logout"}
            typebtn={"fill"}
            onClick={() => {
              handlerLogoutBtn();
            }}
          />
        </StuledBtnLogout>
        {/* <StuledBtn>
          <CustomButton
            title={"Save changes"}
            typebtn={"fill"}
            onClick={() => {
              resetPasswordData();
            }}
          />
        </StuledBtn> */}
        {/* <StuledBtn>
          <CustomButton title={"cancel"} typebtn={"fill"} />
        </StuledBtn> */}
      </WrapperBtns>
    </div>
  );
};

export default AccountPage;
