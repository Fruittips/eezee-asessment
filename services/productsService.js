import productsJson from "../public/static/data/products.json";

export function getAllProducts(sortBy) {
  switch (sortBy) {
    case "HighToLow":
      return productsJson.sort((prev, next) => next.highPrice - prev.highPrice);
    case "LowToHigh":
      return productsJson.sort((prev, next) => prev.lowPrice - next.lowPrice);
    default:
      return productsJson;
  }
}

export function getProductFullInfo(id) {
  const filteredProduct = productsJson.filter((product) => product.id === id);

  return filteredProduct.length > 0 ? filteredProduct[0] : null;
}
