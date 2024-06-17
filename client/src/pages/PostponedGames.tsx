import {Dropdown, DropdownColors} from "../components/Dropdown.tsx";
import {Button, ButtonColors} from "../components/Button.tsx";
import {Tag} from "../components/Tag.tsx";
import CardGrid from "../components/CardGrid.tsx";

export default function PostponedGames() {
  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2"}>
            <Dropdown header={"Сортировка"} isStretch={false} color={DropdownColors.Neutral} />
            <Dropdown header={"Жанр"} isStretch={false} color={DropdownColors.Neutral} />
            <Dropdown header={"Режим"} isStretch={false} color={DropdownColors.Neutral} />
            <Dropdown header={"Движок"} isStretch={false} color={DropdownColors.Neutral} />
          </div>
          <div>
            <Button color={ButtonColors.Neutral} onClick={() => null}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                   fill="#000">
                <path
                  d="M444-144q-107-14-179.5-94.5T192-430q0-61 23-113.5t63-91.5l51 51q-30 29-47.5 69T264-430q0 81 51.5 140T444-217v73Zm72 0v-73q77-13 128.5-72.5T696-430q0-90-63-153t-153-63h-7l46 46-51 50-132-132 132-132 51 51-45 45h6q120 0 204 84t84 204q0 111-72.5 192T516-144Z"/>
              </svg>
              <span className={"text-sm"}>Сбросить</span>
            </Button>
          </div>
        </div>
        <div className={"flex gap-2"}>
          <Tag>Сначала с высоким рейтингом</Tag>
          <Tag>Action/RPG</Tag>
          <Tag>Одиночные игры</Tag>
          <Tag>Unity Engine</Tag>
        </div>
      </div>

      <CardGrid />
    </>
  )
}