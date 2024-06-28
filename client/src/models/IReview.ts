interface IReview {
  id?: string
  title: string
  releaseYear: string
  genre: number
  mode: number
  engine: number
  isCompleted: boolean
  score: number
  isBestGame: boolean
  comment: string | null
  posterPath: string
}