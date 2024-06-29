import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:7432/api",
})