import React, {ChangeEvent, FC, useContext} from "react";
import {Preview} from "../ui/Preview.tsx";
import {CheckBox} from "../ui/CheckBox.tsx";
import {StarRating} from "../ui/StarRating.tsx";
import {BgButton} from "../ui/buttons/BgButton.tsx";
import {DangerButton} from "../ui/buttons/DangerButton.tsx";
import {PrimaryButton} from "../ui/buttons/PrimaryButton.tsx";
import {BackIcon, SaveIcon, TrashBinIcon} from "../icons.tsx";
import {BgSelectWithHeader} from "../components/BgSelectWithHeader.tsx";
import {SingleLineInputWithHeader} from "../components/SingleLineInputWithHeader.tsx";
import {SingleNumberInputWithHeader} from "../components/SingleNumberInputWithHeader.tsx";
import {CheckBoxWithHeader} from "../components/CheckBoxWithHeader.tsx";
import {MultiLineInputWithHeader} from "../components/MultiLineInputWithHeader.tsx";
import {Genres} from "../models/Genres.ts";
import {Modes} from "../models/Modes.ts";
import {Engines} from "../models/Engines.ts";
import axios from "axios";
import {ReviewsContext} from "../context";

interface Props {
  setIsModalOpen: (isOpen: boolean) => void;
  review: IReview
  setReview: React.Dispatch<React.SetStateAction<IReview>>
}

export const ReviewEditor: FC<Props> = ({setIsModalOpen, review, setReview}) => {
  const {reviews, setReviews} = useContext(ReviewsContext)

  async function UploadImage(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files != null ) {
      let image = e.target.files[0]
      let formData = new FormData()
      formData.append("file", image)
      let response = await fetch('http://localhost:8081/api/reviews/upload-poster', {method: "POST", body: formData})
      if (response.ok) {
        setReview(prevState => ({...prevState, posterPath: image.name}))
      }
    }
  }

  function SetIsCompleted(value: boolean) {
    setReview(prevState => ({...prevState, isCompleted: value}))
    if (!value)
      setReview(prevState => ({...prevState, score: 0}))
  }

  function SetScore(value: number) {
    setReview(prevState => ({...prevState, score: value}))
    if (value < 5)
      setReview(prevState => ({...prevState, isBestGame: false}))
  }

  async function Save() {
    if (review.id == '') {
      await axios.post<IReview>('http://localhost:8081/api/reviews', review)
        .then(response => {
          if (response.status == 201 && setReviews != null) {
            const newReview = response.data
            setReviews([newReview, ...reviews])
          }
        })
    } else {
      await axios.put<IReview>('http://localhost:8081/api/reviews', review)
        .then(response => {
          if (response.status == 204 && setReviews != null) {
            const index = reviews.findIndex(item => item.id == review.id)
            reviews.splice(index, 1)
            setReviews([review, ...reviews])
          }
        })
    }

    setReview({ id: '', title: '', releaseYear: 0, genre: 0, mode: 0, engine: 0, isCompleted: false, score: 0, isBestGame: false, comment: '', posterPath: ''})
    setIsModalOpen(false)
  }

  async function Remove() {
    await axios.delete<IReview>(`http://localhost:8081/api/reviews/${review.id}`)
      .then(response => {
        if (response.status == 204 && setReviews != null) {
          const index = reviews.findIndex(item => item.id == review.id)
          reviews.splice(index, 1)
        }
      })

    setReview({ id: '', title: '', releaseYear: 0, genre: 0, mode: 0, engine: 0, isCompleted: false, score: 0, isBestGame: false, comment: '', posterPath: ''})
    setIsModalOpen(false)
  }

  function Back() {
    setReview({ id: '', title: '', releaseYear: 0, genre: 0, mode: 0, engine: 0, isCompleted: false, score: 0, isBestGame: false, comment: '', posterPath: ''})
    setIsModalOpen(false)
  }

  return (
    <div className={"flex flex-col xl:gap-5 gap-4 justify-between xl:min-h-[560px] min-h-[556px]"}>
      <div className={"flex xl:gap-5 gap-4"}>

        <div className={"flex flex-col gap-2"}>
          { review.posterPath == ''
            ? <div
              className={"flex justify-center items-center min-w-[180px] w-[180px] h-[270px] text-sm bg-background rounded-lg"}>
              Обложка отсутствует
            </div>
            : <Preview imageUrl={`http://localhost:8081/${review.posterPath}`}/>
          }
          <label
            htmlFor={"image"}
            className={"flex justify-center items-center h-fit gap-0.5 bg-background hover:bg-background-hover text-sm px-3 py-1.5 rounded shadow-sm"}>
            Загрузить обложку
            <input id={"image"} type={"file"} onChange={UploadImage}/>
          </label>
        </div>

        <div className={"flex flex-col gap-2 w-full"}>
          <SingleLineInputWithHeader
            header={"Название"}
            placeholder={"Введите название..."}
            value={review.title}
            onChange={e => setReview(prevState => ({...prevState, title: e.target.value}))} />
          <SingleNumberInputWithHeader
            header={"Дата выхода"}
            placeholder={"Введите дату"}
            value={review.releaseYear}
            onChange={e => setReview(prevState => ({...prevState, releaseYear: Number(e.target.value)}))} />
          <BgSelectWithHeader
            header={"Жанр"}
            selectHeader={Genres[review.genre].name}
            GetItem={(index) => setReview(prevState => ({...prevState, genre: index}))}
            Data={Genres.filter(genre => genre.id != 0)} />
          <div className={"flex gap-3"}>
            <BgSelectWithHeader
              header={"Режим"}
              selectHeader={Modes[review.mode].name}
              GetItem={(index) => setReview(prevState => ({...prevState, mode: index}))}
              Data={Modes.filter(mode => mode.id != 0)} />
            <BgSelectWithHeader
              header={"Движок"}
              selectHeader={Engines[review.engine].name}
              GetItem={(index) => setReview(prevState => ({...prevState, engine: index}))}
              Data={Engines.filter(engine => engine.id != 0)} />
          </div>
          <CheckBoxWithHeader
            header={"Статус"}
            label={"Пройдена"}
            value={review.isCompleted}
            setValue={SetIsCompleted} />
          { review.isCompleted &&
            <div className={"flex flex-col w-full gap-1"}>
              <h2>Оценка</h2>
              <div className={"flex gap-3"}>
                <StarRating value={review.score} setValue={SetScore}/>
                {review.score == 5 &&
                  <CheckBox
                    value={review.isBestGame}
                    setValue={(value) => setReview(prevState => ({...prevState, isBestGame: value}))}>
                    <span className={"text-sm"}>Добавить в зал славы?</span>
                  </CheckBox>
                }
              </div>
            </div>
          }
          <MultiLineInputWithHeader
            header={"Комментарий"}
            placeholder={"Введите комменатрий..."}
            value={review.comment == null ? '' : review.comment}
            setValue={(e) => setReview(prevState => ({...prevState, comment: e.target.value}))} />

        </div>
      </div>

      <div className={"flex justify-between"}>
        <div>
          <BgButton onClick={Back}>
            <BackIcon/>
            <span className={"text-sm"}>Закрыть</span>
          </BgButton>
        </div>

        <div className={"flex gap-3"}>
          { review.id != '' &&
            <DangerButton onClick={Remove}>
              <TrashBinIcon/>
              <span className={"text-sm text-white"}>Удалить</span>
            </DangerButton>
          }

          <PrimaryButton onClick={Save}>
            <SaveIcon/>
            <span className={"text-sm text-white"}>Сохранить</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}