import styled from "styled-components";

export const WrapperCardSearch = styled("div")`
  display: flex;
  align-items: center;
`;

export const StyledImg = styled("div")`
  background-color: #629393;
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  @media (max-width: 765px) {
    display: none;
  }
  div {
    width: 60px;
    height: 60px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledTitle = styled("p")`
  color: #313037;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  @media (max-width: 765px) {
    line-height: 26px;
  }
`;
