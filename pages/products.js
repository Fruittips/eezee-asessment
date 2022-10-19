import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "../components/Head";
import { SpacerRow } from "../components/spacers/Spacers";
import AppBar from "../components/appbar/AppBar";
import { CategorySortingSelector } from "../components/selectors/Selectors";
import { ProductsCardLayout } from "../components/layouts/CardLayouts";
import { PageLabel } from "../components/labels/Labels";
import { getAllProducts } from "../services/productsService";

export default function Products() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { sortBy } = router.query;

  useEffect(() => {
    const sortedProducts = getAllProducts(sortBy);
    setProducts([...sortedProducts]);
  }, [sortBy]);

  return (
    <div>
      <Head title={"All Products - Eezee Internship Assessment"} />
      <AppBar />
      <div className="body-foreground bg-foreground">
        <div className="max-width-default">
          <SpacerRow height={24} />
          <div className="body-container grid-default">
            <div className="product-filter-column flex-col">
              <div className="d-title t-grey-base">Products</div>
              <div className="d-body t-grey-secondary">
                {products.length} results
              </div>
            </div>
            <div className="product-list-column flex-col">
              <PageLabel results={products.length} />
              <SpacerRow height={8} />
              <CategorySortingSelector params={sortBy} />
              <SpacerRow height={16} />
              <ProductsCardLayout columns={5} products={products} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .body-container {
            grid-template-columns: 200px 997px;
          }

          .product-filter-column {
            width: 200px;
          }

          .product-list-column {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
