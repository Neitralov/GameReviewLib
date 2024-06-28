import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "./layout/Header.tsx";
import {Modal} from "./modal/Modal.tsx";
import {ReviewEditor} from "./modal/ReviewEditor.tsx";
import {ReviewsContext} from "./context";
import {EmptyReview} from "./models/EmptyReview.ts";
import ReviewService from "./api/ReviewService.ts";

export const App = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isReviewsLoaded, setIsReviewsLoaded] = useState<boolean>(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [review, setReview] = useState<IReview>(EmptyReview)

  useEffect(() => {
    fetchReviews().then(() => setIsReviewsLoaded(true))
  }, [])

  const fetchReviews = async () => {
    setReviews(await ReviewService.getReviews())
  }

  const loadReviewToEditor = (review: IReview) => {
    setReview(review)
    setIsEditorOpen(true)
  }

  return (
    <ReviewsContext.Provider value={{reviews, setReviews, isReviewsLoaded}}>
      <div className={"flex flex-col min-h-screen xl:gap-5 gap-4 bg-background"}>
        <Header openEditor={() => setIsEditorOpen(true)} loadReviewToEditor={loadReviewToEditor} />
        <main className={"flex flex-col xl:container w-full xl:gap-5 gap-4 xl:px-[50px] px-4 pb-5"}>
          <Outlet context={[loadReviewToEditor]}/>
        </main>
      </div>

      <Modal isOpen={isEditorOpen}>
        <ReviewEditor setIsModalOpen={setIsEditorOpen} review={review} setReview={setReview}/>
      </Modal>
    </ReviewsContext.Provider>
  )
}