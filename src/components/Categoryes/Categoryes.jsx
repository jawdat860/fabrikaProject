import React from "react";
import { LocalText } from "../LocalText/LocalText";
import image1 from "../../assets/images/bg-image/Categoryes1.png";
import image2 from "../../assets/images/bg-image/Categoryes2.png";
import image3 from "../../assets/images/bg-image/Categoryes3.png";
import image4 from "../../assets/images/bg-image/Categoryes4.png";
import "./Categoryes.css";

function Categoryes({ categories = [], title = LocalText.Categoryes.title }) {
  // Локальные данные для fallback
  const defaultCategories = [
    { image: image1, title: LocalText.Categoryes.CategoryesLinks.l1 },
    { image: image2, title: LocalText.Categoryes.CategoryesLinks.l2 },
    { image: image3, title: LocalText.Categoryes.CategoryesLinks.l3 },
    { image: image4, title: LocalText.Categoryes.CategoryesLinks.l4 },
  ];

  // Используем данные из API или fallback
  const categoryData = categories.length > 0 ? categories : defaultCategories;

  return (
    <>
      <div className="genn-Categoryes-title">{title}</div>
      <ul className="genn-Categoryes-menu font-face-gm">
        {categoryData.map((category, index) => (
          <li key={index} className="genn-Categoryes-link">
            <a href={"#"+category.url} data-discover="true">{category.title}</a>
          </li>
        ))}
      </ul>
      <div className="genn-Categoryes-image-container">
        {categoryData.map((category, index) => (
          <div key={index} className="genn-Categoryes-image">
            <div className="overLay"></div>
            <img src={category.image} alt={category.title} />
            <button className="genn-Baner-button-v4">
            <a href={"#"+category.url} data-discover="true">{category.title}</a>
              </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categoryes;
