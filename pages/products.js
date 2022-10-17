import { useState, useEffect, useContext } from "react";
import Head from "../components/Head";
import { SpacerRow, SpacerColumn } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { CategorySortingSelector } from "../components/selectors/Selectors";
import { ProductsCardLayout } from "../components/layouts/CardLayouts";
import { PageLabel } from "../components/labels/Labels";

export default function Products() {
  //do shallow routing (handle multiple urls without running data fetching methods again)
  //get query params and then set state on button based on it
  return (
    <div>
      <Head title={"All Products - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={24} />
          <div className="flex-row row-space-between test-border">
            <span className="product-filter-column flex-col">
              <div>title</div>
              <div>subtitle</div>
            </span>
            <span>
              <SpacerColumn width={28} />
            </span>
            <span className="product-list-column flex-col  ">
              <PageLabel />
              <SpacerRow height={8} />
              <CategorySortingSelector />
              <SpacerRow height={16} />
              <ProductsCardLayout />
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-filter-column {
            width: 200px;
            border: 1px solid green;
          }

          .product-list-column {
            width: 100%;
            border: 2px solid purple;
          }
        `}
      </style>
    </div>
  );
}
