import {SmallStarIcon} from "../icons.tsx";

export const GameCard = () => {
  return (
    <div
      className={"flex flex-col-reverse min-w-[150px] w-[150px] h-[225px] bg-cover px-3 py-1.5 rounded-lg shadow-[inset_0_-35px_12px_-12px_rgba(0,0,0,35%)] cursor-pointer snap-start"}
      style={{backgroundImage: "url('/minecraft.png')"}}>
      <div className={"flex justify-between"}>
        <p className={"text-sm text-white select-none"}>2009</p>
        <div className={"flex items-center gap-[1px]"}>
          { DisplayStars(5) }
        </div>
      </div>
    </div>
  )
}

function DisplayStars(value: number) {
  let stars = []

  for (let index = 0; index < value; index++) {
    stars.push(<SmallStarIcon key={index} index={index}/>)
  }

  return stars
}