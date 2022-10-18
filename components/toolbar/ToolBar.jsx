import Image from "next/image";
import { EEZEE_LOGO_URL } from "../../public/static/images/imageUrls";
import { CartIconButton } from "../buttons/Buttons";

export default function ToolBar() {
  return (
    <div className="container-main toolbar-border-background">
      <div className="max-width-default">
        <div className="container-tool-top flex-row row-space-between row-middle full-height">
          <Image
            src={EEZEE_LOGO_URL}
            alt="Eezee Logo"
            width="150"
            height="44"
          />
          <CartIconButton />
        </div>
        <div className="container-tool-bottom flex-row row-middle full-height">
          <a href="/brands">
            <span>View All Brands</span>
          </a>
        </div>
      </div>
      <style jsx>{`
        .container-main {
          height: 119px;
        }

        .container-tool-top {
          height: 80px;
        }

        .container-tool-bottom {
          height: 38px;
        }
      `}</style>
    </div>
  );
}
