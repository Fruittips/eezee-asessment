import { useState, useEffect, useContext } from "react";
import Head from "../../../components/Head";
import { SpacerRow, SpacerColumn } from "../../../components/spacers/Spacers";
import AppBar from "../../../components/appbar/AppBar";
import { CategorySortingSelector } from "../../../components/selectors/Selectors";
import { ProductsContainer } from "../../../components/containers/Containers";
import { PageLabel } from "../../../components/labels/Labels";

export default function ProductsById() {
  // TODO: figure out who the routing for products filter and the single product will work
  // TODO: figure out best way of naming the file names and folders
  return (
    <div>
      <Head title={"Filter/product info - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default"></div>
      </div>
    </div>
  );
}
