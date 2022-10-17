import Head from "../components/Head";
import AppBar from "../components/appbar/AppBar";
import Carousel from "../components/carousels/Carousels";
import {
  BrandsContainer,
  ProductsContainer,
} from "../components/containers/Containers";
import { SectionHeader } from "../components/headers/Headers";
import { SpacerRow } from "../components/spacers/Spacers";

export default function Home() {
  return (
    <div>
      <Head title={"Home-Eezee Internship Assessment"} />
      <main>
        <AppBar />
        <div className="max-width-default body-foreground">
          <SpacerRow height={16} />
          <Carousel />
          <SpacerRow height={32} />
          <SectionHeader title={""} subtitle={""} onClick={() => null} />{" "}
          <BrandsContainer />
          <SpacerRow height={32} />
          <SectionHeader title={""} subtitle={""} onClick={() => null} />{" "}
          <ProductsContainer />
          <SpacerRow height={16} />
        </div>
      </main>
    </div>
  );
}
