import { useState, useEffect } from 'react';

// Custom hook to simulate typewriter effect
const useTypewriter = (text, speed = 150) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i)); // Add one letter at a time
        i++;
      } else {
        clearInterval(interval); // Stop when the whole text is typed
      }
    }, speed); // Set typing speed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [text, speed]); // Re-run effect if text or speed changes

  return displayText;
};

export default useTypewriter;
