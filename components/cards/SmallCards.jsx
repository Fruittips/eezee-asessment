import Link from "next/link";
import Image from "next/image";
import { AddCartButton, AddFavouriteButton } from "../buttons/Buttons";
import { QuantitySelector } from "../selectors/Selectors";
import { VipPriceFlag, BulkDiscountFlag, MoqFlag } from "../flags/Flags";

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
          <div className=" brand-card-img ">
            <div className="flex-col flex-center">
              <Image
                src=""
                alt="Brand Logo"
                width="135px"
                height="60px"
                layout="intrinsic"
              />
            </div>
          </div>
          <div className="brand-card-details flex-col col-center">
            <span>brand title</span>
            <span>brand details</span>
          </div>
        </div>
        <style jsx>
          {`
            .brand-card {
              width: 193px;
              height: 157px;
              padding: 8px;
            }

            .brand-card-img {
              height: 101px;
              padding: 14px;
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
  //to render flags for the product
  //return the components /div for the flag
  const renderFlags = () => {
    return (
      <div className="flex-col row-center row-start">
        <VipPriceFlag isVipPrice={true} />
        <BulkDiscountFlag isBulkDiscount={true} />
        <MoqFlag moqNumber={20} />
      </div>
    );
  };

  return (
    <Link href="/products">
      <div className="link-no-colour">
        <div className="product-card card-border-background card-border-radius flex-col row-start">
          <div className="product-card-img">
            <Image
              src="https://storage.googleapis.com/eezee-product-images/meiji-plain-cracker-26g-x-32-pieces-pack-iu0h_600.jpg"
              alt="Product Image"
              layout="fill"
            />
          </div>
          <div className="flags-container">{renderFlags()}</div>
          <div className="product-card-details">
            <div>low price to high price</div>
            <div>long description</div>
          </div>
        </div>
        <style jsx>
          {`
            .product-card {
              height: 333px;
              width: 193px;
              padding: 8px;
            }

            .product-card-img {
              position: relative;
              height: 175px;
              width: 175px;
              text-align: center;
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
              border: 1px solid red;
            }

            .product-card-details {
              height: 140px;
              width: 100%;
            }

            .flags-container {
              margin: 8px 0px;
            }
          `}
        </style>
      </div>
    </Link>
  );
}
