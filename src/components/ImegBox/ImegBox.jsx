import "./ImegBox.css";
import image from "../../assets/images/bg-image/12.png";
import image1 from "../../assets/images/bg-image/1440.png";
import image2 from "../../assets/images/bg-image/1200.png";
import image3 from "../../assets/images/bg-image/768.png";
import image4 from "../../assets/images/bg-image/414.png";
import image5 from "../../assets/images/bg-image/375.png";
import image6 from "../../assets/images/bg-image/360.png";

import { LocalText } from "../LocalText/LocalText";
import { useEffect, useState } from "react";

function ImegBox() {
  const [poster, setPoster] = useState(image);
  useEffect(() => {
    const updatePoster = () => {
      if (window.innerWidth >= 1400 && window.innerWidth <= 1919) {
        setPoster(image1);
      }
      if (window.innerWidth >= 1200 && window.innerWidth <= 1440) {
        setPoster(image2);
      }
      if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
        setPoster(image3);
      }
      if (window.innerWidth >= 414 && window.innerWidth <= 768) {
        setPoster(image4);
      }
      if (window.innerWidth >= 375 && window.innerWidth <= 414) {
        setPoster(image5);
      }
      if (window.innerWidth >= 360 && window.innerWidth <= 414) {
        setPoster(image6);
      }
    };

    updatePoster(); // Initial check
    window.addEventListener("resize", updatePoster); // Listen for resize

    // Cleanup
    return () => {
      window.removeEventListener("resize", updatePoster);
    };
  }, []);
  return (
    <>
      <img className="genn-ImegBox-image " src={poster} alt="image" />
      <div className="genn-ImegBox-container-button">
        <button className="genn-Baner-button-v6">
          {LocalText.ImegBox.button}
        </button>
      </div>
    </>
  );
}
export default ImegBox;
