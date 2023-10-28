import styled from "styled-components";

export const WrapperBody = styled("div")`
  padding: 32px;
  padding-bottom: 40px;
`;

export const WrapperInput = styled("div")`
  margin-bottom: 10px;
`;

export const StyledText = styled("p")`
  color: #31303763;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 40px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: black;
  }
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
