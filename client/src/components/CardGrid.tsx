import {GameCard} from "./GameCard.tsx";

export const CardGrid = () => {
  return (
    <div className={"grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] justify-items-center gap-5"}>
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