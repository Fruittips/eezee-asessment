import Head from "../components/Head";
import { SpacerMedium, SpacerExtraLarge } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { BrandHeader } from "../components/headers/Headers";
import { BrandsContainer } from "../components/containers/Containers";

export default function Products() {
  return (
    <div>
      <Head title={"All Products - Eezee Internship Assessment"} />
      <AppBar />
      <div className="max-width-default body-foreground"></div>
    </div>
  );
}
