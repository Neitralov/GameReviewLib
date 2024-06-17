import {useState} from "react";

type GetIndexAction = (index: number) => void

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

function DisplayStars(value: number, action: GetIndexAction) {
  let stars = []

  for (let index = 1; index <= 5; index++) {
    if (index <= value) {
      stars.push(
        <svg key={index} className="fill-star" width="32" height="32" viewBox="0 0 32 32" onClick={() => action(index)}>
          <path
            d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
        </svg>
      )
    }
    else {
      stars.push(
        <svg key={index} className="fill-background" width="32" height="32" viewBox="0 0 32 32" onClick={() => action(index)}>
          <path
            d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
        </svg>
      )
    }
  }

  return stars
}