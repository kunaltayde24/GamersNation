import { Routes, Route } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import GamePage from "./pages/GamePage";
import AboutPage from "./pages/AboutPage"; // ✅ Import About Page
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactPage from "./pages/ContactPage";
import './App.css';

function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Games" element={<GameDetails />} />
        <Route path="/Games/:id" element={<GamePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        
        
        
       <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </>
  );
}

export default App;