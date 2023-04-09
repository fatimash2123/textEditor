import './App.css';
import Navbar from './components/navbar';
import Textbox from './components/Textbox';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  //useState for Alert
  const [alert, setAlert] = useState()

  //function for setting an alert
  const changeSetAlert = (type, message) => {
    setAlert({ "type": type, "message": message })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  //apply color from palette on body
  const changeBody=(color)=>{
    remove()
    document.body.classList.add("bg-"+color)
  }

  //remove all the bg-color classes
  const remove=()=>{
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
  }

  //by default mode would be light
  const [mode, setMode] = useState("light")

  const onToggle = () => {
    remove()
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#6b6b6b"
      changeSetAlert("success", "Mode changed to Dark")
      document.title = "TextEditor-Dark"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      changeSetAlert("success", "Mode changed to Light")
      document.title = "TextEditor-Light"
    }
  }

  return (
    <Router>
      <div>
        <Alert alertText={alert}></Alert>
        <Navbar title="Text Editor" mode={mode} onClickFunction={onToggle} paletteFunction={changeBody} ></Navbar>

        <div container my-3>
          <Routes>
            <Route path="/"
              element={<Textbox heading="Enter Text Here" mode={mode}></Textbox>}>
            </Route>
            <Route path="/about"
            element={<About mode={mode}></About>}>
              
            </Route>
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
