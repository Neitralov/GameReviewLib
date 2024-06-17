import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './assets/index.css'
import ErrorPage from "./pages/Error-page.tsx";
import CompletedGames from "./pages/CompletedGames.tsx";
import PostponedGames from "./pages/PostponedGames.tsx";
import Statistics from "./pages/Statistics.tsx";
import Index from "./pages/Index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Index />}/>
      <Route path={"completed"} element={<CompletedGames />}/>
      <Route path={"postponed"} element={<PostponedGames />}/>
      <Route path={"statistics"} element={<Statistics />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
