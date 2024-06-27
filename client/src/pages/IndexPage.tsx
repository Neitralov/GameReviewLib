import {Carousel} from "../components/Carousel.tsx";
import {GameCard} from "../components/GameCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useOutletContext} from "react-router-dom";

export const IndexPage = () => {
  const [reviewsOfBestGames, setReviewsOfBestGames] = useState<IReview[]>([]);
  const [LoadReviewToEditor] = useOutletContext<[(review: IReview) => void]>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetchData().then(() => setIsLoaded(true))
  }, [])

  async function fetchData() {
    setReviewsOfBestGames((await axios.get<IReview[]>('http://localhost:8081/api/reviews/hall-of-flame')).data)
  }

  return (
    <>
      {isLoaded && reviewsOfBestGames.length == 0 &&
          <h2>Главная страница выглядит пустоватой :(<br/>Начните добавлять обзоры в библиотеку!</h2>
      }

      {isLoaded && reviewsOfBestGames.length > 0 &&
          <Carousel header={"🎉 Зал славы - Лучшие игры за все время! 🎉"} isGradientBackground={true}>
            { reviewsOfBestGames.map(review => <GameCard key={review.id} review={review} onClick={LoadReviewToEditor} />)}
          </Carousel>
      }
    </>
  )
}