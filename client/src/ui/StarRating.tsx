import {useState} from "react";
import {BlankStarIcon, StarIcon} from "../icons.tsx";

export const StarRating = () => {
  const [value, setValue] = useState(0);

  function GetIndex(index: number) {
    setValue(index)
  }

  return (
    <div className={"flex gap-1"}>
      { DisplayStars(value, GetIndex) }
    </div>
  )
}

function DisplayStars(value: number, action: (index: number) => void) {
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