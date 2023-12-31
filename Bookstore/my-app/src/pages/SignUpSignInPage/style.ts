import styled from "styled-components";

export const WrapperContainer = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e7e7e7;
  margin-bottom: 70px;
  ul {
    display: flex;
    list-style-type: none;
    border-bottom: 1px solid #e7e7e7;
    color: #a8a8a8;
    li {
      position: relative;
      width: 50%;
      cursor: pointer;
    }
    li.active {
      color: #313037;
    }
    li.active::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      color: #313037;
      background-color: #000;
    }
    button {
      background-color: inherit;
      border: none;
      text-align: center;
      font-family: "Bebas Neue", sans-serif;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 1.2px;
      color: inherit;
      width: 100%;
      padding: 20px 20px;
      cursor: pointer;
    }
  }
`;
