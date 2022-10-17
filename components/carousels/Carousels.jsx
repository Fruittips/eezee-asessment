import Image from "next/image";

import { BANNER_URL } from "../../public/static/images/imageUrls";

//TODO: fix the banner image layout
export default function Carousel() {
  return (
    <div className="container-carousel card-border-background flex-row row-center">
      <Image
        src={BANNER_URL}
        alt="Banner image"
        height="385px"
        width="1000px"
        layout="intrinsic"
      />
      <style jsx>{`
        .container-carousel {
          width: 100%;
          height: 385px;
        }
      `}</style>
    </div>
  );
}
