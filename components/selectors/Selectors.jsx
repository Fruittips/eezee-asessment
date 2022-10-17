/*
quantity-selector
category sorting selector
*/

export function CategorySortingSelector({}) {
  //button turns blue when selected
  return (
    <div className="selector-button-rows flex-row row-center">
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
