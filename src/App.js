import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setmodeText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        message: message,
          type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setmodeText('light');
      showAlert('Dark mode has been enabled', 'success');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      setmodeText('dark');
      showAlert('Light mode has been enabled', 'success');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <Alert alertText={alert} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
