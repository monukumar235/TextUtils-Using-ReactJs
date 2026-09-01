import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  const removeBodyCLassList = ()=>{
    document.body.classList.remove("bg-dark"); 
    document.body.classList.remove("bg-light"); 
    document.body.classList.remove("bg-success"); 
    document.body.classList.remove("bg-warning"); 
    document.body.classList.remove("bg-danger"); 
    document.body.classList.remove("bg-primary"); 
  }

  const toggleMode = (cls) => {
    console.log(cls)
    removeBodyCLassList();
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
