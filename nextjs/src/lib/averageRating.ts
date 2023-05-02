import { ReviewsQuery } from "@/__generated__/graphql";

function averageRating(reviews: ReviewsQuery["reviews"] | undefined) {
  if (reviews == undefined) {
    return 0
  }
  const total = reviews?.reduce((acc, curr) => curr.rating + acc, 0)
  const length = reviews?.length
  return total / length

}

export { averageRating }