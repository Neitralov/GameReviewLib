import {SmallStarIcon} from "../icons.tsx";
import {FC} from "react";

interface Props {
  review: IReview
  onClick: (review: IReview) => void
}

export const GameCard:FC<Props> = ({review, onClick}) => {
  return (
    <div
      className={"flex flex-col-reverse min-w-[150px] w-[150px] h-[225px] px-3 py-1.5 bg-cover bg-center border-solid border-2 border-gray-300 shadow-[inset_0_-40px_12px_-12px_rgba(0,0,0,35%)] rounded-lg cursor-pointer snap-start"}
      style={{backgroundImage: `url('http://localhost:7432/posters/${review.posterPath}')`}}
      onClick={() => onClick(review)}
      title={review.title}>
      <div className={"flex justify-between"}>
        <p className={"text-sm text-white select-none"}>{review.releaseYear}</p>
        <div className={"flex items-center gap-[1px]"}>
          {displayStars(review.score)}
        </div>
      </div>
    </div>
  )
}

const displayStars = (value: number) => {
  let stars = []

  for (let index = 0; index < value; index++) {
    stars.push(<SmallStarIcon key={index} index={index}/>)
  }

  return stars
}