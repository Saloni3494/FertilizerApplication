import React from "react";
import ImageTransition from "./Components/ImageTransition";
import TypingText from "./Components/TypingText";
import "./index.css";
import ImageSlider from "./Components/ImageSlider";

function App() {
  const images = [
    '/images/Slider-1.png',
    '/images/Slider-2.png',
    '/images/Slider-3.png',
    '/images/Slider-4.png',
    '/images/Slider-5.png',
  ];
  return (
    <div className="App">
      <ImageTransition />
      <br></br>
      <div className="Responsive-Text">
        <div className="clamp-text">
          <br></br>
          <TypingText
            text="Vision Mission of our site will be displayed here!...More text to be added"
            speed={150}
          />
          <br></br>
        </div>
      </div>
      <ImageSlider images={images} />
      
    </div>
  );
}

export default App;