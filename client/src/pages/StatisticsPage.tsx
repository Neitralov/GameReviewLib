import {ValueFieldWithHeader} from "../components/ValueFieldWithHeader.tsx";
import {Details} from "../components/Details.tsx";
import {useEffect, useState} from "react";
import StatisticService from "../api/StatisticService.ts";

export const StatisticsPage = () => {
  const [numberOfCompletedGames, setNumberOfCompletedGames] = useState(0)
  const [numberOfPostponedGames, setNumberOfPostponedGames] = useState(0)
  const [lastCompletedGame, setLastCompletedGame] = useState('')
  const [newestCompletedGame, setNewestCompletedGame] = useState('')
  const [oldestCompletedGame, setOldestCompletedGame] = useState('')
  const [ratingOfCompletedGamesByGenre, setRatingOfCompletedGamesByGenre] = useState<{count: number, value: string}[]>([])
  const [ratingOfCompletedGamesByMode, setRatingOfCompletedGamesByMode] = useState<{count: number, value: string}[]>([])
  const [ratingOfCompletedGamesByEngine, setRatingOfCompletedGamesByEngine] = useState<{count: number, value: string}[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetchStatistics().then(() => setIsLoaded(true))
  }, [])

  const fetchStatistics = async () => {
    setNumberOfCompletedGames(await StatisticService.getNumberOfCompletedGames())
    setNumberOfPostponedGames(await StatisticService.getNumberOfPostponedGames())
    setLastCompletedGame(await StatisticService.getLastCompletedGame())
    setNewestCompletedGame(await StatisticService.getNewestCompletedGame())
    setOldestCompletedGame(await StatisticService.getOldestCompletedGame())
    setRatingOfCompletedGamesByGenre(await StatisticService.getRatingOfCompletedGamesByGenre())
    setRatingOfCompletedGamesByMode(await StatisticService.getRatingOfCompletedGamesByMode())
    setRatingOfCompletedGamesByEngine(await StatisticService.getRatingOfCompletedGamesByEngine())
  }

  return (
    <>
      { isLoaded &&
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
      }
    </>
  )
}