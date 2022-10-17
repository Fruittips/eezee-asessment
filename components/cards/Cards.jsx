export function BrandCard({ brand }) {
  return (
    <div>
      <div className="brand-card card-border-background flex-col">
        <div className="brand-card-title ">
          <a href={null}>
            <span>image-logo</span>
          </a>
        </div>

        <div className="brand-card-details flex-col">
          <span>brand title</span>
          <span>brand details</span>
        </div>
      </div>
      <style jsx>
        {`
          .brand-card {
            height: 157px;
            width: 193px;
            padding: 4px;
            border-radius: 4px;
          }

          .brand-card-title {
            height: 101px;
          }

          .brand-card-details {
            height: 54px;
          }
        `}
      </style>
    </div>
  );
}

export function ProductCardVertical({ product }) {
  return (
    <div>
      <div className="product-card card-border-background">
        <div className="product-card-img">
          <span>product image</span>
        </div>
        <div>tags</div>
        <div className="product-card-details">
          <div>offer-price</div>
          <div>actual price</div>
          <div>long description</div>
        </div>
      </div>
      <style jsx>
        {`
          .product-card {
            height: 333px;
            width: 193px;
            padding: 4px;
            border-radius: 4px;
          }

          .product-card-img {
            height: 175px;
            width: 175px;
          }

          .product-card-details {
            height: 140px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

/*
ProductCardFull for all info relating to product
*/
