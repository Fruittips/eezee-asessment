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

export function SpacerMedium() {
  return (
    <>
      <SpacerRow />
      <SpacerRow />
    </>
  );
}

export function SpacerLarge() {
  return (
    <>
      <SpacerRow />
      <SpacerRow />
      <SpacerRow />
    </>
  );
}

export function SpacerExtraLarge() {
  return (
    <>
      <SpacerRow />
      <SpacerRow />
      <SpacerRow />
      <SpacerRow />
    </>
  );
}
