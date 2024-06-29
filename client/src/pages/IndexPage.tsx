import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import ReviewService from "../api/ReviewService.ts";
import {CardGrid} from "../components/CardGrid.tsx";

export const IndexPage = () => {
  const [reviewsOfBestGames, setReviewsOfBestGames] = useState<IReview[]>([]);
  const [loadReviewToEditor] = useOutletContext<[(review: IReview) => void]>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetchData().then(() => setIsLoaded(true))
  }, [])

  const fetchData = async () => {
    setReviewsOfBestGames(await ReviewService.getHallOfFlame())
  }

  return (
    <>
      <h2 className={"w-full text-center text-xl "}>
        🎉
        <span className={"underline underline-offset-4 decoration-4 decoration-primary"}>
          Зал славы - Лучшие игры за все время!
        </span>
        🎉
      </h2>

      {isLoaded && reviewsOfBestGames.length == 0 &&
          <h2>Главная страница выглядит пустоватой :(<br/>Начните добавлять обзоры в библиотеку!</h2>
      }
      {isLoaded && reviewsOfBestGames.length > 0 &&
          <CardGrid reviews={reviewsOfBestGames} onClick={loadReviewToEditor}/>
      }
    </>
  )
}