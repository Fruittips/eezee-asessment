import { SpacerRow } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { BrandHeader } from "../components/headers/Headers";
import { BrandsCardLayout } from "../components/layouts/CardLayouts";
import Head from "../components/Head";
import {
  getAllBrands,
  categoriseBrandsAlphabetically,
} from "../services/brandsService";

export default function Brands() {
  const allBrands = getAllBrands();
  const groupedBrands = categoriseBrandsAlphabetically(allBrands);
  return (
    <div>
      <Head title={"All Brands - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={32} />
          {Object.keys(groupedBrands).map((key) => (
            <div key={key}>
              <BrandHeader alphabet={groupedBrands[key].alphabet} />
              <BrandsCardLayout brands={groupedBrands[key].brands} />
              <SpacerRow height={64} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
