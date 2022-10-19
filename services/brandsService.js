import brandsJson from "../public/static/data/brands.json";

export function getAllBrands() {
  return brandsJson;
}

export function sortBrandsAlphabetically(brands) {
  return brandsJson.sort((prev, next) => {
    prev.name.localeCompare(next.name);
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

/* {
A : { alphabet: 'A',
      brands: [obj, obj] },
B : { alphabet: 'B',
      brands: [obj, obj, obj] },
.... } 
}
*/
