// import logo from './logo.svg';
import Alert from './components/Alert';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type) =>{
    setAlert({
      msg: message,
      type:type
    });
    setTimeout( () =>{
      setAlert(null);
     }, 1500);

  };

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode ( 'dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  };
  return (
  <>
{/* <Navbar title="TextUtils" aboutText= "About TextUtils"/> */}
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
   {/* <Routes> */}
          {/* <Route exact path="/about"> */}
               {/* <About /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode={mode} />   
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} /> */}
   {/* </Routes> */}
   
</div>
{/* </Router> */}

     </>
  );
}

export default App;
