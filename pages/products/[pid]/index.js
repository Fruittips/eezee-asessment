import { useState, useEffect, useContext } from "react";
import Head from "../../../components/Head";
import { SpacerRow, SpacerColumn } from "../../../components/spacers/Spacers";
import AppBar from "../../../components/appbar/AppBar";
import { CategorySortingSelector } from "../../../components/selectors/Selectors";
import { PageLabel } from "../../../components/labels/Labels";
import { ProductCardFull, OrderCard } from "../../../components/cards/Cards";

export default function ProductsById() {
  // TODO: figure out who the routing for products filter and the single product will work
  // TODO: figure out best way of naming the file names and folders
  return (
    <div>
      <Head title={"Product Page - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={24} />
          <div className="grid-space-between col-2">
            <ProductCardFull />
            <OrderCard />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .col-2 {
            grid-template-columns: 745px 441px;
          }
        `}
      </style>
    </div>
  );
}

//TODO: refactor the grid layouts into css
