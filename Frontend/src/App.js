import { Routes, Route } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Games" element={<GameDetails />} />
        <Route path="/Games/:id" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
