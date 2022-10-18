import Image from "next/image";
import Link from "next/link";
import { CartIconButton } from "../buttons/Buttons";

export default function ToolBar() {
  return (
    <div className="container-main toolbar-border-background">
      <div className="max-width-default">
        <div className="container-tool-top flex-row row-space-between row-middle full-height">
          <Link href="/">
            <div>
              <Image
                className="link"
                src="/static/images/EezeeLogo.png"
                alt="Eezee Logo"
                width="150"
                height="44"
              />
            </div>
          </Link>
          <div className="cart-container">
            <CartIconButton />
          </div>
        </div>
        <div className="container-tool-bottom flex-row row-middle full-height">
          <Link href="/brands">
            <span className="link">View All Brands</span>
          </Link>
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

        .cart-container {
          height: 40px;
          width: 40px;
        }
      `}</style>
    </div>
  );
}
