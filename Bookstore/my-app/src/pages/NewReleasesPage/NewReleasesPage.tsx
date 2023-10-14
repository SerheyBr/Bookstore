import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Title from "../../Components/Title/Title";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import { StyledTitle, WrapperCards, WrapperSubscription } from "./style";
import { IBook } from "../../types/types";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import { api } from "../../api/api";

const NewReleasesPage = () => {
  const [books, setBooks] = useState<null | IBook[]>(null);

  useEffect(() => {
    api.getNewReleases().then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="container">
      <StyledTitle>
        <Title title={"New Releases Books"} />
      </StyledTitle>
      <WrapperCards>
        {books
          ? books.map((book: IBook) => (
              <ProductCard key={book.isbn13} book={book}></ProductCard>
            ))
          : ""}
      </WrapperCards>
      <div>
        <CustomPagination />
      </div>
      <WrapperSubscription>
        <SubscriptionBlock />
      </WrapperSubscription>
    </div>
  );
};

export default NewReleasesPage;
