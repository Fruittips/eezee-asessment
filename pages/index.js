import Image from "next/image";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Carousel from "../components/carousel/Carousel";
import {
  CategoryProductGrid,
  BrandsContainer,
  RegularProductHomeGrid,
} from "../components/containers/Containers";

export default function Home() {
  return (
    <div>
      <Head />
      <main>
        <NavBar />
        <div className="spacing" />
        <div className="max-width">
          <Carousel />
          <div className="spacing" />
          <div className="container-categories">
            <CategoryProductGrid />
            categories block
          </div>
          <div className="spacing" />
          <div className="container-brands">
            <BrandsContainer />
            featured brands
          </div>
          <div className="spacing" />
          <div className="container-popular">
            <RegularProductHomeGrid />
            popular brands
          </div>
          <div className="spacing" />
          <div className="spacing" />
        </div>
      </main>
    </div>
  );
}
