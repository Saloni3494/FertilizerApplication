import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 500, cursorBlinkSpeed = 500 }) => {
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

    // Function to determine the responsive font size
    const getResponsiveFontSize = () => {
        const width = window.innerWidth;
        if (width < 480) return '20px';
        if (width < 768) return '30px';
        if (width < 1024) return '40px';
        return '50px';
    };

    const [fontSize, setFontSize] = useState(getResponsiveFontSize());

    // Update font size on window resize
    useEffect(() => {
        const handleResize = () => {
            setFontSize(getResponsiveFontSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            style={{
                fontFamily: 'Brush Script MT',
                whiteSpace: 'pre',
                fontSize: fontSize, // Use the responsive font size
                textAlign: 'center',
            }}
        >
            {displayedText}
            {isCursorVisible && <span className="cursor">|</span>}
        </div>
    );
};

export default TypingText;