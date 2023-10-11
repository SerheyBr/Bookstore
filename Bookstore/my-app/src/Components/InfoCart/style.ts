import styled from "styled-components";

export const WrapperInfoCart = styled("div")`
  max-width: 256px;
  margin-left: auto;
  margin-bottom: 70px;
  ul {
    list-style-type: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    color: #a8a8a8;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 16px;
  }
  li:last-child {
    color: #313037;
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }
  p {
    color: #313037;
  }
`;
