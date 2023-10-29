import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Title from "../../Components/Title/Title";
import SubscriptionBlock from "../../Components/SubscriptionBlock/SubscriptionBlock";
import { StyledTitle, WrapperCards, WrapperSubscription } from "./style";
import { IBook } from "../../types/types";
import { getNewRelises } from "../../store/actions/booksActions";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const NewReleasesPage = () => {
  const dispath = useDispatch();
  const books = useTypedSelector((store: any) => store.books.newRelises);

  useEffect(() => {
    //  @ts-ignore
    dispath(getNewRelises());
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
      <WrapperSubscription>
        <SubscriptionBlock />
      </WrapperSubscription>
    </div>
  );
};

export default NewReleasesPage;
