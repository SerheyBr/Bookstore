import styled from "styled-components";

export const WrapperHeader = styled("div")`
  margin-bottom: 50px;
  h3 {
    color: #313037;
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
  }
`;

export const StyledCarusel = styled("div")`
  margin-bottom: 50px;
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledCaruselItem = styled("div")`
  width: 100%;
  height: 480px;
  .card {
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: left;
    &__img {
      height: 264px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__subtitle {
      margin-bottom: 20px;
    }
    &__prise {
      margin-top: 0;
    }
  }
`;
