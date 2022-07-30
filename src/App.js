import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#201f1f';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze." mode={mode} />}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
