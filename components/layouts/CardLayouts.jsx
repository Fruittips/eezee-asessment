//TODO: come up with better name for this file
import { BrandCard, ProductCardVertical } from "../cards/Cards";

export function BrandsCardLayout({ brands }) {
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

export function ProductsCardLayout({ products }) {
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
