import Image from "next/image";
import * as FONT from "../../constants/typography";
import { FLAG_URL } from "../../public/static/images/imageUrls";

export default function NavBar() {
  return (
    <div className="container-main navbar-background">
      <div className="max-width-default">
        <div className="flex-row row-flex-start row-center full-height">
          <span className="pad-flag">
            <Image src={FLAG_URL} alt="Flag" width="21" height="14" />
          </span>
          <span className="pad-secondary">Singapore</span>
          <div className="pad-contact">
            <span className="pad-secondary">icon</span>
            <a className="pad-secondary" href="https://eezee.co/contact-us">
              <span>+65 6797 9688</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container-main {
            height: 38px;
          }

          .pad-contact {
            padding: 0px 17px;
          }

          .pad-flag {
            padding-right: 4px;
          }
          .pad-secondary {
            padding: 0px 4px;
          }
        `}
      </style>
    </div>
  );
}
