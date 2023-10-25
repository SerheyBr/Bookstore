import React, { useState } from "react";
import {
  StyledBtn,
  StyledTitle,
  WrapperBody,
  WrapperContainer,
  WrapperInput,
} from "./style";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

// const resetPasswordConfirm = async (data: any) => {
//   return await axios({
//     method: "post",
//     url: "https://studapi.teachmeskills.by/auth/users/reset_password_confirm/",
//     data: data,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
// };

const NewPasswordPage = () => {
  const navigation = useNavigate();
  const { uidReset, tokenReset } = useParams();

  const newPasswordData = {
    uid: uidReset,
    token: tokenReset,
    new_password: "",
  };

  const [newPassword, setNewpassword] = useState(newPasswordData);

  const handlerValueInput = (event: any) => {
    setNewpassword((prev) => {
      return { ...prev, new_password: event.target.value };
    });
  };

  //   const resetPasswordRequest = () => {
  //     resetPasswordConfirm(newPassword)
  //       .then((data) => console.log(data))
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  console.log(newPassword);

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
                handlerValueInput(event);
              }}
            />
          </WrapperInput>
          <WrapperInput>
            <CustomInput
              title={"Confirm password"}
              type={"password"}
              placeholder={"Confirm your password"}
            />
          </WrapperInput>
          <StyledBtn>
            <CustomButton
              title={"set password"}
              typebtn={"fill"}
              onClick={() => {
                api.newPassword(newPassword).then(() => {
                  navigation("/SignUpSignIn");
                });
              }}
            />
          </StyledBtn>
        </WrapperBody>
      </WrapperContainer>
    </div>
  );
};

export default NewPasswordPage;
