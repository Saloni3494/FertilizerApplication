import React, { useEffect, useRef } from 'react';
import './ImageTransition.css';

const ImageTransition = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      imageElement.classList.add('fade-in');
    }

    return () => {
      if (imageElement) {
        imageElement.classList.remove('fade-in');
      }
    };
  }, []);

  return (
    <div className="image-transition-container">
      <img
        ref={imageRef}
        src="./images/banner1.png"
        alt="First"
        className="image"
      />
      <div className="image-caption">
        <h1>Welcome to Our Gallery</h1>
        <p>Explore the beauty of our curated collection</p>
      </div>
    </div>
  );
};

export default ImageTransition;