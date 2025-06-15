import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 100, cursorBlinkSpeed = 500 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  return (
    <div style={{ fontFamily: 'lato', whiteSpace: 'pre', fontSize:50, textAlign: 'center' }}>
      {displayedText}
      {isCursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default TypingText;