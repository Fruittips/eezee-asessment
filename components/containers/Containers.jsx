import {
  SixColumnTwoRowGridStyle,
  SixColumnAutoRowGridStyle,
} from "../layouts/style";
import {
  BrandCard,
  CategoryProductCard,
  ProductCardVertical,
} from "../cards/Cards";

export function BrandsContainer({ brands }) {
  return <div className="grid col-6">{SixColumnTwoRowGridStyle}</div>;
}

export function ProductsContainer({ products }) {
  return <div className="grid col-6">{SixColumnAutoRowGridStyle}</div>;
}
