import {GameCard} from "./GameCard.tsx";

export default function CardGrid() {
  return (
    <div className={"grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-5 justify-items-center"}>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  )
}