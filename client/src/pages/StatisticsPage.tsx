import {ValueFieldWithHeader} from "../components/ValueFieldWithHeader.tsx";
import {Details} from "../components/Details.tsx";

export const StatisticsPage = () => {
  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <ValueFieldWithHeader header={"Количество пройденных игр"}>120</ValueFieldWithHeader>
        <ValueFieldWithHeader header={"Количество отложенных игр"}>18</ValueFieldWithHeader>
      </div>

      <div className={"flex flex-col gap-2"}>
        <ValueFieldWithHeader header={"Последняя пройденная игра"}>Escape from Tarkov (2024)</ValueFieldWithHeader>
        <ValueFieldWithHeader header={"Самая новая пройденная игра"}>Cult of the Lamb (2026)</ValueFieldWithHeader>
        <ValueFieldWithHeader header={"Самая старая пройденная игра"}>DOOM (1890)</ValueFieldWithHeader>
      </div>

      <Details header={"Количество пройденных игр по жанрам"} />
      <Details header={"Количество пройденных игр по движку"} />
    </>
  )
}