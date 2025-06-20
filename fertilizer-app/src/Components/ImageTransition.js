import React, { useEffect, useRef } from "react";
import "./ImageTransition.css";

const ImageTransition = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      imageElement.classList.add("fade-in");
    }

    return () => {
      if (imageElement) {
        imageElement.classList.remove("fade-in");
      }
    };
  }, []);

  return (
    <div className="image-transition-container">
      <img
        ref={imageRef}
        src="./images/banner-new.png"
        alt="First"
        className="image"
      />

      <div className="site-name">
        <p>Site name</p>
      </div>
      
      <div className="image-caption">
        <h1>AGRICULTURE FARMING SERVICES</h1>
        <br></br>
        <p>The best farming solution</p>
      </div>
    </div>
  );
};

export default ImageTransition;