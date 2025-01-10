import image1 from "../../../../assets/images/bg-image/kitchen1.jpg";
import image2 from "../../../../assets/images/bg-image/kitchen2.png";
import image3 from "../../../../assets/images/bg-image/kitchen3.jpg";
import image4 from "../../../../assets/images/bg-image/kitchen4.jpg";
import image5 from "../../../../assets/images/bg-image/kitchen5.jpg";
import image6 from "../../../../assets/images/bg-image/green.jpg";
import image10 from "../../../../assets/images/bg-image/blue.jpg";
import image7 from "../../../../assets/images/bg-image/urban.jpg";
import image8 from "../../../../assets/images/bg-image/orange.jpg";

import { LocalText } from "../../../LocalText/LocalText";
import "./KitchenGategory.css";
import whatsIcon from "../../../../assets/images/ico/whatsappKitchen.svg";
import ico from "../../../../assets/images/ico/Ellipse2.svg";
import ico1 from "../../../../assets/images/ico/Ellipse3.svg";
import ico2 from "../../../../assets/images/ico/Ellipse4.svg";
import ico3 from "../../../../assets/images/ico/Ellipse5.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function KitchenGategory() {
  const [currentImage, setCurrentImage] = useState(image6); // Initial image
  const [activeIcon, setActiveIcon] = useState("green"); // Initial active icon (matches alt text)
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of additional cards
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleImageChange = (newImage, iconKey) => {
    setCurrentImage(newImage);
    setActiveIcon(iconKey); // Update the active icon
  };
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

  const cards = [
    {
      image: image1,
      alt: "Kitchen 1",
      text: "Подробнее",
      linkOpen: "EmeraldKitchen",
    },
    {
      image: image2,
      alt: "Kitchen 2",
      text: "Подробнее",
      linkOpen: "VivaKitchen",
    },
    {
      image: image3,
      alt: "Kitchen 3",
      text: "Подробнее",
      linkOpen: "SmartKitchen",
    },
    {
      image: image4,
      alt: "Kitchen 4",
      text: "Подробнее",
      linkOpen: "KitchenTop",
    },
    {
      image: image5,
      alt: "Kitchen 5",
      text: "Подробнее",
      linkOpen: "KitchenArizona",
    },
  ];
  // Show all cards if on a small screen
  const visibleCards = isSmallScreen || showAll ? cards : cards.slice(0, 3);

  return (
    <>
      <div className="genn-title-gategory">
        {LocalText.Kitchen.Category.title}
      </div>
      <div className="genn-Categoryes-image-container">
        <div className="genn-Categoryes-image-container">
          {visibleCards.map((card, index) => (
            <div key={index} className="genn-Categoryes-image kitchenGategory">
              <div className="overLay !opacity-[0.2]"></div>
              <img src={card.image} alt={card.alt} className="!w-[100%]" />
              <button className="genn-Categoryes-image-button genn-Baner-button-v4">
                <Link to={`./${card.linkOpen}`}>{card.text}</Link>
              </button>
            </div>
          ))}
          <div className="genn-Categoryes-image kitchenGategory genn-change-photo">
            <div className="overLay !opacity-[0.2]"></div>
            <img
              src={currentImage}
              alt={LocalText.Categoryes.CategoryesLinks.l4}
              className="!w-[100%]"
            />
            <div className="genn-title-changePhoto">
              {LocalText.Kitchen.Category.titleChange}
            </div>
            <button className="genn-Baner-button-v4 button-image">
              Заказать звонок
            </button>
          </div>
        </div>
        {!isSmallScreen && (
          <div className="show-more-container">
            <button
              className="genn-show-more-button"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Скрыть" : "Показать больше"}
            </button>
          </div>
        )}
      </div>
      <div className="iconBoxColor">
        <div
          onClick={() => handleImageChange(image6, "green")}
          className={`iconBoxColor1 ${
            activeIcon === "green" ? "active-icon" : ""
          }`}
        ></div>
        <div
          onClick={() => handleImageChange(image10, "blue")}
          className={`iconBoxColor2 ${
            activeIcon === "blue" ? "active-icon" : ""
          }`}
        ></div>
        <div
          onClick={() => handleImageChange(image7, "urban")}
          className={`iconBoxColor3 ${
            activeIcon === "urban" ? "active-icon" : ""
          }`}
        ></div>
        <div
          onClick={() => handleImageChange(image8, "orange")}
          className={`iconBoxColor4 ${
            activeIcon === "orange" ? "active-icon" : ""
          }`}
        ></div>
      </div>
      {/* for mob part */}

      <div className="genn-category-textDown">
        {LocalText.Kitchen.Category.textDown}
      </div>
      <div className="genn-category-whatsApp">
        <button
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=79585008556&text&type=phone_number&app_absent=0",
              "_blank"
            );
          }}
        >
          <span>{LocalText.Kitchen.Category.TextWhatsAppWhatsApp}</span>

          <img
            className="iconKitchen"
            src={whatsIcon}
            alt={LocalText.Kitchen.Category.TextWhatsAppWhatsApp}
          />
        </button>
      </div>
      <div className="genn-changeColor-mob">
        <div className="genn-changeColor-mob-title">
          <div className="genn-changeColor-mob-title-container">
            {LocalText.Kitchen.Category.titleChange}
          </div>
        </div>
        <div className="genn-changeColor-mob-image">
          <img
            src={currentImage}
            alt={LocalText.Categoryes.CategoryesLinks.l4}
            className=""
          />

          <button className="genn-Baner-button-v4 genn-button-image-phone">
            Заказать звонок
          </button>
        </div>
        <div className="genn-changeColor-mob-icon">
          <div
            onClick={() => handleImageChange(image6, "green")}
            className={`iconBoxColor1 ${
              activeIcon === "green" ? "active-icon" : ""
            }`}
          ></div>
          <div
            onClick={() => handleImageChange(image10, "blue")}
            className={`iconBoxColor2 ${
              activeIcon === "blue" ? "active-icon" : ""
            }`}
          ></div>
          <div
            onClick={() => handleImageChange(image7, "urban")}
            className={`iconBoxColor3 ${
              activeIcon === "urban" ? "active-icon" : ""
            }`}
          ></div>
          <div
            onClick={() => handleImageChange(image8, "orange")}
            className={`iconBoxColor4 ${
              activeIcon === "orange" ? "active-icon" : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
export default KitchenGategory;
