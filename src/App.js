import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {LoginPage} from './LoginPage'
import {DescriptionPage} from './DescriptionPage'
import {QuizPage} from './QuizPage'
import {StatsPage} from './StatsPage'
import {useState} from "react";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LoginPage/>}/>
        <Route path="/description" element={<DescriptionPage/>}/>
        <Route path="/quiz" element={<QuizPage setCorrectAnswers={setCorrectAnswers} correctAnswers={correctAnswers}/>}/>
        <Route path="/stats" element={<StatsPage correctAnswers={correctAnswers}/>}/>
      </Routes>
    </div>
  );
}

export default App;
