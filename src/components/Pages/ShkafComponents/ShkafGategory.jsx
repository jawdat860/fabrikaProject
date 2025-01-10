import React, { useState, useEffect } from "react";
import { LocalText } from "../../LocalText/LocalText";
import SliderImgComponent from "../../Module/SliderImg/SliderImgComponent";

function ShkafGategory({ categorySlide }) {
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of additional cards
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 768);
    };

    // Check screen size on initial load
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!categorySlide || !Array.isArray(categorySlide)) {
    return <div>{LocalText.Kitchen.Category.noData || "Нет данных для отображения"}</div>;
  }

  return (
    <>
      <div className="genn-title-shkafgategory">
        {LocalText.Kitchen.Category.title}
      </div>

      <div className="genn-Categoryes-image-container">
        {categorySlide.map((item, index) => (
          <SliderImgComponent
            key={index}
            sliderId={`slider-${index}`}
            title={item.title}
            gallery={item.gallery}
          />
        ))}
      </div>

      {!isSmallScreen && (
        <div className="show-more-container">
          <button
            className="genn-show-more-button"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}

export default ShkafGategory;
