import productsJson from "../../public/static/data/products.json";

export default function handler(req, res) {
  res.status(200).json(productsJson);
}
