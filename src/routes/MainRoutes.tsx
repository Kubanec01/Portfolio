import { Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/mainPage/MainPage"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}