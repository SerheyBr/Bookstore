import styled from "styled-components";

export const StyledTitle = styled("div")`
  margin-bottom: 50px;
`;

export const WrapperContent = styled("div")`
  margin-bottom: 50px;
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

export const StuledBtnLogout = styled(StuledBtn)`
  margin: 0;
  margin-right: auto;
  button {
    background-color: #ff000080;
    &:hover {
      background-color: #ff0303ad;
    }
    &:active {
      background-color: #392a2ad4;
    }
  }
  p {
    font-size: 16px;
    margin-top: 8px;
    color: #00000061;
  }
  span {
    color: #000000d4;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const WrapperItems = styled("div")`
  display: flex;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const WrapperBox = styled("div")`
  position: relative;
  flex: 1 1 50%;
  height: 200px;
  margin: 0 15px;
  background-color: #c6c9f357;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px #c6c9f3a8;
  }
  h4 {
    font-size: 24px;
    color: #8b94e3;
    text-transform: uppercase;
  }
  p {
    color: #0000008f;
  }
  div {
    position: absolute;
    bottom: 10px;
    right: 20px;
    width: 80px;
    height: 80px;
  }
  svg {
    width: 100%;
    height: 100%;
    color: #00000029;
  }
  span {
    font-weight: 800;
  }
  a {
    height: 100%;
    display: block;
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
