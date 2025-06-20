import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
        <Route path = '/home' element={<Home/>}>
        </Route>
        </Routes>
      </Router> */}


      {/* Your Home contents */}
      <Home />

      {/* Your chatbot content */}
    </div>
  );
}

export default App;