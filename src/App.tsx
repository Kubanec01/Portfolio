import { MainRoutes } from "./routes/MainRoutes";
import { NavBar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { ScrollButton } from "./components/scrollButton/ScrollButton";

function App() {
  return (
    <>
      <NavBar />
      <MainRoutes />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
