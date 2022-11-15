import {Routes, Route} from 'react-router-dom'
import StartingPage from './pages/StartingPage'
import Questions from './pages/Questions'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>

  );
}

export default App;
