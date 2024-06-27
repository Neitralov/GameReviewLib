import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";
import {Modal} from "../modal/Modal.tsx";
import {ReviewEditor} from "../modal/ReviewEditor.tsx";
import {ReviewsContext} from "../context";
import axios from "axios";

export const App = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isReviewsLoaded, setIsReviewsLoaded] = useState<boolean>(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [review, setReview] = useState<IReview>(
    { id: '', title: '', releaseYear: 0, genre: 0, mode: 0, engine: 0, isCompleted: false, score: 0, isBestGame: false, comment: '', posterPath: ''}
  )

  useEffect(() => {
    fetchReviews().then(() => setIsReviewsLoaded(true))
  }, [])

  async function fetchReviews() {
    const response = await axios.get<IReview[]>('http://localhost:8081/api/reviews')
    setReviews(response.data)
  }

  function LoadReviewToEditor(review: IReview) {
    setReview(review)
    setIsEditorOpen(true)
  }

  return (
    <ReviewsContext.Provider value={{reviews, setReviews, isReviewsLoaded}}>
      <div className={"flex flex-col min-h-screen xl:gap-5 gap-4 bg-background"}>
        <Header openEditor={() => setIsEditorOpen(true)} loadReviewToEditor={LoadReviewToEditor} />
        <main className={"flex flex-col xl:container w-full xl:gap-5 gap-4 xl:px-[50px] px-4 pb-5"}>
          <Outlet context={[LoadReviewToEditor]}/>
        </main>
      </div>

      <Modal isOpen={isEditorOpen}>
        <ReviewEditor setIsModalOpen={setIsEditorOpen} review={review} setReview={setReview}/>
      </Modal>
    </ReviewsContext.Provider>
  )
}