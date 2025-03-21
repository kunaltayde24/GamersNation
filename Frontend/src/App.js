import { Routes, Route } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Games" element={<GameDetails />} />
        <Route path="/Games/:id" element={<GamePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  );
}

export default App;
