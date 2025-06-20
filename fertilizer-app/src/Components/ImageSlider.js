import React, { useState, useEffect } from 'react';
import "../Styles/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [activeIndex]);

  return (
    <div className="carousel">
      {/* <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button> */}
      <div className='carousel_slide'>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      </div>
      
      {/* <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button> */}
    </div>
  );
};

export default ImageSlider;