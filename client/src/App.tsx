import {Header} from "./components/Header.tsx";
import {Modal} from "./components/Modal.tsx";
import {useState} from "react";
import {Button, ButtonColors} from "./components/Button.tsx";
import {Preview} from "./components/Preview.tsx";
import {SingleLineInput} from "./components/SingleLineInput.tsx";
import {Dropdown, DropdownColors} from "./components/Dropdown.tsx";
import {CheckBox, CheckBoxColors} from "./components/CheckBox.tsx";
import {StarRating} from "./components/StarRating.tsx";
import {FontSizes, MultiLineInput} from "./components/MultiLineInput.tsx";
import {Outlet} from "react-router-dom";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="flex flex-col gap-5 min-h-screen bg-background">
        <Header openModal={openModal}/>
        <main className="flex flex-col gap-5 container px-[50px] pb-5">
          <Outlet />
        </main>
      </div>

      <Modal isOpen={isModalOpen}>
        <div className={"flex flex-col gap-5"}>
          <div className={"flex gap-5"}>
            <div className={"flex flex-col gap-2"}>
              <Preview />
              <Button color={ButtonColors.Background} onClick={() => null}>
                <span className={"text-sm"}>Загрузить обложку</span>
              </Button>
            </div>
            <div className={"flex flex-col gap-2 w-full"}>
              <div className={"flex flex-col gap-1"}>
                <h2>Название</h2>
                <SingleLineInput placeholder={"Введите название..."} fontSize={FontSizes.sm}/>
              </div>
              <div className={"flex flex-col gap-1"}>
                <h2>Дата выхода</h2>
                <SingleLineInput placeholder={"Введите название..."} fontSize={FontSizes.sm}/>
              </div>
              <div className={"flex flex-col gap-1"}>
                <h2>Жанр</h2>
                <Dropdown header={"Action/RPG"} isStretch={true} color={DropdownColors.Background}/>
              </div>
              <div className={"flex gap-3"}>
                <div className={"flex flex-col gap-1 w-full"}>
                  <h2>Режим</h2>
                  <Dropdown header={"Одиночная игра"} isStretch={true} color={DropdownColors.Background}/>
                </div>
                <div className={"flex flex-col gap-1 w-full"}>
                  <h2>Движок</h2>
                  <Dropdown header={"Unity Engine"} isStretch={true} color={DropdownColors.Background}/>
                </div>
              </div>
              <div className={"flex flex-col gap-1 w-full"}>
                <h2>Статус</h2>
                <CheckBox color={CheckBoxColors.Background}>
                  <span className={"text-sm"}>Пройдена</span>
                </CheckBox>
              </div>
              <div className={"flex flex-col gap-1 w-full"}>
                <h2>Оценка</h2>
                <div className={"flex gap-3"}>
                  <StarRating/>
                  <CheckBox color={CheckBoxColors.Background}>
                    <span className={"text-sm"}>Добавить в зал славы?</span>
                  </CheckBox>
                </div>
              </div>
              <div className={"flex flex-col gap-1 w-full"}>
                <h2>Комментарий</h2>
                <MultiLineInput placeholder={"Введите комменатрий..."} fontSize={FontSizes.sm} />
              </div>
            </div>
          </div>
          <div className={"flex justify-between"}>
            <div>
              <Button color={ButtonColors.Background} onClick={() => setIsModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                     fill="#000">
                  <path
                    d="M384-192q-80 0-136-56t-56-136q0-80 56-136t136-56h246l-93-93 51-51 180 180-180 180-51-51 93-93H384q-50 0-85 35t-35 85q0 50 35 85t85 35h288v72H384Z"/>
                </svg>
                <span className={"text-sm"}>Закрыть</span>
              </Button>
            </div>
            <div className={"flex gap-3"}>
              <Button color={ButtonColors.Danger} onClick={() => setIsModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                     fill="#fff">
                  <path
                    d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/>
                </svg>
                <span className={"text-sm text-white"}>Удалить</span>
              </Button>
              <Button color={ButtonColors.Primary} onClick={() => setIsModalOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                     fill="#fff">
                  <path
                    d="M240-144v-600q0-30.11 21-51.56Q282-817 312-816h216v72H312v493l168-67 168 67v-277h72v384l-240-96-240 96Zm72-600h216-216Zm372 132v-72h-72v-72h72v-72h72v72h72v72h-72v72h-72Z"/>
                </svg>
                <span className={"text-sm text-white"}>Сохранить</span>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}