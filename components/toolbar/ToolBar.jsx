import Image from "next/image";
import { EEZEE_LOGO_URL } from "../../public/static/images/imageUrls";
import { CartIconButton } from "../buttons/Buttons";

export default function ToolBar() {
  return (
    <div className="container-main">
      <div className="max-width-default">
        <div className="container-nav-top flex-row row-space-between row-center full-height">
          <Image
            src={EEZEE_LOGO_URL}
            alt="Eezee Logo"
            width="150"
            height="44"
          />
          <CartIconButton />
        </div>
        <div className="container-nav-bottom flex-row row-center full-height">
          <a href="/brands">
            <span>View All Brands</span>
          </a>
        </div>
      </div>
      <style jsx>{`
        .container-main {
          height: 119px;
        }

        .container-nav-top {
          height: 80px;
        }

        .container-nav-bottom {
          height: 38px;
        }
      `}</style>
    </div>
  );
}
