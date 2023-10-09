import styled from "styled-components";

export const WrapperCard = styled("div")`
  width: 33.333%;
  padding: 0 16px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    width: 50%;
    padding: 0 15px;
  }

  @media (max-width: 580px) {
    width: 100%;
    padding: 0;
  }
`;

export const ImgCard = styled("div")`
  background-color: #f4eefd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 21px;
  cursor: pointer;
`;

export const TitleCard = styled("h3")`
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  cursor: pointer;
`;

export const SubtitleCard = styled("p")`
  color: #a8a8a8;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;
`;

export const PriseCard = styled("p")`
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  justify-self: flex-end;
  margin-top: auto;
`;
