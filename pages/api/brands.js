import brandsJson from "../../public/static/data/brands.json";

export default function handler(req, res) {
  res.status(200).json(brandsJson);
}
