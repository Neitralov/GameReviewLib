import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {App} from './layout/App.tsx'
import {IndexPage} from "./pages/IndexPage.tsx";
import {CompletedGamesPage} from "./pages/CompletedGamesPage.tsx";
import {PostponedGamesPage} from "./pages/PostponedGamesPage.tsx";
import {StatisticsPage} from "./pages/StatisticsPage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import './assets/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<IndexPage />}/>
      <Route path={"completed"} element={<CompletedGamesPage />}/>
      <Route path={"postponed"} element={<PostponedGamesPage />}/>
      <Route path={"statistics"} element={<StatisticsPage />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
