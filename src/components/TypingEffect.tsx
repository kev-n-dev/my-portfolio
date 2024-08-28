import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const AnimatedText = styled.span`
  font-size: inherit; /* Ensures font size matches the parent */
  color: #040b14; /* Inherits text color from parent */
  white-space: nowrap; /* Prevents wrapping */
  position: relative; /* Positions the cursor absolutely */
`;

const Cursor = styled.span`
  display: inline-block;
  background-color: currentColor; /* Matches the text color */
  width: 2px; /* Adjust the width of the cursor */
  height: 1.2em; /* Height of the cursor relative to the text */
  position: absolute;
  top: 0;
  right: 0;
  padding-left:2px;
  animation: ${blink} 0.8s step-start infinite;
`;

const words = [
  'Software Developer,',
  'Efficient',
  'Team Player,',
  'Problem Solver,',
  'Enthusiastic Learner,',
  'Innovative Thinker,',
  'Detail-Oriented,',
  'Strategic Thinker,',
  'Innovator,'];

const TypingEffect: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const word = words[index];
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(word.substring(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCursorVisible(false); // Hide cursor before switching
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTimeout(() => setCursorVisible(true), 500); // Show cursor again after a delay
        }, 1500); // Delay before switching to the next word
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [index]);

  return (
    <AnimatedText>
      {text}
      {cursorVisible && <Cursor />}
    </AnimatedText>
  );
};

export default TypingEffect;
