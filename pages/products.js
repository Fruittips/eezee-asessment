import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "../components/Head";
import { SpacerRow } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { CategorySortingSelector } from "../components/selectors/Selectors";
import { ProductsCardLayout } from "../components/layouts/CardLayouts";
import { PageLabel } from "../components/labels/Labels";

export default function Products() {
  //TODO: do shallow routing (handle multiple urls without running data fetching methods again)
  //TODO: get query params and then set state on button based on it
  const router = useRouter();

  useEffect(() => {
    const { sortBy } = router.query;
  }, [router.query]);

  return (
    <div>
      <Head title={"All Products - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={24} />
          <div className="body-container grid-default">
            <div className="product-filter-column flex-col">
              <div>title</div>
              <div>subtitle</div>
            </div>
            <div className="product-list-column flex-col  ">
              <PageLabel />
              <SpacerRow height={8} />
              <CategorySortingSelector />
              <SpacerRow height={16} />
              <ProductsCardLayout columns={5} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .body-container {
            grid-template-columns: 200px 997px;
          }

          .product-filter-column {
            width: 200px;
          }

          .product-list-column {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
