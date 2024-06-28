import {FC} from "react";
import {BlankStarIcon, StarIcon} from "../icons.tsx";

interface Props {
  value: number
  setValue: (value: number) => void
}

export const StarRating:FC<Props> = ({value, setValue}) => {

  const getIndex = (index: number) => {
    setValue(index)
  }

  return (
    <div className={"flex gap-1"}>
      { displayStars(value, getIndex) }
    </div>
  )
}

const displayStars = (value: number, action: (index: number) => void) => {
  let stars = []

  for (let index = 1; index <= 5; index++) {
    if (index <= value) {
      stars.push(<StarIcon key={index} index={index} action={action}/>)
    }
    else {
      stars.push(<BlankStarIcon key={index} index={index} action={action}/>)
    }
  }

  return stars
}