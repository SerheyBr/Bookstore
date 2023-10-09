import styled from "styled-components";

export const StyledTitle = styled("div")`
  margin-bottom: 48px;
`;

export const WrapperCards = styled("div")`
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
  margin-bottom: 48px;

  @media (max-width: 769px) {
    margin: 0 -15px;
  }

  @media (max-width: 580px) {
    margin: 0;
  }
`;

export const WrapperSubscription = styled("div")`
  margin-bottom: 72px;
`;
