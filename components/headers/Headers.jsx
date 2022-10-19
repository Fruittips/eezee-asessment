import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";

export function SectionHeader({ title, subtitle, href }) {
  return (
    <div className="flex-row row-space-between margin-bottom row-bottom">
      <div className="flex-col top-bottom-gap">
        <span className="d-title t-grey-base">{title}</span>
        <span className="d-product-title t-grey-primary">{subtitle}</span>
      </div>
      <Link href={href}>
        <div className="flex-row row-middle left-right-gap link ">
          <span>View More</span>
          <RightOutlined style={{ fontSize: "14px" }} />
        </div>
      </Link>
      <style jsx>
        {`
          .top-bottom-gap {
            gap: 4px 0px;
          }

          .margin-bottom {
            margin-bottom: 12px;
          }

          .left-right-gap {
            gap: 0px 4px;
          }
        `}
      </style>
    </div>
  );
}

export function BrandHeader({ alphabet }) {
  return (
    <div className="brand-header flex-row flex-center d-title t-grey-base bg-divider ">
      <span>{alphabet}</span>
      <style jsx>{`
        .brand-header {
          width: 94px;
          height: 48px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
