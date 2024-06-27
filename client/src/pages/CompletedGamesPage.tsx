import {Select} from "../ui/Selects/Select.tsx";
import {Button} from "../ui/buttons/Button.tsx";
import {Tag} from "../ui/Tag.tsx";
import {CardGrid} from "../components/CardGrid.tsx";
import {ResetIcon} from "../icons.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useOutletContext} from "react-router-dom";
import {Sorts} from "../models/Sorts.ts";
import {Genres} from "../models/Genres.ts";
import {Modes} from "../models/Modes.ts";
import {Engines} from "../models/Engines.ts";
import {useReviews} from "../hooks/useReviews.tsx";

export const CompletedGamesPage = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [LoadReviewToEditor, isEditorOpen] = useOutletContext<[(review: IReview) => void, boolean]>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [sort, setSort] = useState(0)
  const [filters, setFilters] = useState({genre: 0, mode: 0, engine: 0})
  const sortedAndFilteredReviews = useReviews(reviews, sort, filters.genre, filters.mode, filters.engine)

  useEffect(() => {
    fetchReviews().then(() => setIsLoaded(true))
  }, [isEditorOpen])

  async function fetchReviews() {
    const response = await axios.get<IReview[]>('http://localhost:8081/api/reviews')
    setReviews(response.data.filter(review => review.isCompleted))
  }

  function ClearSortAndFilters() {
    setSort(0)
    setFilters({genre: 0, mode: 0, engine: 0})
  }

  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2"}>
            <Select header={"Сортировка"} isStretch={false} GetItem={setSort} Data={Sorts} />
            <Select header={"Жанр"} isStretch={false} GetItem={(genre) => setFilters({...filters, genre: genre})} Data={Genres} />
            <Select header={"Режим"} isStretch={false} GetItem={(mode) => setFilters({...filters, mode: mode})} Data={Modes} />
            <Select header={"Движок"} isStretch={false} GetItem={(engine) => setFilters({...filters, engine: engine})} Data={Engines} />
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

      { isLoaded && <CardGrid reviews={sortedAndFilteredReviews} onClick={LoadReviewToEditor}/> }
    </>
  )
}