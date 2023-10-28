import styled from "styled-components";

export const WrapperContainer = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e7e7e7;
  margin-bottom: 70px;
`;

export const StyledTitle = styled("p")`
  color: #313037;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin-bottom: 32px;
`;

export const WrapperBody = styled("div")`
  padding: 32px;
  padding-bottom: 40px;
`;

export const WrapperInput = styled("div")`
  margin-bottom: 10px;
`;

export const StyledBtn = styled("div")`
  height: 56px;
  margin-top: 40px;
`;

export const StyledMessage = styled("div")`
  padding: 20px;
  background-color: #f4eefd;
  color: #313037;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
  span {
    font-weight: 700;
  }
`;

export const StyledError = styled("p")`
  color: red;
  font-size: 12px;
`;
