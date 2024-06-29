import {httpClient} from "./HttpClient.ts";
import {AxiosResponse} from "axios";

export default class ReviewService {
  static async createReview(review: IReview) : Promise<AxiosResponse> {
    try {
      return await httpClient.post<IReview>('/reviews', review)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async updateReview(review: IReview) : Promise<AxiosResponse> {
    try {
      return await httpClient.put<IReview>('/reviews', review)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async deleteReview(review: IReview) : Promise<AxiosResponse> {
    try {
      return await httpClient.delete<IReview>(`/reviews/${review.id}`)
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getReviews() : Promise<IReview[]> {
    try {
      const response = await httpClient.get<IReview[]>('/reviews')
      return response.data;
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getHallOfFlame() : Promise<IReview[]> {
    try {
      const response = await httpClient.get<IReview[]>('/reviews/hall-of-flame')
      return response.data;
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async uploadPoster(poster: FormData) : Promise<Response> {
    try {
      return await fetch('http://localhost:8081/api/reviews/upload-poster', {method: "POST", body: poster});
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}