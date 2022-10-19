import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "../../../components/Head";
import { SpacerRow } from "../../../components/spacers/Spacers";
import AppBar from "../../../components/appbar/AppBar";
import { ProductCardFull } from "../../../components/cards/LargeCards";
import { OrderCard } from "../../../components/cards/SmallCards";
import { getProductFullInfo } from "../../../services/productsService";

export default function ProductsById() {
  const [product, setProduct] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const { pid } = router.query;
    const product = getProductFullInfo(pid);
    setProduct(product);
  }, [router.query]);

  return (
    <div>
      <Head title={"Product Page - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground">
        <div className="max-width-default">
          <SpacerRow height={24} />
          <div className="grid-space-between col-2">
            <ProductCardFull product={product} />
            <OrderCard
              lowPrice={product?.lowPricePretty}
              highPrice={product?.highPricePretty}
            />
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
