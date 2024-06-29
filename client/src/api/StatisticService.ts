import {httpClient} from "./HttpClient.ts";

export default class StatisticService {
  static async getNumberOfCompletedGames(): Promise<number> {
    try {
      const response = await httpClient.get<number>('http://localhost:8081/api/statistics/number-of-completed-games')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getNumberOfPostponedGames(): Promise<number> {
    try {
      const response = await httpClient.get<number>('http://localhost:8081/api/statistics/number-of-postponed-games')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getLastCompletedGame(): Promise<string> {
    try {
      const response = await httpClient.get<string>('http://localhost:8081/api/statistics/last-completed-game')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getNewestCompletedGame(): Promise<string> {
    try {
      const response = await httpClient.get<string>('http://localhost:8081/api/statistics/newest-completed-game')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getOldestCompletedGame(): Promise<string> {
    try {
      const response = await httpClient.get<string>('http://localhost:8081/api/statistics/oldest-completed-game')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getRatingOfCompletedGamesByGenre(): Promise<{count: number, value: string}[]> {
    try {
      const response = await httpClient.get<{count: number, value: string}[]>('http://localhost:8081/api/statistics/rating-of-completed-games-by-genre')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getRatingOfCompletedGamesByMode(): Promise<{count: number, value: string}[]> {
    try {
      const response = await httpClient.get<{count: number, value: string}[]>('http://localhost:8081/api/statistics/rating-of-completed-games-by-mode')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  static async getRatingOfCompletedGamesByEngine(): Promise<{count: number, value: string}[]> {
    try {
      const response = await httpClient.get<{count: number, value: string}[]>('http://localhost:8081/api/statistics/rating-of-completed-games-by-engine')
      return response.data
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}