import {FC, useContext} from "react";
import {NavLink} from "react-router-dom";
import {PrimaryButton} from "../ui/buttons/PrimaryButton.tsx";
import {SearchField} from "../ui/SearchField.tsx";
import {ReviewsContext} from "../context";

interface Props {
  openEditor: () => void
  loadReviewToEditor: (review: IReview) => void
}

export const Header: FC<Props> = ({openEditor, loadReviewToEditor}) => {
  const {reviews} = useContext(ReviewsContext)

  return (
    <header className={"sticky top-0 flex flex-col gap-4 bg-neutral xl:py-5 py-4 shadow-sm z-40"}>

      <div className={"flex xl:container w-full items-center xl:gap-5 gap-4 xl:px-[50px] px-4"}>
        <NavLink to={"/"} className={"xl:text-3xl text-2xl"}>GameReviewLib</NavLink>
        <SearchField placeholder={"Введите название..."} getItem={loadReviewToEditor} data={reviews} />
        <PrimaryButton onClick={openEditor}>
          <span className={"xl:text-xl text-base text-white"}>Добавить</span>
        </PrimaryButton>
      </div>

      <nav className={"flex xl:container w-full items-center gap-2 text-muted xl:px-[50px] px-4"}>
        <NavLink to={"completed"} className={({isActive}) => isActive ? "text-black" : "text-muted" }>
          <span className={"transition hover:text-black"}>Пройденные</span>
        </NavLink>
        <span className={"select-none"}>|</span>
        <NavLink to={"postponed"} className={({isActive}) => isActive ? "text-black" : "text-muted" }>
          <span className={"transition hover:text-black"}>Отложенные</span>
        </NavLink>
        <span className={"select-none"}>|</span>
        <NavLink to={"statistics"} className={({isActive}) => isActive ? "text-black" : "text-muted" }>
          <span className={"transition hover:text-black"}>Статистика</span>
        </NavLink>
      </nav>

    </header>
  )
}