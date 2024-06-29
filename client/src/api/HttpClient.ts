import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:8081/api",
})