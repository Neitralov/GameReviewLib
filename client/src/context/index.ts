import React, {createContext} from "react";

export const ReviewsContext = createContext<{reviews: IReview[], setReviews: React.Dispatch<React.SetStateAction<IReview[]>> | null, isReviewsLoaded: boolean}>({reviews: [], setReviews: null, isReviewsLoaded: false})