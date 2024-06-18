import {FC} from "react";
import {Preview} from "../ui/Preview.tsx";
import {CheckBox} from "../ui/CheckBox.tsx";
import {StarRating} from "../ui/StarRating.tsx";
import {BgButton} from "../ui/buttons/BgButton.tsx";
import {DangerButton} from "../ui/buttons/DangerButton.tsx";
import {PrimaryButton} from "../ui/buttons/PrimaryButton.tsx";
import {BackIcon, SaveIcon, TrashBinIcon} from "../icons.tsx";
import {BgSelectWithHeader} from "../components/BgSelectWithHeader.tsx";
import {SingleLineInputWithHeader} from "../components/SingleLineInputWithHeader.tsx";
import {CheckBoxWithHeader} from "../components/CheckBoxWithHeader.tsx";
import {MultiLineInputWithHeader} from "../components/MultiLineInputWithHeader.tsx";

interface Props {
  setIsModalOpen: (isOpen: boolean) => void;
}

export const ReviewEditor: FC<Props> = ({setIsModalOpen}) => {
  return (
    <div className={"flex flex-col xl:gap-5 gap-4"}>
      <div className={"flex xl:gap-5 gap-4"}>

        <div className={"flex flex-col gap-2"}>
          <Preview/>
          <BgButton onClick={() => null}>
            <span className={"text-sm"}>Загрузить обложку</span>
          </BgButton>
        </div>

        <div className={"flex flex-col gap-2 w-full"}>
          <SingleLineInputWithHeader header={"Название"} placeholder={"Введите название..."} />
          <SingleLineInputWithHeader header={"Дата выхода"} placeholder={"Введите дату"} />
          <BgSelectWithHeader header={"Жанр"} selectHeader={"Action/RPG"} />
          <div className={"flex gap-3"}>
            <BgSelectWithHeader header={"Режим"} selectHeader={"Одиночная игра"} />
            <BgSelectWithHeader header={"Движок"} selectHeader={"Unity Engine"} />
          </div>
          <CheckBoxWithHeader header={"Статус"} label={"Пройдена"} />
          <div className={"flex flex-col w-full gap-1"}>
            <h2>Оценка</h2>
            <div className={"flex gap-3"}>
              <StarRating />
              <CheckBox>
                <span className={"text-sm"}>Добавить в зал славы?</span>
              </CheckBox>
            </div>
          </div>
          <MultiLineInputWithHeader header={"Комментарий"} placeholder={"Введите комменатрий..."} />

        </div>
      </div>

      <div className={"flex justify-between"}>
        <div>
          <BgButton onClick={() => setIsModalOpen(false)}>
            <BackIcon/>
            <span className={"text-sm"}>Закрыть</span>
          </BgButton>
        </div>

        <div className={"flex gap-3"}>
          <DangerButton onClick={() => setIsModalOpen(false)}>
            <TrashBinIcon/>
            <span className={"text-sm text-white"}>Удалить</span>
          </DangerButton>

          <PrimaryButton onClick={() => setIsModalOpen(false)}>
            <SaveIcon/>
            <span className={"text-sm text-white"}>Сохранить</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
