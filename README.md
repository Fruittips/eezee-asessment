# Eezee Frontend Internship Assessment

Author: Mah Yi Da

## How to Run App

1. git clone https://github.com/Fruittips/eezee-asessment.git
2. cd into `eezee-assessment` folder
3. Run `npm install`
4. Run `npm run dev` on root folder to start development server
5. Open http://localhost:3000/ to view application

## Features

1. Persistance of cart quantity across all pages within the application
2. Products could be sorted from price "High to Low" and price "Low to High"
3. Brands are sorted alphabetically in the `/brands` page
4. All brands and products are listed on their respective pages

## Design Considerations

1. Usage of css files together with style jsx to allow for modular styling and reusability within the application.
2. Usage of custom hooks such as `useApiService.js` to allow
3. Separating components into different categories within the application allows for better reading experience for developers
4. Certain parts of the application maintains its state independently, allowing for better isolation of code.
5. Usage of query params and query slugs, to allow for users to go back to page when given a certain url

## File Structure

`/components`:

- All reusable components within the application are stored and categorised here.

`/context`:

- Stores all useContext related functions such as `cartQuantityContext.js`, which allows the quantity of items in the cart to be shared across and components in the application.

`/hooks`:

- Custom hooks to fetch data via api calls are stored here.

`/pages`:

- Stores all pages to be used in the application.

`/services`:

- Contains relevant services to be used within the application.

`/utils`:

- Contains miscellaneous functions needed in the application. In this case, to convert string HTML into HTML.

## Challenges

1. Initial set-up of the entire project structure took a considerate amount of time. Much consideration was made in making sure project structure was modular enough to be scaled.
2. Coming up with common css classes to be used throughout the application. I was not as familiar as to how I should structure my css classes such that they can be reused as much as possible.

## Things to improve on

1. Usage of resusable css classes for styling within the application could be improved further.
2. To provide user feedback upon every action or interaction in the application to improve user experience.
