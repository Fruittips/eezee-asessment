import Image from "next/image";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useCartQuantityContext } from "../../context/cartContext";

export function CartIconButton() {
  const [cartQuantity] = useCartQuantityContext();

  return (
    <div className="flex-col col-center icon-colour">
      <div className="icon-size">
        <div className="quantity-indicator quantity-indicator-bg-colour flex-col col-center">
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
      className="add-cart-button link-no-colour"
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
    <button className="favourite-button full-width">
      Add to Favourites
      <style jsx>{``}</style>
    </button>
  );
}

export function PlusButton({ onClick }) {
  return (
    <button
      className="plus-button selector-background-border flex-col flex-center blue-colour"
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
      className={`minus-button selector-background-border flex-col flex-center ${
        isValid ? "blue-colour" : "disabled"
      }`}
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
