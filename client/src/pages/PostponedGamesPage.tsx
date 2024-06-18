import {Select} from "../ui/Selects/Select.tsx";
import {Button} from "../ui/buttons/Button.tsx";
import {Tag} from "../ui/Tag.tsx";
import {CardGrid} from "../components/CardGrid.tsx";
import {ResetIcon} from "../icons.tsx";

export const PostponedGamesPage = () => {
  return (
    <>
      <div className={"flex flex-col gap-2"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2"}>
            <Select header={"Сортировка"} isStretch={false} />
            <Select header={"Жанр"} isStretch={false} />
            <Select header={"Режим"} isStretch={false} />
            <Select header={"Движок"} isStretch={false} />
          </div>

          <div>
            <Button onClick={() => null}>
              <ResetIcon/>
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