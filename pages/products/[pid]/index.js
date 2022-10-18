import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "../../../components/Head";
import { SpacerRow } from "../../../components/spacers/Spacers";
import AppBar from "../../../components/appbar/AppBar";
import { ProductCardFull } from "../../../components/cards/LargeCards";
import { OrderCard } from "../../../components/cards/SmallCards";

export default function ProductsById() {
  // TODO: figure out who the routing for products filter and the single product will work
  // TODO: figure out best way of naming the file names and folders
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isQuantityValid, setIsQuantityValid] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const { pid } = router.query;
    //call services with pid
    //set state here
  }, [router.query]);

  return (
    <div>
      <Head title={"Product Page - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={24} />
          <div className="grid-space-between col-2">
            <ProductCardFull />
            <OrderCard />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .col-2 {
            grid-template-columns: 745px 441px;
          }
        `}
      </style>
    </div>
  );
}

//TODO: refactor the grid layouts into css
