import { Route, Routes } from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'
import WritePage from './pages/WritePage'

export default function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} ></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
        <Route path="/write" element={<WritePage />}></Route>
      </Routes>
    </>
  )
}
