import Image from "next/image";

/* ProductCardFull split into 3 different parts: 
1. ProductCardFullTitleBrand - for the top portion
2. ProductCardFullImages - for the middle portion
3. ProductCardFullDescription - for the bottom portion */

function ProductCardFullTitleBrand({}) {
  return (
    <div className="product-title-model">
      <div className="product-title">product title</div>
      <div className="product-model flex-row">
        <span className="logo">logo</span>
        <div className="flex-col">
          <span>Model:</span>
          <span>Brand:</span>
        </div>
        <div className="flex-col flex-wrap-none-overflow-ellipsis">
          <a href="">
            <span className="link">link title blue link</span>
          </a>
          <a href="">
            <span className="link">Really long brand name</span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .product-card-full {
            padding: 16px;
          }

          .product-title-model {
            height: 114px;
          }

          .product-title {
            height: 62px;
            margin-bottom: 4px;
          }

          .product-model {
            height: 48px;
            margin-bottom: 4px;
          }

          .logo {
            width: 100px;
          }
        `}
      </style>
    </div>
  );
}

function ProductCardFullImages({ images }) {
  return (
    <div className="product-image">
      <div className="image-centerstage flex-row flex-center ">
        <Image
          src="https://storage.googleapis.com/eezee-product-images/oliver-safety-shoe-34-632p-0er3_600.jpg"
          alt="Brand Logo"
          width="700px"
          height="358px"
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
      <div className="image-carousel flex-row flex-center">
        <div className="flex-row flex-center image-box active">
          <Image
            src="https://storage.googleapis.com/eezee-product-images/oliver-safety-shoe-34-632p-0er3_600.jpg"
            alt="Carousel Image"
            width="50px"
            height="50px"
            laout="intrinsic"
          />
        </div>
        <div className="flex-row flex-center image-box card-border-background">
          <Image
            src="https://storage.googleapis.com/eezee-product-images/oliver-safety-shoe-34-632p-0er3_600.jpg"
            alt="Carousel Image"
            width="50px"
            height="50px"
            laout="intrinsic"
          />
        </div>
        <div className="flex-row flex-center image-box card-border-background">
          image
        </div>
      </div>
      <style jsx>{`
        .product-image {
          margin: 16px 0;
        }

        .image-centerstage {
          height: 350px;
          margin-bottom: 8px;
        }

        .image-carousel {
          height: 50px;
          gap: 8px;
        }

        .image-box {
          height: 50px;
          width: 50px;
        }
      `}</style>
    </div>
  );
}

function ProductCardFullDescription() {
  return (
    <div className="product-description flex-col">
      <div>Product Description</div>
      <div>Specification</div>
      <div className="detailed-description">
        <div>product name</div>
        <div>more details below</div>
        <div>longlonglong details</div>
      </div>
      <style jsx>{`
        .product-description {
          margin-top: 16px;
          gap: 16px;
        }
        .detailed-description {
        }
      `}</style>
    </div>
  );
}

export function ProductCardFull() {
  return (
    <div className="product-card-full card-border-radius card-border-background card-padding">
      <div className="flex-col">
        <ProductCardFullTitleBrand />
        <span className="divider" />
        <ProductCardFullImages />
        <span className="divider" />
        <ProductCardFullDescription />
      </div>
      <style jsx>{`
        .card-padding {
          padding: 16px;
        }
      `}</style>
    </div>
  );
}
