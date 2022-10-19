import { BrandCard, ProductCardVertical } from "../cards/SmallCards";

export function BrandsCardLayout({ brands, isFeatured = false }) {
  return (
    <div className="grid-space-between brands-card-columns card-grid-gap">
      {isFeatured
        ? brands
            .slice(0, 6)
            .map((brand) => <BrandCard key={brand.id} brand={brand} />)
        : brands.map((brand) => <BrandCard key={brand.id} brand={brand} />)}

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
      {products.map((product) => (
        <ProductCardVertical key={product.id} product={product} />
      ))}
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
