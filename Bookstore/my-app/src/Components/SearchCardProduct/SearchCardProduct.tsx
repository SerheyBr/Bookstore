import React, { FC, useEffect, useState } from "react";
import { StyledImg, StyledTitle, WrapperCardSearch } from "./style";

interface IBook {
  book: any;
}

const SearchCardProduct: FC<IBook> = ({ book }) => {
  //   const [books, setBooks] = useState<null | IBook[]>(null);

  //   const getCards = async () => {
  //     return await fetch("https://api.itbook.store/1.0/search/mong", {
  //       mode: "cors",
  //     });
  //   };

  //   useEffect(() => {
  //     getCards()
  //       .then((res) => res.json())
  //       .then((data) => setBooks(data.books));
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
