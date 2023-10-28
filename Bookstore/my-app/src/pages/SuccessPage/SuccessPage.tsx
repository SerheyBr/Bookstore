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
import { api } from "../../api/api";

const SuccessPage = () => {
  const navigation = useNavigate();
  const { uid, token } = useParams();
  const activationToken = {
    uid,
    token,
  };

  const postActivation = async (token: any) => {
    api.activationUser(token);
  };

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
