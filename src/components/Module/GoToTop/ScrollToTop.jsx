import React, { useState, useEffect } from "react";
import "./GoToTop.css";
import imageButton from "../../../assets/images/ico/Buttons/next-2.svg";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && ( <div onClick={scrollToTop} className="genn-go-to-top">
      
    
          <img src={imageButton} alt="image" />
    
     
    </div> )
  );
};

export default ScrollToTop;
