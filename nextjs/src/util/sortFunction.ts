import { ProductsQuery } from "@/__generated__/graphql";

export const sortFunction = (a: ProductsQuery["products"][number], b: ProductsQuery["products"][number], sortType: Sort) => {
  switch (sortType) {
    case 'Default' : return a.rating
    case 'Name (A - Z)' : return a.title.localeCompare(b.title)
    case 'Name (Z - A)' : return b.title.localeCompare(a.title)
    case 'Price (Low > High)' : return a.price - b.price
    case 'Price (High > Low)' : return b.price - a.price
    case 'Rating (Highest)' : return b.rating - a.rating
    case 'Rating (Lowest)': return a.rating - b.rating

  }
}