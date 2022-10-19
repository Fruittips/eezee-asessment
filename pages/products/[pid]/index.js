import { useRouter } from "next/router";
import Head from "../../../components/Head";
import { SpacerRow } from "../../../components/spacers/Spacers";
import AppBar from "../../../components/appbar/AppBar";
import { ProductCardFull } from "../../../components/cards/LargeCards";
import { OrderCard } from "../../../components/cards/SmallCards";
import { getProductFullInfo } from "../../../services/productsService";

export default function ProductsById() {
  const router = useRouter();
  const { pid } = router.query;

  const product = getProductFullInfo(pid);

  if (product == null) {
    return (
      <div>
        <Head title={"Product Page - Eezee Internship Assessment"} />
        <AppBar />
        Product Not Found! Go back to home page!
      </div>
    );
  }

  return (
    <div>
      <Head title={"Product Page - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground bg-foreground">
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
