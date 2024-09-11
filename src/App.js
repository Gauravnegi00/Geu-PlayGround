import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
