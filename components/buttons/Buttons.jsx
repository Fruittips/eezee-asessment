/*
add-to-cart button
add-to-favourite button (static)

icon-only-button

cart-button includes number icon

*/

import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export function CartIconButton() {
  return <>Shopping Cart Button</>;
}

export function AddCartButton({ onClick }) {
  return (
    <button className="add-cart-button">
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
      className="selector-button"
      type="button"
      onClick={() => console.log("Plus")}
    >
      <PlusOutlined />
      <style jsx>{``}</style>
    </button>
  );
}

export function MinusButton({ onClick }) {
  <button
    className="selector-button"
    type="button"
    onClick={() => console.log("minus")}
  >
    <MinusOutlined />
  </button>;
}
