import Image from "next/image";

export default function Carousel() {
  return (
    <div className="container-carousel card-border-background flex-row row-middle">
      <Image
        src="/static/images/Carousel.png"
        alt="Banner image"
        height="385px"
        width="1200px"
      />
      <style jsx>{`
        .container-carousel {
          width: 100%;
          height: 385px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
