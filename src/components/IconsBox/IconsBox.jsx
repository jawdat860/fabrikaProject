import React, { useEffect, useState } from "react";
import "./IconsBox.css";
import { LocalText } from "../LocalText/LocalText";

function IconsBox({ iconsData }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Проверяем, пришли ли данные и являются ли они строкой
    if (iconsData) {
      try {
        const parsedIcons = typeof iconsData === "string" ? JSON.parse(iconsData) : iconsData;
        setIcons(parsedIcons);
      } catch (error) {
        console.error("Error parsing iconsData:", error);
        setIcons([]); // Устанавливаем пустой массив в случае ошибки
      }
    }
  }, [iconsData]);

 
  return (
    <div className="genn-IconsBox-containerCard genn-fl-row">
      {icons.length > 0 ? (
        icons.map((icon, index) => (
          <div className={`genn-IconsBox-Card card${index + 1}`} key={index}>
            <img src={icon.image} alt={icon.title || LocalText.IconsBox.titleDefault} />
            <h4>{icon.title || LocalText.IconsBox.titleDefault}</h4>
            {icon.url && (
              <button
                className="genn-IconsBox-Card"
                onClick={() => window.open(icon.url, "_blank")}
              >
                {LocalText.IconsBox.button}
              </button>
            )}
          </div>
        ))
      ) : (
        <div>{LocalText.IconsBox.noData || "Нет данных для отображения"}</div>
      )}
    </div>
  );
}

export default IconsBox;
