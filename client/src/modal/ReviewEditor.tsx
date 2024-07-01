import React, {ChangeEvent, FC, useContext, useEffect, useRef} from "react";
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
import {Genres} from "../models/Genres.ts";
import {Modes} from "../models/Modes.ts";
import {Engines} from "../models/Engines.ts";
import {ReviewsContext} from "../context";
import {EmptyReview} from "../models/EmptyReview.ts";
import {useValidationHelper} from "../hooks/useValidationHelper.ts";
import ReviewService from "../api/ReviewService.ts";
import {useNavigate} from "react-router-dom";

interface Props {
  setIsModalOpen: (isOpen: boolean) => void
  review: IReview
  setReview: React.Dispatch<React.SetStateAction<IReview>>
}

export const ReviewEditor: FC<Props> = ({setIsModalOpen, review, setReview}) => {
  const {reviews, setReviews} = useContext(ReviewsContext)
  const inputFile = useRef<HTMLInputElement>(null)
  const router = useNavigate()

  const posterValidator = useValidationHelper('Отсутствует обложка')
  const titleValidator = useValidationHelper('Название не может быть пустым')
  const releaseYearValidator = useValidationHelper('Дата выхода не может быть пустой')
  const genreValidator = useValidationHelper('Необходимо выбрать жанр')
  const modeValidator = useValidationHelper('Необходимо выбрать режим')
  const engineValidator = useValidationHelper('Необходимо выбрать движок')
  const scoreValidator = useValidationHelper('Необходимо указать оценку')

  const validators = [
    posterValidator,
    titleValidator,
    releaseYearValidator,
    genreValidator,
    modeValidator,
    engineValidator,
    scoreValidator
  ]

  useEffect(() => {
    validatePoster()
    validateTitle()
    validateReleaseYear()
    validateGenre()
    validateMode()
    validateEngine()
    validateScore()
  }, [review]);

  const resetValidationErrors = () => {
    validators.forEach(validator => {
      validator.setDefaultErrorMessage()
      validator.setIsDirty(false)
      validator.setIsError(true)
    })
  }

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null ) {
      let image = e.target.files[0]
      let formData = new FormData()
      formData.append("file", image)
      const response = await ReviewService.uploadPoster(formData)
      if (response.ok) {
        const posterPath = await response.text()
        setReview(prevState => ({...prevState, posterPath: posterPath}))
      }
    }
  }

  const setIsCompleted = (value: boolean) => {
    setReview(prevState => ({...prevState, isCompleted: value}))

    if (!value) {
      setReview(prevState => ({...prevState, score: 0}))
      setReview(prevState => ({...prevState, isBestGame: false}))
      scoreValidator.setDefaultErrorMessage()
      scoreValidator.setIsDirty(false)
    }
  }

  const setScore = (value: number) => {
    setReview(prevState => ({...prevState, score: value}))
    if (value < 5) {
      setReview(prevState => ({...prevState, isBestGame: false}))
    }
  }

  const onReleaseYearChange = (value: string) => {
    const regex = /[0-9]/;
    if (regex.test(value[value.length - 1]) && value.length <= 4) {
      return value
    } else {
      return value.slice(0, value.length - 1)
    }
  }

  const save = async () => {
    const isThereErrorInForm = validators.some(validator => validator.isError)

    if (isThereErrorInForm) {
      posterValidator.setIsDirty(true)
      titleValidator.setIsDirty(true)
      releaseYearValidator.setIsDirty(true)
      genreValidator.setIsDirty(true)
      modeValidator.setIsDirty(true)
      engineValidator.setIsDirty(true)

      if (review.isCompleted) {
        scoreValidator.setIsDirty(true)
      }

      return
    }

    if (review.isBestGame && !reviews.some(item => item.id == review.id && item.isBestGame) && reviews.filter(review => review.isBestGame).length == 14) {
      alert("Нельзя поместить в зал славы более 14 игр")
      return
    }

    if (review.id == '') {
      ReviewService.createReview(review).then((response) => {
        const newReview = response.data
        setReviews!([newReview, ...reviews])
      })
    } else {
      ReviewService.updateReview(review).then(() => {
        const index = reviews.findIndex(item => item.id == review.id)
        reviews.splice(index, 1)
        setReviews!([review, ...reviews])
      })
    }

    router(review.isCompleted ? '/completed' : '/postponed')
    back()
  }

  const remove = async () => {
    const confirmation = confirm("Вы точно хотите удалить обзор?")
    if (!confirmation) return

    const response = await ReviewService.deleteReview(review)

    if (response.status == 204) {
      const index = reviews.findIndex(item => item.id == review.id)
      reviews.splice(index, 1)
    }

    back()
  }

  const back = () => {
    clearEditorState()
    setIsModalOpen(false)
  }

  const clearEditorState = () => {
    setReview(EmptyReview)
    inputFile.current!.value = ''
    resetValidationErrors()
  }

  const validatePoster = () => {
    if (review.posterPath != '') {
      posterValidator.setErrorMessage('')
      posterValidator.setIsError(false)
    }
  }

  const validateTitle = () => {
    if (review.title.length < 3) {
      titleValidator.setErrorMessage('Название слишком короткое')
      titleValidator.setIsError(true)
    } else if (review.title.length > 128) {
      titleValidator.setErrorMessage('Название слишком длинное')
      titleValidator.setIsError(true)
    }
    else {
      titleValidator.setErrorMessage('')
      titleValidator.setIsError(false)
    }
  }

  const validateReleaseYear = () => {
    if (String(review.releaseYear).length != 4) {
      releaseYearValidator.setErrorMessage('Год должен быть четырехзначным числом')
      releaseYearValidator.setIsError(true)
    } else {
      releaseYearValidator.setErrorMessage('')
      releaseYearValidator.setIsError(false)
    }
  }

  const validateGenre = () => {
    if (review.genre != 0) {
      genreValidator.setIsError(false)
    }
  }

  const validateMode = () => {
    if (review.mode != 0) {
      modeValidator.setIsError(false)
    }
  }

  const validateEngine = () => {
    if (review.engine != 0) {
      engineValidator.setIsError(false)
    }
  }

  const validateScore = () => {
    if (!review.isCompleted || review.score != 0) {
      scoreValidator.setErrorMessage('')
      scoreValidator.setIsError(false)
    } else {
      scoreValidator.setDefaultErrorMessage()
      scoreValidator.setIsError(true)
    }
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
            : <Preview imageUrl={`http://localhost:7432/posters/${review.posterPath}`}/>
          }
          { (posterValidator.isDirty && posterValidator.errorMessage) && <h2 className={"text-danger text-center"}>{posterValidator.errorMessage}</h2> }
          <label
            htmlFor={"image"}
            className={"flex justify-center items-center h-fit gap-0.5 bg-background hover:bg-background-hover text-sm px-3 py-1.5 rounded shadow-sm select-none cursor-pointer"}>
            Загрузить обложку
            <input ref={inputFile} id={"image"} type={"file"} onChange={uploadImage}/>
          </label>
          <a
            className={"flex justify-center items-center h-fit gap-0.5 bg-background hover:bg-background-hover text-sm px-3 py-1.5 rounded shadow-sm cursor-pointer select-none"}
            href={`https://www.steamgriddb.com/search/grids?term=${review.title}`}
            target="_blank">
            Искать обложку
          </a>
        </div>

        <div className={"flex flex-col gap-2 w-full"}>
          <SingleLineInputWithHeader
            header={"Название"}
            placeholder={"Введите название..."}
            value={review.title}
            error={titleValidator.isDirty ? titleValidator.errorMessage : ''}
            onBlur={() => titleValidator.setIsDirty(true)}
            onChange={(e) => setReview(prevState => ({...prevState, title: e.target.value}))} />
          <SingleLineInputWithHeader
            header={"Дата выхода"}
            placeholder={"Введите дату"}
            value={review.releaseYear}
            error={releaseYearValidator.isDirty ? releaseYearValidator.errorMessage : ''}
            onBlur={() => releaseYearValidator.setIsDirty(true)}
            onChange={(e) => setReview(prevState => ({...prevState, releaseYear: onReleaseYearChange(e.target.value)}))} />
          <BgSelectWithHeader
            header={"Жанр"}
            selectHeader={Genres.sort((a, b) => a.name.localeCompare(b.name))[review.genre].name}
            error={(genreValidator.isDirty && genreValidator.isError) ? genreValidator.errorMessage : ''}
            onBlur={() => null}
            getItem={(value) => setReview(prevState => ({...prevState, genre: value}))}
            data={Genres.filter(genre => genre.id != 0).sort((a, b) => a.name.localeCompare(b.name))} />
          <div className={"flex gap-3"}>
            <BgSelectWithHeader
              header={"Режим"}
              selectHeader={Modes[review.mode].name}
              error={(modeValidator.isDirty && modeValidator.isError) ? modeValidator.errorMessage : ''}
              onBlur={() => null}
              getItem={(value) => setReview(prevState => ({...prevState, mode: value}))}
              data={Modes.filter(mode => mode.id != 0)} />
            <BgSelectWithHeader
              header={"Движок"}
              selectHeader={Engines.sort((a, b) => a.name.localeCompare(b.name))[review.engine].name}
              error={(engineValidator.isDirty && engineValidator.isError) ? engineValidator.errorMessage : ''}
              onBlur={() => null}
              getItem={(value) => setReview(prevState => ({...prevState, engine: value}))}
              data={Engines.filter(engine => engine.id != 0).sort((a, b) => a.name.localeCompare(b.name))} />
          </div>
          <CheckBoxWithHeader
            header={"Статус"}
            label={"Пройдена"}
            value={review.isCompleted}
            setValue={setIsCompleted} />
          { review.isCompleted &&
            <div className={"flex flex-col w-full gap-1"}>
              <div className={"flex gap-2"}>
                <h2>Оценка</h2>
                { (scoreValidator.isDirty && scoreValidator.errorMessage) && <h2 className={"text-danger text-center"}>{scoreValidator.errorMessage}</h2> }
              </div>
              <div className={"flex gap-3"}>
                <StarRating
                    value={review.score}
                    setValue={setScore}/>
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
          <BgButton onClick={back}>
            <BackIcon/>
            <span className={"text-sm"}>Закрыть</span>
          </BgButton>
        </div>

        <div className={"flex gap-3"}>
          { review.id != '' &&
            <DangerButton onClick={remove}>
              <TrashBinIcon/>
              <span className={"text-sm text-white"}>Удалить</span>
            </DangerButton>
          }

          <PrimaryButton onClick={save}>
            <SaveIcon/>
            <span className={"text-sm text-white"}>Сохранить</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}