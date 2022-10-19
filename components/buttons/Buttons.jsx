import { useContext } from "react";
import Image from "next/image";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { cartQuantityContext } from "../../context/cartQuantityContext";

export function CartIconButton() {
  const [cartQuantity] = useContext(cartQuantityContext);

  return (
    <div className="flex-col col-center t-grey-primary">
      <div className="icon-size">
        <div className="quantity-indicator flex-col flex-center t-white bg-eezee-blue">
          {cartQuantity}
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
          width: 32px;
          height: 32px;
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
    <button
      className="button button-add-cart link-no-colour d-body"
      onClick={() => onClick()}
    >
      Add to Cart
      <style jsx>{`
        .add-cart-button {
          width: 100%;
        }
      `}</style>
    </button>
  );
}

export function AddFavouriteButton() {
  return (
    <button className="button button-favourite full-width d-body t-eezee-blue bg-white">
      Add to Favourites
    </button>
  );
}

export function PlusButton({ onClick }) {
  return (
    <button
      className="plus-button button-selector flex-col flex-center t-eezee-blue link-no-colour"
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

export function MinusButton({ onClick, isValid }) {
  return (
    <button
      className={`minus-button button-selector flex-col flex-center ${
        isValid ? "t-eezee-blue link-no-colour" : "disabled"
      }`}
      onClick={onClick}
    >
      <MinusOutlined />
      <style jsx>{`
        .minus-button {
          height: 100%;
          border-radius: 4px 0 0 4px;
        }
      `}</style>
    </button>
  );
}
