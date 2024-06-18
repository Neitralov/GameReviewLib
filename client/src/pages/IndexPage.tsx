import {Carousel} from "../components/Carousel.tsx";
import {GameCard} from "../components/GameCard.tsx";

export const IndexPage = () => {
  return (
    <>
      <Carousel header={"🎉 Зал славы - Лучшие игры за все время! 🎉"} isGradientBackground={true}>
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
      </Carousel>

      <Carousel header={"Лучшие игры в жанре Action/RPG"} isGradientBackground={false}>
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
      </Carousel>
    </>
  )
}