import { useState, useEffect, useContext } from "react";
import { SpacerRow } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { BrandHeader } from "../components/headers/Headers";
import { BrandsContainer } from "../components/containers/Containers";
import Head from "../components/Head";

export default function Brands() {
  //TODO: map all brands to brandsheader + brands container

  return (
    <div>
      <Head title={"All Brands - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={32} />
          <div>
            <BrandHeader />
            <BrandsContainer />
            <SpacerRow height={64} />
            <BrandHeader />
            <BrandsContainer />
            <SpacerRow height={64} />
          </div>
        </div>
      </div>
    </div>
  );
}
