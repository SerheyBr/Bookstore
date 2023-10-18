export const priceFormatting = (price: string): number => {
  const newPrice = price.split("$").join("");
  return +newPrice;
};
