import { BrandCard, ProductCardVertical } from "../cards/Cards";

export function BrandsCardLayout({ brands }) {
  return (
    <div className="grid-space-between brands-card-columns card-grid-gap">
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <style jsx>{`
        .brands-card-columns {
          grid-template-columns: repeat(6, 193px);
        }
      `}</style>
    </div>
  );
}

export function ProductsCardLayout({ products, columns }) {
  return (
    <div className="grid-space-between products-card-columns card-grid-gap">
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <ProductCardVertical />
      <style jsx>
        {`
          .products-card-columns {
            grid-template-columns: repeat(${columns}, 193px);
          }
        `}
      </style>
    </div>
  );
}
