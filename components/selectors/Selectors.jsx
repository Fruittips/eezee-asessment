import { useRouter } from "next/router";
import { PlusButton, MinusButton } from "../buttons/Buttons";

export function CategorySortingSelector({ params }) {
  const router = useRouter();

  const pushParams = (params) => {
    router.push({
      pathname: "/products",
      query: { sortBy: params },
    });
  };

  const renderSelected = (type) => {
    if (params === type) {
      return "active";
    } else if (params == null && type === "relevance") {
      return "active";
    }
    return;
  };

  return (
    <div className="button-selector-rows flex-row link-no-colour d-caption">
      <span
        className={`button-selector ${renderSelected("relevance")}`}
        onClick={() => pushParams("relevance")}
      >
        Relevance
      </span>
      <span
        className={`button-selector ${renderSelected("HighToLow")}`}
        onClick={() => pushParams("HighToLow")}
      >
        Price: High to Low
      </span>
      <span
        className={`button-selector ${renderSelected("LowToHigh")}`}
        onClick={() => pushParams("LowToHigh")}
      >
        Price: Low to High
      </span>
      <style jsx>{`
        .button-selector-rows {
          height: 32px;
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

export function QuantitySelector({ quantity, setQuantityHandler }) {
  const isQuantityValid = quantity > 1 ? true : false;

  return (
    <div className="flex-row row-middle">
      <span className="quantity-text-container d-body-emphasized t-grey-primary">
        Quantity
      </span>
      <div className="flex-row row-middle selector-container">
        <MinusButton
          onClick={() => setQuantityHandler(quantity - 1)}
          isValid={isQuantityValid}
        />
        <input
          className="text-input selector-background-border"
          type="number"
          value={quantity}
          onChange={(e) => setQuantityHandler(parseInt(e.target.value))}
        />
        <PlusButton onClick={() => setQuantityHandler(quantity + 1)} />
      </div>
      <style jsx>{`
        .quantity-text-container {
          width: 92px;
        }

        .selector-container {
          height: 32px;
        }

        .text-input {
          height: 32px;
          width: 56px;
          margin: -1px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
