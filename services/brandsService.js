import brandsJson from "../public/static/data/brands.json";

export function getAllBrands({ isSorted = false }) {
  return isSorted ? _categoriseBrandsAlphabetically(brandsJson) : brandsJson;
}

function _sortBrandsAlphabetically(brands) {
  return brands.sort((prev, next) => {
    return prev.name.localeCompare(next.name);
  });
}

function _categoriseBrandsAlphabetically(brands) {
  const sortedBrands = _sortBrandsAlphabetically(brands);

  const groupedBrands = sortedBrands.reduce((prev, next) => {
    let firstLetter = next.name.charAt(0);
    if (!prev[firstLetter]) {
      prev[firstLetter] = { alphabet: firstLetter, brands: [next] };
    } else {
      prev[firstLetter].brands.push(next);
    }
    return prev;
  }, {});

  return groupedBrands;
}
