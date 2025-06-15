import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageTransition from "./Components/ImageTransition";
import TypingText from "./Components/TypingText";
import Home from "./Components/Home";
import "./index.css";

function App() {
  return (
    <div className="App">
      <ImageTransition />
      <br></br>
      <div className="Responsive-Text">
        <div className="clamp-text">
          <TypingText
            text="Vision Mission of our site will be displayed here!"
            speed={150}
          />
        </div>
      </div>
      {/* <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;