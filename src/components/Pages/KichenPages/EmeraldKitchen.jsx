import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerTextShadow from "../../Module/BannerTextShadow/BannerTextShadow";
import video2 from "../../../assets/images/bg-video/z2.mp4";
import TextComponent from "../../Module/Text/TextComponent";
import TwoButtonV2 from "../../TwoButtonV2/TwoButtonV2";
import image1 from "../../../assets/images/bg-image/zimage1.png";
import image2 from "../../../assets/images/bg-image/zimage2.png";
import "./EmeraldKitchen.css";
import ImageCategoryKitchen from "../../Module/ImageCategoryKitchen/ImageCategoryKitchen";
import VideoBgButton from "../../Module/VideoBgButton/VideoBgButton";
import imageVideoBg from "../../../assets/images/bg-image/imageVideoz.png";
import TextForKitchenPages from "../../Module/TextForKitchenPages/TextForKitchenPages";
import FeelWarm from "../../FeelWarm/FeelWarm";
import FeelWarmLite from "../../FeelWarmLite/FeelWarmLite";
import FooterW from "../../Footer/FooterW";
import { apiUrl } from "../../../config";
function EmeraldKitchen() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchKitchenData = async () => {
      // Используем window.location для извлечения slug
      const fullPath = window.location.hash; // Например: /kitchen/emerald-kitchen
      const slug = fullPath.replace("#/kitchen/", ""); // Получаем 'emerald-kitchen'
      console.log("fullPath " + fullPath);
      console.log("slug " + slug);
      console.log(apiUrl + `/api/kitchen/${slug}`);
      try {
        const response = await axios.get(apiUrl + `/api/kitchen/${slug}`);
        console.log(response);
        if (response.data.success) {
          setData(response.data.data);
        } else {
          setError("Не удалось загрузить данные.");
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setError("Ошибка при загрузке данных.");
      }
    };

    fetchKitchenData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!data) {
    return <div className="loading-message">Загрузка...</div>;
  }

  return (
    <div id="EmeraldKitchen" className="genn-EmeraldKitchen">
      <BannerTextShadow
        video1={apiUrl + "/storage/" + data.video_url}
        video2={video2}
        text={data.title}
      />

      <div className="genn-EmeraldKitchen-TextComponent">
        <TextComponent
          classNameTextTitle={"genn-EmeraldKitchen-TextComponent-container"}
          classNameTitle={"hidden"}
          classNamedescription={"genn-EmeraldKitchen-TextComponent-des"}
          title={data.title}
          description={data.text_description}
        />
        <div className="genn-EmeraldKitchen-TextComponent-buttons">
          <TwoButtonV2 text1={"Перейти в WhatsApp"} text2={"Заказать звонок"} />
        </div>
      </div>

      {data.image_galledy?.length ? (
        <ImageCategoryKitchen imageGallery={data.image_galledy} />
      ) : null}
      <VideoBgButton
        video1={apiUrl + "/storage/" + data.video_back}
        poster={imageVideoBg}
        text={data.video_title}
        textButton={"Бесплатный дизайн проект"}
      />

      <FeelWarmLite imageGallery={data.image_galledy_2} />
      <div className="genn-advantageskitchen-ImageCategoryKitchen">
        <ImageCategoryKitchen image1={image1} image2={image2} />
      </div>
      <FeelWarm imageGallery={data.image_galledy_3} />

      <TextForKitchenPages />
      <FooterW />
    </div>
  );
}
export default EmeraldKitchen;
