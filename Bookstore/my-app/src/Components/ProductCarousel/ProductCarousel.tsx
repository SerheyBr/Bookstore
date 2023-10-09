import React, { FC, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledCarusel, StyledCaruselItem, WrapperHeader } from "./style";
import { IBook } from "../../types/types";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface IProductCarousel {
  title: string;
}

const ProductCarousel: FC<IProductCarousel> = ({ title }) => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  const getCards = async () => {
    return await fetch("https://api.itbook.store/1.0/new", {
      mode: "cors",
    });
  };

  useEffect(() => {
    getCards()
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <div>
      <WrapperHeader>
        <h3>{title}</h3>
      </WrapperHeader>

      <StyledCarusel>
        <Swiper
          slidesPerView={1}
          //  navigation={true}
          breakpoints={{
            400: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
          }}
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          className="my-swiper"
        >
          {books
            ? books.map((book) => (
                <SwiperSlide key={book.isbn13}>
                  <StyledCaruselItem>
                    <ProductCard book={book} />
                  </StyledCaruselItem>
                </SwiperSlide>
              ))
            : " "}
        </Swiper>
      </StyledCarusel>
    </div>
  );
};

export default ProductCarousel;
