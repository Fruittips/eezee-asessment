import { PlusButton, MinusButton } from "../buttons/Buttons";

export function CategorySortingSelector({}) {
  //button turns blue when selected
  return (
    <div className="selector-button-rows flex-row row-middle">
      <a href="/products?sortBy=relevance">
        <span className="selector-button">Relevance</span>
      </a>
      <a href="/products?sortBy=priceHighToLow">
        <span className="selector-button">Price: High to Low</span>
      </a>
      <a href="/products?sortBy=priceHighToLow">
        <span className="selector-button">Price: Low to High</span>
      </a>
      <style jsx>{`
        .selector-button-rows {
          height: 34px;
        }
        :nth-child(1) {
          border-radius: 2px 0 0 2px;
        }
        :nth-child(3) {
          border-radius: 0 2px 2px 0;
        }
      `}</style>
    </div>
  );
}

export function QuantitySelector({ quantityNumber }) {
  quantityNumber = 1;
  return (
    <div className="flex-row row-middle">
      <span className="quantity-text-container">Quantity</span>
      <div className="flex-row row-middle selector-container card-border-background">
        <MinusButton />
        <span className="text-input">{quantityNumber}</span>
        <PlusButton />
      </div>
      <style jsx>{`
        .quantity-text-container {
          width: 92px;
        }

        .selector-container {
          height: 32px;
        }

        .text-input {
          text-align: center;
          width: 56px;
        }
      `}</style>
    </div>
  );
}
