import styled from "styled-components";

export const WrapperFullCard = styled("div")`
  display: flex;
  margin: 0 -64px;

  @media (max-width: 1300px) {
    margin: 0 -40px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const ItemFullCard = styled("div")`
  width: 50%;
  padding: 0 64px;
  &:first-child {
    align-self: flex-start;
    @media (max-width: 900px) {
      align-self: center;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1300px) {
    padding: 0 40px;
  }
  @media (max-width: 900px) {
    width: 80%;
    padding: 0;
  }
  @media (max-width: 769px) {
    width: 100%;
    padding: 0;
  }
`;

export const StyledImg = styled("div")`
  position: relative;
  background-color: #fee9e2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledBtnLick = styled("button")`
  border: none;
  width: 56px;
  height: 56px;
  background-color: #313037;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  svg {
    color: #fc857f;
    transition: all 0.3s;
  }

  &:hover {
    svg {
      color: #ff2f2ffc;
    }
  }
`;

export const WrapperBookInfo = styled("div")`
  /* width: 100%; */
  border-top: 1px solid #e7e7e7;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const WrapperPriceStars = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const StyledPrice = styled("p")`
  color: #313037;
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
`;

export const StyledListItem = styled("li")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const StyledTitleDetails = styled("p")`
  color: #a8a8a8;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
`;

export const StyledBtnMore = styled("button")`
  margin-bottom: 60px;
  border: none;
  background-color: inherit;
  font-weight: 700;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
  }
`;

export const StyledBtnAdd = styled("div")`
  position: relative;
  height: 56px;
  width: 100%;
  margin-bottom: 40px;
  z-index: 1;
  div {
    position: absolute;
    top: -15px;
    right: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d923d;
    color: #fff;
  }
  p {
    position: absolute;
    bottom: -2px;
    right: -5px;
    width: 20px;
    height: 20px;
    background-color: #3d923d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

export const StyledBtnPreview = styled("div")`
  background-color: inherit;
  color: #313037;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: auto;
  button {
    font-size: 16px;
  }
`;
