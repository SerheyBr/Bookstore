import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Title from "../../Components/Title/Title";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import {
  StyledPagination,
  StyledTitle,
  WrapperCards,
  WrapperSubscription,
} from "./style";
import { IBook } from "../../types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

const SearchPage = () => {
  const [numberPages, setNumberPages] = useState(1);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const searchStringValue = useTypedSelector(
    (state) => state.search.stringResultSearch
  );

  const getSearchBooks = async (
    search: string | undefined,
    pageValue: string | number
  ) => {
    const res = await axios.get(
      `https://api.itbook.store/1.0/search/${searchStringValue}/${pageValue}`
    );
    const { data } = res;
    setNumberPages(Math.ceil(data.total / 10));
    setBooks(data.books);
    return data;
  };

  useEffect(() => {
    getSearchBooks(searchStringValue, page);
  }, [searchStringValue, page]);

  return (
    <div className="container">
      <StyledTitle>
        <Title title={`Search result: "${searchStringValue}"`} />
      </StyledTitle>
      <WrapperCards>
        {books
          ? books.map((book: IBook) => (
              <ProductCard key={book.isbn13} book={book}></ProductCard>
            ))
          : ""}
      </WrapperCards>
      <StyledPagination>
        <Pagination
          count={numberPages}
          onChange={(event, value) => setPage(value)}
        />
      </StyledPagination>

      <WrapperSubscription>
        <SubscriptionBlock />
      </WrapperSubscription>
    </div>
  );
};

export default SearchPage;
