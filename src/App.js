import React from "react";
import {Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <div className="w-full h-full">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questions" element={<QuizPage />} />
      </Routes>

    </div>
  );
}

export default App;
