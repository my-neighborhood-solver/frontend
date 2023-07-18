import { Route, Routes } from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'

export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} ></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
      </Routes>
    </>
  )
}
