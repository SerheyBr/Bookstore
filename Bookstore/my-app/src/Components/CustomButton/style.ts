import styled from "styled-components";

interface ICustomButtonProps {
  typebtn: "fill" | "ghost";
  fontSize: string;
}

export const StyledCustomButton = styled("button")<ICustomButtonProps>`
  border: none;
  background-color: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  transition: all 0.3s;
  cursor: pointer;
  ${(props) => {
    if (props.typebtn === "fill") {
      return "background-color: #313037; color: #fff;";
    }
    if (props.typebtn === "ghost") {
      return "background-color: inherit;";
    }
  }}
  &:hover {
    ${(props) => {
      if (props.typebtn === "fill") {
        return "background-color: #5B5A62; ";
      }
      if (props.typebtn === "ghost") {
        return "color: #5B5A62;";
      }
    }}
  }
  &:active {
    ${(props) => {
      if (props.typebtn === "fill") {
        return "background-color: #A8A8A8; ";
      }
      if (props.typebtn === "ghost") {
        return "color: #A8A8A8;";
      }
    }}
  }
`;
