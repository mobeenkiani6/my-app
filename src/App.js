import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar1 from './Components/Navbar1';
import TextForm1 from './Components/TextForm1';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = (selectedMode) => {
    setMode(selectedMode);
    let backgroundColor, textColor;
    switch (selectedMode) {
      case 'dark':
        backgroundColor = 'rgb(8 45 83)';
        textColor = 'white';
        showAlert('Dark mode enabled', 'success');
        break;
      case 'success':
        backgroundColor = '#27b070';
        textColor = 'white';
        showAlert('Green mode enabled', 'success');
        break;
      case 'danger':
        backgroundColor = '#b51f2d';
        textColor = 'white';
        showAlert('Red mode enabled', 'success');
        break;
      default:
        backgroundColor = '#b4bac0';
        textColor = 'black';
        showAlert('Light mode enabled', 'success');
    }
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  };

  return (
    // <Router>
      
      <>
        <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm1 heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />
       
        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm1 heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />} />
          <Route path="about" element={<About />} />
        </Routes> */}
        </div>
     </>
    // </Router>
  );
}

export default App;
