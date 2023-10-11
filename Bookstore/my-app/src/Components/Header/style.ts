import styled from "styled-components";

export const WrapperHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0 5px 0;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 72px;
`;

export const HeaderTitle = styled("h1")`
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  color: #313037;
  margin-right: 5px;
`;

export const StyledInput = styled("div")`
  width: 100%;
  max-width: 542px;
  @media (max-width: 768px) {
    display: none;
  }
`;
