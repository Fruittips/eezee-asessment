import Link from "next/link";
import { AddCartButton, AddFavouriteButton } from "../buttons/Buttons";
import { QuantitySelector } from "../selectors/Selectors";

/*ProductCardFull split into 3 different parts: 
1. ProductCardFullTitleBrand - for the top portion
2. ProductCardFullImages - for the middle portion
3. ProductCardFullDescription - for the bottom portion */

function ProductCardFullTitleBrand({}) {
  return (
    <div className="product-title-model">
      <div className="product-title">product title</div>
      <div className="product-model flex-row">
        <span className="logo">logo</span>
        <div className="flex-col">
          <span>Model:</span>
          <span>Brand:</span>
        </div>
        <div className="flex-col flex-wrap-none-overflow-ellipsis">
          <a href="">
            <span className="link">link title blue link</span>
          </a>
          <a href="">
            <span className="link">Really long brand name</span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .product-card-full {
            padding: 16px;
          }

          .product-title-model {
            height: 114px;
          }

          .product-title {
            height: 62px;
            margin-bottom: 4px;
          }

          .product-model {
            height: 48px;
            margin-bottom: 4px;
          }

          .logo {
            width: 100px;
          }
        `}
      </style>
    </div>
  );
}

function ProductCardFullImages({ images }) {
  return (
    <div className="product-image">
      <div className="image-centerstage flex-row flex-center ">
        image-center stage
      </div>
      <div className="image-carousel flex-row flex-center">
        <div className="flex-row flex-center image-box active">image</div>
        <div className="flex-row flex-center image-box card-border-background">
          image
        </div>
        <div className="flex-row flex-center image-box card-border-background">
          image
        </div>
      </div>
      <style jsx>{`
        .product-image {
          margin: 16px 0;
        }

        .image-centerstage {
          height: 350px;
          margin-bottom: 8px;
        }

        .image-carousel {
          height: 50px;
          gap: 8px;
        }

        .image-box {
          height: 50px;
          width: 50px;
        }
      `}</style>
    </div>
  );
}

function ProductCardFullDescription() {
  return (
    <div className="product-description flex-col">
      <div>Product Description</div>
      <div>Specification</div>
      <div className="detailed-description">
        <div>product name</div>
        <div>more details below</div>
        <div>longlonglong details</div>
      </div>
      <style jsx>{`
        .product-description {
          margin-top: 16px;
          gap: 16px;
        }
        .detailed-description {
        }
      `}</style>
    </div>
  );
}

export function ProductCardFull() {
  return (
    <div className="product-card-full card-border-radius card-border-background card-padding">
      <div className="flex-col">
        <ProductCardFullTitleBrand />
        <span className="divider" />
        <ProductCardFullImages />
        <span className="divider" />
        <ProductCardFullDescription />
      </div>
      <style jsx>{`
        .card-padding {
          padding: 16px;
        }
      `}</style>
    </div>
  );
}

export function OrderCard() {
  return (
    <div className="order-card flex-col card-border-radius card-border-background">
      <div className="flex-col">
        <div className="price-container">$6000</div>
        <div className="divider solid" />
        <div className="quantity-container">
          <QuantitySelector />
        </div>
        <div className="buttons-container flex-col">
          <AddCartButton onClick={() => console.log("add to cart")} />
          <AddFavouriteButton
            onClick={() => console.log("add to favourites")}
          />
        </div>
      </div>
      <style jsx>{`
        .order-card {
          padding: 16px;
          border: 1px solid blue;
        }

        .price-container {
          margin-bottom: 4px;
        }

        .quantity-container {
          height: 32px;
          margin-top: 24px;
        }

        .buttons-container {
          margin-top: 24px;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}

export function BrandCard({ brand }) {
  return (
    <Link href="/brands">
      <div className="link-no-colour">
        <div className="brand-card flex-col card-border-background card-border-radius">
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
    </Link>
  );
}

export function ProductCardVertical({ product }) {
  return (
    <Link href="/products">
      <div className="link-no-colour">
        <div className="product-card card-border-background card-border-radius">
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
    </Link>
  );
}
