import {FC, useState} from "react";

interface Props {
  placeholder: string
  getItem: (review: IReview) => void
  data: IReview[]
}

export const SearchField: FC<Props> = ({placeholder, getItem, data}) => {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [foundReviews, setFoundReviews] = useState<IReview[]>([])

  const selectItem = (review: IReview) => {
    getItem(review)
    setValue('')
    setIsOpen(false)
  }

  const onChange = (value: string) => {
    const foundReviews = data
      .filter(review => review.title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 11)

    setFoundReviews(foundReviews)
    setIsOpen(value.length >= 3 && foundReviews.length > 0)
    setValue(value)
  }

  return (
    <div className={"relative w-full"}>
      <input
        className={"w-full xl:h-10 h-9 bg-background xl:text-base text-sm px-5 rounded outline-primary"}
        placeholder={placeholder}
        onClick={() => setIsOpen(value.length >= 3 && foundReviews.length > 0)}
        onBlur={() => setIsOpen(false)}
        value={value}
        onChange={(e) => onChange(e.target.value)}/>

      <div
        className={`absolute ${isOpen ? "" : "hidden"} w-full bg-background mt-1 px-2 py-1.5 shadow-md rounded z-10`}>
        { foundReviews
            .map(review =>
              <p key={review.id}
               className={"hover:bg-background-hover xl:text-base text-sm px-2 py-0.5 rounded cursor-pointer"}
               onMouseDown={() => selectItem(review)}>{`${review.title} (${review.releaseYear})`}</p>
        )}
      </div>
    </div>
  )
}