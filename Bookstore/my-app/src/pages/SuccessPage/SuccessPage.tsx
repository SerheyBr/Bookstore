import React, { useEffect } from "react";
import {
  StyledBtn,
  StyledMessage,
  StyledTitle,
  WrapperBody,
  WrapperContainer,
} from "./style";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
  const navigation = useNavigate();
  const { uid, token } = useParams();

  const activationToken = {
    uid,
    token,
  };

  const postActivation = async (token: any) => {
    axios({
      method: "post",
      url: "https://studapi.teachmeskills.by/auth/users/activation/",
      data: token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("актевировали новый аккаунт");
    //  const res = fetch(
    //    "https://studapi.teachmeskills.by/auth/users/activation/",
    //    {
    //      method: "POST",
    //      headers: {
    //        Accept: "application/json",
    //        "Content-Type": "application/json",
    //      },
    //      body: JSON.stringify(activationToken),
    //    }
    //  );
  };
  //   const postRequest = async (data: any) => {
  // 	axios({
  // 	  method: "post",
  // 	  url: "https://studapi.teachmeskills.by/auth/users/",
  // 	  data: data,
  // 	  headers: {
  // 		 Accept: "application/json",
  // 		 "Content-Type": "application/json",
  // 	  },
  // 	})
  // 	  .catch((error) => {
  // 		 if (error.response) {
  // 			setSuccessMessage(false);
  // 			const errorInput = error.response.data;
  // 			errorInput.username
  // 			  ? errorMessage("username", errorInput.username[0])
  // 			  : errorMessage("username", "");
  // 			errorInput.email
  // 			  ? errorMessage("email", errorInput.email[0])
  // 			  : errorMessage("email", "");
  // 			errorInput.password
  // 			  ? errorMessage("password", errorInput.password[0])
  // 			  : errorMessage("password", "");
  // 		 }
  // 	  })
  // 	  .then((data: any) => {
  // 		 if (data) {
  // 			if (data.status >= 200 && data.status <= 299) {
  // 			  errorMessage("username", "");
  // 			  errorMessage("email", "");
  // 			  errorMessage("password", "");
  // 			  setSuccessMessage(true);
  // 			}
  // 		 }
  // 	  });
  //  };

  useEffect(() => {
    postActivation(activationToken);
  }, []);

  return (
    <div className="container">
      <WrapperContainer>
        <WrapperBody>
          <StyledTitle>Succcess</StyledTitle>
          <StyledMessage>
            You have successfully registered your user!
          </StyledMessage>
          <StyledBtn>
            <CustomButton
              onClick={() => {
                navigation("/SignUpSignIn");
              }}
              title={"go back"}
              typebtn={"fill"}
            />
          </StyledBtn>
        </WrapperBody>
      </WrapperContainer>
    </div>
  );
};

export default SuccessPage;
