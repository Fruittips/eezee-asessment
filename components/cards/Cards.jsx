import { BrandCardStyle, ProductCardVerticalStyle } from "./style";

export function BrandCard({ product }) {
  return (
    <div>
      <style jsx>{BrandCardStyle}</style>
    </div>
  );
}

export function ProductCardVertical({ product }) {
  return (
    <div>
      <style jsx>{ProductCardVerticalStyle}</style>
    </div>
  );
}

/*
ProductCardFull for all info relating to product
*/
