import {Button} from "../ui/buttons/Button.tsx";
import {Tag} from "../ui/Tag.tsx";
import {ResetIcon} from "../icons.tsx";
import {useContext, useState} from "react";
import {useOutletContext} from "react-router-dom";
import {CardGrid} from "../components/CardGrid.tsx";
import {Select} from "../ui/Selects/Select.tsx";
import {Sorts} from "../models/Sorts.ts";
import {Genres} from "../models/Genres.ts";
import {Modes} from "../models/Modes.ts";
import {Engines} from "../models/Engines.ts";
import {useReviews} from "../hooks/useReviews.tsx";
import {ReviewsContext} from "../context";

export const PostponedGamesPage = () => {
  const {reviews, isReviewsLoaded} = useContext(ReviewsContext)
  const [loadReviewToEditor] = useOutletContext<[(review: IReview) => void]>()
  const [sort, setSort] = useState(0)
  const [filters, setFilters] = useState({genre: 0, mode: 0, engine: 0})
  const sortedAndFilteredReviews = useReviews(reviews.filter(review => !review.isCompleted), sort, filters.genre, filters.mode, filters.engine)

  const ClearSortAndFilters = () => {
    setSort(0)
    setFilters({genre: 0, mode: 0, engine: 0})
  }

  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2"}>
            <Select header={"Сортировка"} isStretch={false} getItem={setSort} data={Sorts} />
            <Select header={"Жанр"} isStretch={false} getItem={(genre) => setFilters({...filters, genre: genre})} data={Genres} />
            <Select header={"Режим"} isStretch={false} getItem={(mode) => setFilters({...filters, mode: mode})} data={Modes} />
            <Select header={"Движок"} isStretch={false} getItem={(engine) => setFilters({...filters, engine: engine})} data={Engines} />
          </div>

          <div>
            <Button onClick={ClearSortAndFilters}>
              <ResetIcon/>
              <span className={"text-sm"}>Сбросить</span>
            </Button>
          </div>
        </div>

        <div className={"flex gap-2"}>
          { sort != 0 &&
              <Tag>{Sorts[sort].name}</Tag>
          }
          { filters.genre != 0 &&
              <Tag>{Genres[filters.genre].name}</Tag>
          }
          { filters.mode != 0 &&
              <Tag>{Modes[filters.mode].name}</Tag>
          }
          { filters.engine != 0 &&
              <Tag>{Engines[filters.engine].name}</Tag>
          }
        </div>

      </div>

      { isReviewsLoaded && <CardGrid reviews={sortedAndFilteredReviews} onClick={loadReviewToEditor}/> }
    </>
  )
}