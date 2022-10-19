import "antd/dist/antd.min.css";
import "../styles/layouts/flex.css";
import "../styles/layouts/grid.css";
import "../styles/buttons.css";
import "../styles/cards.css";
import "../styles/spacers.css";
import "../styles/colours.css";
import "../styles/tags.css";
import "../styles/typography.css";
import "../styles/globals.css";

import { CartWrapper } from "../context/cartQuantityContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartWrapper>
      <Component {...pageProps} />
    </CartWrapper>
  );
}

export default MyApp;
