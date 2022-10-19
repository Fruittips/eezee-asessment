import Image from "next/image";
import { useState, useEffect } from "react";
import { stringToHtml } from "../../utils/convertHtml";

/* ProductCardFull split into 3 different parts: 
1. ProductCardFullTitleBrand - for the top portion
2. ProductCardFullImages - for the middle portion
3. ProductCardFullDescription - for the bottom portion */

function ProductCardFullTitleBrand({ product }) {
  const { title } = product;
  const { brand, model } = product.metadata;
  const brandImageUrl =
    product.metadata !== null && product.metadata.brandImage !== null
      ? product.metadata.brandImage
      : "";
  return (
    <div className="product-title-model">
      <div className="product-title">{title}</div>
      <div className="product-model flex-row">
        <span className="logo">
          <Image
            src={brandImageUrl}
            alt="Logo"
            width="100px"
            height="48px"
            layout="intrinsic"
          />
        </span>
        <div className="flex-col">
          <span>Model:</span>
          <span>Brand:</span>
        </div>
        <div className="flex-col flex-wrap-none-overflow-ellipsis">
          <a href="">
            <span className="link">{model}</span>
          </a>
          <a href="">
            <span className="link">{brand}</span>
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
            margin-right: 16px;
          }
        `}
      </style>
    </div>
  );
}

function ProductCardFullImages({ images }) {
  const [centerImage, setCenterImage] = useState("");

  const isNotEmpty = images && images.length > 0;

  useEffect(() => {
    if (isNotEmpty) {
      setCenterImage(images[0].url);
    }
  }, []);

  return (
    <div className="product-image">
      <div className="image-centerstage flex-row flex-center ">
        <Image
          src={centerImage}
          alt="Brand Logo"
          width="700px"
          height="358px"
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
      <div className="image-carousel flex-row flex-center">
        {isNotEmpty ? (
          images.map((image) => (
            <div
              key={image.url}
              className={`flex-row flex-centers image-box ${
                image.url === centerImage ? "active" : ""
              }`}
              onClick={() => {
                setCenterImage(image.url);
              }}
            >
              <Image
                src={image.url}
                alt="Carousel Image"
                width="50px"
                height="50px"
                laout="intrinsic"
              />
            </div>
          ))
        ) : (
          <></>
        )}
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

function ProductCardFullDescription({ descriptionHtml }) {
  return (
    <div className="description-container">
      {stringToHtml(descriptionHtml)}
      <style jsx>{`
        .description-container {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}

export function ProductCardFull({ product }) {
  if (!product) {
    return <></>;
  }
  return (
    <div className="product-card-full card-border-radius card-border-background card-padding">
      <div className="flex-col">
        <ProductCardFullTitleBrand product={product} />
        <span className="divider" />
        <ProductCardFullImages images={product.images} />
        <span className="divider" />
        <ProductCardFullDescription descriptionHtml={product.descriptionHtml} />
      </div>
      <style jsx>{`
        .card-padding {
          padding: 16px;
        }
      `}</style>
    </div>
  );
}
