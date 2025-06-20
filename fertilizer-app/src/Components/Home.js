import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import ImageTransition from "./ImageTransition";
import TypingText from "./TypingText";
import AboutUs from "./AboutUs";

const Home = (props) => {
  // Array of image paths for the image slider
  const images = [
    "/images/Slider-1.png",
    "/images/Slider-2.png",
    "/images/Slider-3.png",
    "/images/Slider-4.png",
    "/images/Slider-5.png",
  ];

  return (
    <Container>
      {/* Component for transitioning images or animations */}
      <ImageTransition />
      <br></br>

      <div className="Responsive-Text">
        <div className="clamp-text">
          <br></br>
          {/* Component for displaying animated typing text */}
          <TypingText
            text="Vision Mission of our site will be displayed here!...More text to be added"
            speed={150} // Speed of typing animation in milliseconds
          />
          <br></br>
        </div>
      </div>
      <AboutUs/>
      <ImageSlider images={images} />
    </Container>
  );
};

const Container = styled.main``;

export default Home;

// ------------------This page is under Development