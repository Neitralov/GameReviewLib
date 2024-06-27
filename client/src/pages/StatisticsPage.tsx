import {ValueFieldWithHeader} from "../components/ValueFieldWithHeader.tsx";
import {Details} from "../components/Details.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const StatisticsPage = () => {
  const [numberOfCompletedGames, setNumberOfCompletedGames] = useState(0)
  const [numberOfPostponedGames, setNumberOfPostponedGames] = useState(0)
  const [lastCompletedGame, setLastCompletedGame] = useState('')
  const [newestCompletedGame, setNewestCompletedGame] = useState('')
  const [oldestCompletedGame, setOldestCompletedGame] = useState('')
  const [ratingOfCompletedGamesByGenre, setRatingOfCompletedGamesByGenre] = useState<{count: number, value: string}[]>([])
  const [ratingOfCompletedGamesByMode, setRatingOfCompletedGamesByMode] = useState<{count: number, value: string}[]>([])
  const [ratingOfCompletedGamesByEngine, setRatingOfCompletedGamesByEngine] = useState<{count: number, value: string}[]>([])

  useEffect(() => {
    fetchStatistics().then(x => x)
  }, [])

  async function fetchStatistics() {
    setNumberOfCompletedGames((await axios.get<number>('http://localhost:8081/api/statistics/number-of-completed-games')).data)
    setNumberOfPostponedGames((await axios.get<number>('http://localhost:8081/api/statistics/number-of-postponed-games')).data)
    setLastCompletedGame((await axios.get<string>('http://localhost:8081/api/statistics/last-completed-game')).data)
    setNewestCompletedGame((await axios.get<string>('http://localhost:8081/api/statistics/newest-completed-game')).data)
    setOldestCompletedGame((await axios.get<string>('http://localhost:8081/api/statistics/oldest-completed-game')).data)
    setRatingOfCompletedGamesByGenre((await axios.get<{count: number, value: string}[]>('http://localhost:8081/api/statistics/rating-of-completed-games-by-genre')).data)
    setRatingOfCompletedGamesByMode((await axios.get<{count: number, value: string}[]>('http://localhost:8081/api/statistics/rating-of-completed-games-by-mode')).data)
    setRatingOfCompletedGamesByEngine((await axios.get<{count: number, value: string}[]>('http://localhost:8081/api/statistics/rating-of-completed-games-by-engine')).data)
  }

  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <ValueFieldWithHeader header={"Количество пройденных игр"}>{numberOfCompletedGames}</ValueFieldWithHeader>
        <ValueFieldWithHeader header={"Количество отложенных игр"}>{numberOfPostponedGames}</ValueFieldWithHeader>
      </div>

      <div className={"flex flex-col gap-2"}>
        <ValueFieldWithHeader header={"Последняя пройденная игра"}>{lastCompletedGame}</ValueFieldWithHeader>
        <ValueFieldWithHeader header={"Самая новая пройденная игра"}>{newestCompletedGame}</ValueFieldWithHeader>
        <ValueFieldWithHeader header={"Самая старая пройденная игра"}>{oldestCompletedGame}</ValueFieldWithHeader>
      </div>

      <Details header={"Количество пройденных игр по жанрам"} data={ratingOfCompletedGamesByGenre} />
      <Details header={"Количество пройденных игр по режиму"} data={ratingOfCompletedGamesByMode} />
      <Details header={"Количество пройденных игр по движку"} data={ratingOfCompletedGamesByEngine} />
    </>
  )
}