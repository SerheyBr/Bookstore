import styled from "styled-components";

export const WrapperCard = styled("div")`
  position: relative;
  width: 33.333%;
  padding: 0 16px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  &:hover .card__img {
    background-color: #e6d6ff;
  }

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
  transition: all 0.3s;
  img {
    transition: all 0.3s;
  }
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

export const StyledNotLikeBtn = styled("div")`
  position: absolute;
  top: 5px;
  right: 13px;
  transform: translate(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  svg {
    color: #bb2eac6b;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    &:hover {
      color: #bb2eac;
    }
  }
`;

export const StyledLikeBtn = styled(StyledNotLikeBtn)`
  /* svg {
    color: #bb2eacbf;
    &:hover {
      color: #bb2eac6b;
    }
  } */
`;
