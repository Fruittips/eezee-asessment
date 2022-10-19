import { getAllBrands } from "../services/brandsService";
import useApiService from "../hooks/useApiService";
import { SpacerRow } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { BrandHeader } from "../components/headers/Headers";
import { BrandsCardLayout } from "../components/layouts/CardLayouts";
import Head from "../components/Head";

export default function Brands() {
  const [groupedBrands, setGroupedBrands] = useApiService(() => {
    const groupedBrands = getAllBrands({ isSorted: true });
    return groupedBrands;
  });

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
