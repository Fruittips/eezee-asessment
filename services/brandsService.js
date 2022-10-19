import brandsJson from "../public/static/data/brands.json";

export function getAllBrands() {
  return brandsJson;
}

export function sortBrandsAlphabetically(brands) {
  return brands.sort((prev, next) => {
    return prev.name.localeCompare(next.name);
  });
}

export function categoriseBrandsAlphabetically(brands) {
  const sortedBrands = sortBrandsAlphabetically(brands);

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
/* categoriseBrandsAlphabetically(brands) returns this: 
{
A : { alphabet: 'A',
      brands: [obj, obj] },
B : { alphabet: 'B',
      brands: [obj, obj, obj] },
.... } 
}
*/
