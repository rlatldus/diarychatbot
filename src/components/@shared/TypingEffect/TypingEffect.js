import React, { useState, useEffect } from 'react';

export const TypingEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (text === undefined) {
            return;
        }

        const typingInterval = setInterval(() => {
            if (currentIndex >= text.length) {
                clearInterval(typingInterval);
                return;
            }

            setDisplayText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 50);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, currentIndex]);

    return displayText;
};
