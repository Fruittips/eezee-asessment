import { SpacerRow } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { BrandHeader } from "../components/headers/Headers";
import { BrandsCardLayout } from "../components/layouts/CardLayouts";
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
            <BrandsCardLayout />
            <SpacerRow height={64} />
            <BrandHeader />
            <BrandsCardLayout />
            <SpacerRow height={64} />
          </div>
        </div>
      </div>
    </div>
  );
}
