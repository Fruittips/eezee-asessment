//TODO: come up with better name for this file
import { BrandCard, ProductCardVertical } from "../cards/Cards";

export function BrandsContainer({ brands }) {
  return (
    <div className="flex-row flex-gap flex-wrap">
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
    </div>
  );
}

export function ProductsContainer({ products }) {
  return (
    <div className="flex-row flex-gap flex-wrap">
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
    </div>
  );
}
