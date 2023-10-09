import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Title from "../../Components/Title/Title";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import { StyledTitle, WrapperCards, WrapperSubscription } from "./style";
import { IBook } from "../../types/types";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";

const NewReleasesPage = () => {
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
