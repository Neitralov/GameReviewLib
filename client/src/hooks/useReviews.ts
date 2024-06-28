import {useMemo} from "react";

export const useSortedReviews = (reviews: IReview[], sort: number) => {
  return useMemo(() => {
    if (sort === 1) {
      return [...reviews].sort((a, b) => b.score - a.score)
    } else if (sort === 2) {
      return [...reviews].sort((a, b) => a.score - b.score)
    } else {
      return reviews
    }
  }, [sort, reviews])
}

export const useReviews = (reviews: IReview[], sort: number, genre: number, mode: number, engine: number) => {
  const sortedReviews = useSortedReviews(reviews, sort)

  return useMemo(() => {
    return sortedReviews
      .filter(review => genre != 0 ? review.genre == genre : review)
      .filter(review => mode != 0 ? review.mode == mode : review)
      .filter(review => engine != 0 ? review.engine == engine : review)
  }, [sortedReviews, genre, mode, engine])
}