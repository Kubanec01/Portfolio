import {BrowserRouter  as Router } from "react-router-dom"
import { MainRoutes } from "./routes/MainRoutes"
import { NavBar } from "./components/navbar/Navbar"

function App() {
  return (
    <Router>
      <NavBar />
      <MainRoutes />
    </Router>
  )
}

export default App