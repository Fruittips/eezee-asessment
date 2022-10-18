/*
add-to-cart button
add-to-favourite button (static)

icon-only-button

cart-button includes number icon

*/
import Image from "next/image";

import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

export function CartIconButton() {
  return (
    <div className="flex-col col-center icon-colour">
      <div className="icon-size">
        <div className="quantity-indicator quantity-indicator-bg-colour flex-col col-center">
          1
        </div>
        <Image
          src={"https://storage.googleapis.com/imgez/icons/cart-icon.svg"}
          alt="Cart Icon"
          width="40px"
          height="40px"
        />
      </div>
      <div>Cart</div>
      <style jsx>{`
        .icon-size {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .quantity-indicator {
          position: absolute;
          top: -6px;
          right: -6px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          z-index: 99999;
        }
      `}</style>
    </div>
  );
}

export function AddCartButton({ onClick }) {
  return (
    <button className="add-cart-button" onClick={onClick}>
      Add to Cart
      <style jsx>{`
        .add-cart-button {
          width: 100%;
        }
      `}</style>
    </button>
  );
}

export function AddFavouriteButton({ onClick }) {
  return (
    <button className="favourite-button full-width" onClick={onClick}>
      Add to Favourites
      <style jsx>{``}</style>
    </button>
  );
}

export function PlusButton({ onClick }) {
  return (
    <button
      className="plus-button selector-background-border flex-col flex-center"
      onClick={onClick}
    >
      <PlusOutlined />
      <style jsx>{`
        .plus-button {
          height: 100%;
          padding: 6px 16px;
          border-radius: 0 4px 4px 0;
        }
      `}</style>
    </button>
  );
}

export function MinusButton({ onClick }) {
  return (
    <button
      className="minus-button selector-background-border flex-col flex-center"
      onClick={onClick}
    >
      <MinusOutlined />
      <style jsx>{`
        .minus-button {
          height: 100%;
          padding: 6px 16px;
          border-radius: 4px 0 0 4px;
        }
      `}</style>
    </button>
  );
}
