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

export default function Home() {
  //TODO: look at get server side props etc. with a valid reason

  //call services to get product here

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
            <BrandsCardLayout />
            <SpacerRow height={32} />
            <SectionHeader
              title={"Our Products"}
              subtitle={"Trusted by the best companies in Asia"}
              href={"/products"}
            />
            <ProductsCardLayout columns={6} />
            <SpacerRow height={16} />
          </div>
        </div>
      </main>
    </div>
  );
}
