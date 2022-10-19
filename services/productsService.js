import productsJson from "../public/static/data/products.json";

export function getAllProducts(sortBy) {
  switch (sortBy) {
    case "HighToLow":
      return productsJson.sort((prev, next) => next.highPrice - prev.highPrice);
    case "LowToHigh":
      return productsJson.sort((prev, next) => prev.lowPrice - next.lowPrice);
    case "relevance":
      return productsJson;
    default:
      return productsJson;
  }
}

export function getProductFullInfo(id) {
  return productsJson.filter((product) => product.id === id)[0];
}
