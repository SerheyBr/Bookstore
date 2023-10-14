import React, { FC, useEffect, useState } from "react";
import { StyledImg, StyledTitle, WrapperCardSearch } from "./style";
import { api } from "../../api/api";

interface IBook {
  book: any;
}

const SearchCardProduct: FC<IBook> = ({ book }) => {
  //   const [books, setBooks] = useState<null | IBook[]>(null);

  //   useEffect(() => {
  //     api.getSearchBooks("mong").then((data) => setBooks(data.books));
  //   }, []);

  return (
    <WrapperCardSearch>
      <StyledImg>
        <div>
          <img src={book.image} />
        </div>
      </StyledImg>
      <StyledTitle>{book.title}</StyledTitle>
    </WrapperCardSearch>
  );
};

export default SearchCardProduct;
