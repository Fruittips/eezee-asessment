/*
section-title (Our Products)
section-subtitle ()
section-links

price-range-header

brand-header

section-header (for headers + sub-headers + view more link + carot icon)
*/
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";

export function SectionHeader({ title, subtitle, href }) {
  return (
    <div className="flex-row row-space-between margin-bottom row-bottom">
      <div className="flex-col top-bottom-gap">
        <span>{title}</span>
        <span>{subtitle}</span>
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
    <div className="brand-header brand-header-background flex-row flex-center">
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
