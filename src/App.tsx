import {BrowserRouter  as Router } from "react-router-dom"
import { MainRoutes } from "./routes/MainRoutes"
import { NavBar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer"
import { ScrollButton } from "./components/scrollButton/ScrollButton"

function App() {
  return (
    <Router 
    basename="/Portfolio"
    >
      <NavBar />
      <MainRoutes />
      <Footer />
      <ScrollButton />
    </Router>
  )
}

export default App