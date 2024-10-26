import {BrowserRouter  as Router } from "react-router-dom"
import { MainRoutes } from "./routes/MainRoutes"
import { NavBar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer"

function App() {
  return (
    <Router>
      <NavBar />
      <MainRoutes />
      <Footer />
    </Router>
  )
}

export default App