import {ValueFieldWithHeader} from "../components/ValueFieldWithHeader.tsx";
import {Details} from "../components/Details.tsx";
import {useEffect, useState} from "react";
import StatisticService from "../api/StatisticService.ts";
import {BgValueField} from "../ui/value-fields/BgValueField.tsx";
import {Engines} from "../models/Engines.ts";
import {Genres} from "../models/Genres.ts";
import {Modes} from "../models/Modes.ts";

export const StatisticsPage = () => {
  const [numberOfCompletedGames, setNumberOfCompletedGames] = useState(0)
  const [numberOfPostponedGames, setNumberOfPostponedGames] = useState(0)
  const [lastCompletedGame, setLastCompletedGame] = useState('')
  const [newestCompletedGame, setNewestCompletedGame] = useState('')
  const [oldestCompletedGame, setOldestCompletedGame] = useState('')
  const [ratingOfCompletedGamesByGenre, setRatingOfCompletedGamesByGenre] = useState<{count: number, value: number}[]>([])
  const [ratingOfCompletedGamesByMode, setRatingOfCompletedGamesByMode] = useState<{count: number, value: number}[]>([])
  const [ratingOfCompletedGamesByEngine, setRatingOfCompletedGamesByEngine] = useState<{count: number, value: number}[]>([])
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

            <Details header={"Количество пройденных игр по жанрам"}>
              { ratingOfCompletedGamesByGenre.map(item =>
                <BgValueField key={item.value}>
                  <span className={"text-base"}>{item.count} - {Genres.find(genre => genre.id == item.value)!.name}</span>
                </BgValueField>
              )}
            </Details>
            <Details header={"Количество пройденных игр по режиму"}>
              { ratingOfCompletedGamesByMode.map(item =>
                <BgValueField key={item.value}>
                  <span className={"text-base"}>{item.count} - {Modes[item.value].name}</span>
                </BgValueField>
              )}
            </Details>
            <Details header={"Количество пройденных игр по движку"}>
              { ratingOfCompletedGamesByEngine.map(item =>
                <BgValueField key={item.value}>
                  <span className={"text-base"}>{item.count} - {Engines.find(engine => engine.id == item.value)!.name}</span>
                </BgValueField>
              )}
            </Details>
          </>
      }
    </>
  )
}