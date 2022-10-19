import "../styles/layouts/flex.css";
import "../styles/layouts/grid.css";
import "../styles/components.css";
import "../styles/typography.css";
import "../styles/globals.css";
import "antd/dist/antd.min.css";

import { CartWrapper } from "../context/cartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartWrapper>
      <Component {...pageProps} />
    </CartWrapper>
  );
}

export default MyApp;
