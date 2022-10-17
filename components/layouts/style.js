export const SixColumnTwoRowGridStyle = (
  <style jsx>{`
    .grid-col6-row2 {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(6, 1fr);
    }
  `}</style>
);

//TODO: may not need this below
export const SixColumnAutoRowGridStyle = (
  <style jsx>{`
    .grid-col6 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
    }
  `}</style>
);

//TODO: maybe make flex box style, cos they will stack on top of one another
