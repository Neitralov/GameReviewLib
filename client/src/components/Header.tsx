import {Button, ButtonColors} from "./Button.tsx";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 sticky top-0 bg-neutral z-50 py-5 shadow">

      <div className="flex items-center container gap-5 px-[50px]">
        <h1 className="text-3xl h-9">GameReviewLib</h1>
        <input className="w-full bg-background h-10 px-5 rounded" placeholder="Введите название..." />
        <Button color={ButtonColors.Primary}>
          <span className="text-white text-xl">Добавить</span>
        </Button>
      </div>

      <nav className="flex items-center gap-2 container text-muted px-[50px]">
        <a>Пройденные</a>
        <span>|</span>
        <a>Отложенные</a>
        <span>|</span>
        <a>Статистика</a>
      </nav>

    </header>
  )
}