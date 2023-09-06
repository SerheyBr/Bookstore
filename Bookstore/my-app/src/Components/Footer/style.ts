import styled from "styled-components";

export const WrapperFooter = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px;
  border-top: 1px solid #a8a8a8;
  color: #a8a8a8;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;

  @media (max-width: 350px) {
    justify-content: center;
  }
`;
