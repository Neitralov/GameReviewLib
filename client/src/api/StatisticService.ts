import {httpClient} from "./HttpClient.ts";

export default class StatisticService {
  static async getNumberOfCompletedGames(): Promise<number> {
    try {
      const response = await httpClient.get<number>('/statistics/number-of-completed-games')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getNumberOfPostponedGames(): Promise<number> {
    try {
      const response = await httpClient.get<number>('/statistics/number-of-postponed-games')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getLastCompletedGame(): Promise<string> {
    try {
      const response = await httpClient.get<string>('/statistics/last-completed-game')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getNewestCompletedGame(): Promise<string> {
    try {
      const response = await httpClient.get<string>('/statistics/newest-completed-game')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getOldestCompletedGame(): Promise<string> {
    try {
      const response = await httpClient.get<string>('/statistics/oldest-completed-game')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getRatingOfCompletedGamesByGenre(): Promise<{count: number, value: string}[]> {
    try {
      const response = await httpClient.get<{count: number, value: string}[]>('/statistics/rating-of-completed-games-by-genre')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getRatingOfCompletedGamesByMode(): Promise<{count: number, value: string}[]> {
    try {
      const response = await httpClient.get<{count: number, value: string}[]>('/statistics/rating-of-completed-games-by-mode')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getRatingOfCompletedGamesByEngine(): Promise<{count: number, value: string}[]> {
    try {
      const response = await httpClient.get<{count: number, value: string}[]>('/statistics/rating-of-completed-games-by-engine')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}