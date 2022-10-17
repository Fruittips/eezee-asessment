/*
section-title (Our Products)
section-subtitle ()
section-links

price-range-header

brand-header

section-header (for headers + sub-headers + view more link + carot icon)
*/

export function SectionHeader({ title, subtitle, onClick }) {
  return (
    <div className="flex-row row-space-between margin-bottom row-bottom">
      <div className="flex-col gap">
        <span>Title Bolded</span>
        <span>Subtitle</span>
      </div>
      <div>View More button Link</div>
      <style jsx>
        {`
          .gap {
            gap: 4px 0px;
          }
          .margin-bottom {
            margin-bottom: 12px;
          }
        `}
      </style>
    </div>
  );
}

export function BrandHeader({ letter }) {
  letter = "A";
  return (
    <div className="brand-header brand-header-background flex-row flex-center">
      <span>{letter}</span>
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
