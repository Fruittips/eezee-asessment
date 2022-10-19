import { useState, useEffect, useContext } from "react";
import Head from "../components/Head";
import AppBar from "../components/appbar/AppBar";
import Carousel from "../components/carousels/Carousels";
import {
  BrandsCardLayout,
  ProductsCardLayout,
} from "../components/layouts/CardLayouts";
import { SectionHeader } from "../components/headers/Headers";
import { SpacerRow } from "../components/spacers/Spacers";
import { getAllProducts } from "../services/productsService";
import { getAllBrands } from "../services/brandsService";

export default function Home() {
  const products = getAllProducts("LowToHigh");
  const brands = getAllBrands();

  return (
    <div>
      <Head title={"Home-Eezee Internship Assessment"} />
      <main>
        <AppBar />
        <div className="body-foreground">
          <div className="max-width-default">
            <SpacerRow height={16} />
            <Carousel />
            <SpacerRow height={32} />
            <SectionHeader
              title={"Featured Brands"}
              subtitle={"Browse the full catalog of brands today"}
              href={"/brands"}
            />
            <BrandsCardLayout brands={brands} />
            <SpacerRow height={32} />
            <SectionHeader
              title={"Our Products"}
              subtitle={"Trusted by the best companies in Asia"}
              href={"/products"}
            />
            <ProductsCardLayout products={products} columns={6} />
            <SpacerRow height={16} />
          </div>
        </div>
      </main>
    </div>
  );
}
