import { IBook } from "../types/types";

export const priceFormatting = (price: string): number => {
  const newPrice = price.split("$").join("");
  return +newPrice;
};

export const saveLocalStorageArray = (arr: IBook[], key: string) => {
  localStorage.setItem(key, JSON.stringify(arr));
};

export const cartItemQuantity = (arr: IBook[]) => {
  const result = arr.reduce((acc: number, el: any) => {
    return acc + el.inCart;
  }, 0);
  return result;
};

export const findElementFromArray = (array: IBook[], selectedBook: IBook) => {
  const book = array.find((el) => el.isbn13 === selectedBook.isbn13);
  return book;
};
