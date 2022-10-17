export function SpacerRow({ height }) {
  return (
    <div className="spacer">
      <style jsx>
        {`
          .spacer {
            height: ${height}px;
          }
        `}
      </style>
    </div>
  );
}

export function SpacerColumn({ width }) {
  return (
    <div className="spacer">
      <style jsx>
        {`
          .spacer {
            width: ${width}px;
            border: 1px solid red;
          }
        `}
      </style>
    </div>
  );
}
