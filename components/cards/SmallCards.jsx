import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AddCartButton, AddFavouriteButton } from "../buttons/Buttons";
import { QuantitySelector } from "../selectors/Selectors";
import { VipPriceFlag, BulkDiscountFlag, MoqFlag } from "../flags/Flags";
import { useCartQuantityContext } from "../../context/cartContext";

export function OrderCard({ lowPrice, highPrice }) {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantityContext, setCartQuantityContext] =
    useCartQuantityContext();

  return (
    <div className="order-card flex-col card-border-radius card-border-background">
      <div className="flex-col">
        <div className="price-container">
          {lowPrice} - {highPrice}
        </div>
        <div className="divider solid" />
        <div className="quantity-container">
          <QuantitySelector
            quantity={quantity}
            setQuantityHandler={setQuantity}
          />
        </div>
        <div className="buttons-container flex-col">
          <AddCartButton
            onClick={() =>
              setCartQuantityContext(cartQuantityContext + quantity)
            }
          />
          <AddFavouriteButton />
        </div>
      </div>
      <style jsx>{`
        .order-card {
          padding: 16px;
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
  const { name, productCount, image } = brand;
  const imageUrl = image?.url || "data:,";
  return (
    <div className="link-no-colour">
      <div className="brand-card flex-col card-border-background card-border-radius">
        <div className=" brand-card-img ">
          <div className="flex-col flex-center">
            <Image
              src={imageUrl}
              alt="Brand Logo"
              width="135px"
              height="60px"
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="brand-card-details flex-col col-center">
          <span>{name}</span>
          <span>{productCount} Products</span>
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
  );
}

export function ProductCardVertical({ product }) {
  let {
    lowPricePretty = "",
    highPricePretty,
    images,
    title,
    vipPriceFlag,
    bulkDiscountFlag,
    moq,
  } = product;
  let imageUrl =
    images !== null && images.length > 0 ? images[0].url : "data:,";

  return (
    <Link href={`/products/${product.id}`}>
      <div className="link-no-colour">
        <div className="product-card card-border-background card-border-radius flex-col row-start">
          <div className="product-card-img">
            <Image src={imageUrl} alt="Product Image" layout="fill" />
          </div>
          <div className="flags-container">
            <div className="flex-col row-center row-start">
              <VipPriceFlag isVipPrice={vipPriceFlag} />
              <BulkDiscountFlag isBulkDiscount={bulkDiscountFlag} />
              <MoqFlag moqNumber={moq} />
            </div>
          </div>
          <div className="product-card-details">
            <div>
              {lowPricePretty} {highPricePretty ? " - " : ""}
              {highPricePretty}
            </div>
            <div>{title}</div>
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
