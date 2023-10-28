import styled from "styled-components";

export const StyledUserIcon = styled("div")`
  width: 40px;
  height: 40px;
  margin: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  div {
    border: 3px solid #000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      15deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 126, 29, 0.5999649859943977) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    &:hover {
      box-shadow: 3px 3px 7px #7d0d0d94;
      /* border: 3px solid #7d0d0d94; */
    }
  }
  p {
    text-transform: uppercase;
    font-size: 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
