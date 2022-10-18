import productsJson from "../public/static/data/products.json";

export function getAllProducts(sortBy) {
  //"relevance", "HighToLow" , "LowToHigh"
  /* 
  Details to get:
  1. id
  2. images (array)
  3. title
  4. uniqTitle (for special key mapping or use id)
  5. vipPriceFlag
  6. bulkDiscountFlag
  7. moq
  8. lowPricePretty
  9. highPricePretty
  10. currencySymbol
  */
}

export function getProductFullInfo(id) {
  //search by id
  /*
  1. id
  2. images (array)
  3. title
  4. uniqTitle (for special key mapping or use id)
  5. lowPrice
  6. highPrice
  8. lowPricePretty
  9. highPricePretty
  10. currencySymbol
  11. descriptionHtml
  12. meta data (brand, model, brandImage)
  */
}
