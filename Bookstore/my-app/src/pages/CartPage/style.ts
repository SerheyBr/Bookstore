import styled from "styled-components";

export const WrapperTitle = styled("div")`
  margin-bottom: 40px;
`;

export const StuledList = styled("ul")`
  list-style-type: none;
  li {
    padding-bottom: 20px;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 20px;
  }
`;

export const WrapperCartImg = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StuleCartImg = styled("div")`
  position: relative;
  max-width: 600px;
  svg {
    color: #00000012;
    height: 100%;
    width: 100%;
  }
  p {
    white-space: nowrap;
    font-size: 57px;
    color: #614d4d6b;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
