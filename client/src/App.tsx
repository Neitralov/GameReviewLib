import Header from "./components/Header.tsx";
import {Tag} from "./components/Tag.tsx";
import {ValueField, ValueFieldColors} from "./components/ValueField.tsx";
import {FontSizes, SingleLineInput} from "./components/SingleLineInput.tsx";
import {MultiLineInput} from "./components/MultiLineInput.tsx";
import {CheckBox, CheckBoxColors} from "./components/CheckBox.tsx";
import {GameCard} from "./components/GameCard.tsx";
import Details from "./components/Details.tsx";
import {Carousel} from "./components/Carousel.tsx";
import {ValueFieldWithHeader} from "./components/ValueFieldWithHeader.tsx";
import {Dropdown, DropdownColors} from "./components/Dropdown.tsx";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-5 min-h-screen bg-background">
        <Header/>
        <main className="flex flex-col gap-5 container px-[50px] pb-5">
          <div className="flex gap-2">
            <Tag>Сначала с высоким рейтингом</Tag>
            <Tag>Action/RPG</Tag>
            <Tag>Одиночные игры</Tag>
            <Tag>Unity Engine</Tag>
          </div>
          <ValueField color={ValueFieldColors.Neutral}><span className="text-base">120</span></ValueField>
          <div className="flex flex-col gap-2 bg-neutral p-2 rounded">
            <h2>Однострочное поле ввода</h2>
            <SingleLineInput fontSize={FontSizes.sm} placeholder="Введите текст..."/>
          </div>
          <div className="flex flex-col gap-2 bg-neutral p-2 rounded">
            <h2>Многострочное поле ввода</h2>
            <MultiLineInput fontSize={FontSizes.sm} placeholder="Введите много текста..."/>
          </div>
          <CheckBox color={CheckBoxColors.Neutral}>Checkbox</CheckBox>
          <Dropdown header={"Сортировка"} isStretch={false} color={DropdownColors.Neutral}/>
          <div className={"bg-neutral p-2"}><Dropdown header={"Сортировка"} isStretch={false} color={DropdownColors.Background}/></div>
          <Dropdown header={"Жанр"} isStretch={true} color={DropdownColors.Neutral}/>
          <GameCard/>
          <ValueFieldWithHeader header={"Заголовок"}>120</ValueFieldWithHeader>
          <Details />
          <Carousel header={"Зал славы"} isGradientBackground={true}>
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
          <Carousel header={"Лучшие игры в жанре песочница"} isGradientBackground={false}>
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
        </main>
      </div>
    </>
  )
}