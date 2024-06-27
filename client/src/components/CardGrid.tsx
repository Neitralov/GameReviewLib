import {GameCard} from "./GameCard.tsx";
import {FC} from "react";

interface Props {
  reviews: IReview[]
  onClick: (review: IReview) => void
}

export const CardGrid:FC<Props> = ({reviews, onClick}) => {
  if (!reviews.length) {
    return (<h2>Обзоры не найдены :(</h2>)
  }

  return (
    <div className={"grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] justify-items-center gap-5"}>
      { reviews.map(review => <GameCard key={review.id} review={review} onClick={onClick} />) }
    </div>
  )
}