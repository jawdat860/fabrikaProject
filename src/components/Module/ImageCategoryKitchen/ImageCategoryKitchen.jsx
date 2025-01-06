import React from "react";
import "./ImageCategoryKitchen.css";

function ImageCategoryKitchen({ imageGallery = [] }) {
  // Если галерея пуста, показываем заглушку
  if (imageGallery.length === 0) {
    return <div className="genn-ImageCategoryKitchen">Нет изображений</div>;
  }

  return (
    <div className="genn-ImageCategoryKitchen">
      {imageGallery.map((item, index) => (
        <div
          key={index}
          className={` ${
            index % 2 === 0 ? "genn-ImageCategoryKitchen-first" : "genn-ImageCategoryKitchen-second"
          }`}
        >
          <img src={item.image} alt={`Изображение ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageCategoryKitchen;
