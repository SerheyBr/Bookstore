import styled from "styled-components";

export const StyledTitle = styled("div")`
  margin-bottom: 50px;
`;

export const WrapperContent = styled("div")`
  margin-bottom: 50px;
  border-bottom: 1px solid #e7e7e7;
`;

export const WrapperUserInfo = styled("div")`
  margin-bottom: 50px;
  h5 {
    color: #313037;
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  div {
    display: flex;

    @media (max-width: 650px) {
      flex-direction: column;
    }
  }
`;

export const WrapperPassword = styled("div")`
  margin-bottom: 50px;
  h5 {
    color: #313037;
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const WrapperNewPassword = styled("div")`
  display: flex;
  h5 {
    color: #313037;
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled("div")`
  width: 50%;
  padding: 0 15px;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const WrapperBtns = styled("div")`
  display: flex;
  justify-content: end;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StuledBtn = styled("div")`
  width: 260px;
  margin-left: 20px;
  margin-bottom: 10px;
  height: 56px;

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;
