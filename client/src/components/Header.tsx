import {Button, ButtonColors} from "./Button.tsx";
import {FC} from "react";
import {NavLink} from "react-router-dom";

interface HeaderProps {
  openModal: () => void
}

export const Header: FC<HeaderProps> = ({openModal}) => {
  return (
    <header className="flex flex-col gap-4 sticky top-0 bg-neutral z-40 py-5 shadow">

      <div className="flex items-center container gap-5 px-[50px]">
        <NavLink to={"/"} className="text-3xl h-9">GameReviewLib</NavLink>
        <input className="w-full bg-background h-10 px-5 rounded outline-primary" placeholder="Введите название..." />
        <Button color={ButtonColors.Primary} onClick={openModal}>
          <span className="text-white text-xl">Добавить</span>
        </Button>
      </div>

      <nav className="flex items-center gap-2 container text-muted px-[50px]">
        <NavLink to={"completed"} className={({isActive}) => isActive ? "text-black" : "text-muted" }>Пройденные</NavLink>
        <span>|</span>
        <NavLink to={"postponed"} className={({isActive}) => isActive ? "text-black" : "text-muted" }>Отложенные</NavLink>
        <span>|</span>
        <NavLink to={"statistics"} className={({isActive}) => isActive ? "text-black" : "text-muted" }>Статистика</NavLink>
      </nav>

    </header>
  )
}