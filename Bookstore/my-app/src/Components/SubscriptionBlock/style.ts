import styled from "styled-components";

export const WrapperSubscriptionBlock = styled("div")`
  background-color: #f4eefd;
  padding: 56px 64px;

  h3 {
    color: #313037;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    text-transform: uppercase;
    font-family: "Bebas Neue", sans-serif;
  }

  p {
    color: #a8a8a8;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 32px;
  }

  label {
    display: flex;
  }

  input {
    width: 100%;
    padding: 16px 24px;
    color: #a8a8a8;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    border: none;
    outline: none;
  }

  @media (max-width: 640px) {
    padding: 24px;

    h3 {
      font-size: 28px;
      line-height: 40px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 24px;
    }
    label {
      flex-wrap: wrap;
    }

    input {
      margin-bottom: 24px;
    }
  }
`;

export const StyledButton = styled("div")`
  max-width: 147px;
  width: 100%;
  font-family: "Bebas Neue", sans-serif;
  @media (max-width: 640px) {
    max-width: 100%;
    height: 56px;
  }
`;
