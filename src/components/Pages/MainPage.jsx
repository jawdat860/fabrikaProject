import React, { useEffect, useState } from "react";
import axios from "axios";
import Baner from "../Baner/Baner";
import Categoryes from "../Categoryes/Categoryes";
import TwoButtonV1 from "../TwoButtonV1/TwoButtonV1";
import VideoSlider from "../VideoSlider/VideoSlider";
import ImegBox from "../ImegBox/ImegBox";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import SliderBaner from "../SliderBaner/SliderBaner";
import TextComponent from "../Module/Text/TextComponent";
import Footer from "../Footer/Footer";
import { LocalText } from "../LocalText/LocalText";
import { apiUrl } from "../../config";

function MainPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl+"/api/main-page")
      .then((response) => {
        if (response.data.success) {
          setData(response.data.data[0]);
        }
        console.error("Error fetching data:", response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      {/* Баннер */}
      <div id="genn-Baner" className="genn-Baner-container">
        <TextComponent
          title={data.text_description || LocalText.Baner.title}
          description=""
          classNameTextTitle={"genn-Baner-text genn-SliderBaner-text-container"}
          classNamedescription={"genn-SliderBaner-text-des"}
          classNameTitle={"genn-SliderBaner-text-title"}
        />
        <Baner
          videoBg={apiUrl+`/storage/${data.video_url}` }
          videoBg2={apiUrl+`/storage/storage/${data.video_url}` }
        />
      </div>

      {/* Слайдер баннеров */}
      <div id="genn-SliderBaner" className="genn-SliderBaner-container">
        <SliderBaner images={data.image_slider } />
      </div>

      {/* Категории */}
      <div id="genn-Categoryes " className="genn-Categoryes">
        <Categoryes
          categories={data.category }
          title={data.category_title}
        />
      </div>

      {/* Кнопки */}
      <div id="genn-TwoButtonV1">
        <TwoButtonV1 />
      </div>
      
      {/* Видео слайдер */}
      <div id="genn-VideoSlider" className="genn-VideoSlider">
        <VideoSlider videosData={data.video_slider} />
      </div>

      {/* Блок с изображением */}
      <div id="genn-ImegBox" className="genn-ImegBox">
      <ImegBox
            imgUrl={data.section_img || LocalText.ImegBox.img}
            mobileImgUrl={data.section_img_mobile || LocalText.ImegBox.mobileImg}
          />
        
      </div>

      {/* Иконки */}
      <div id="genn-IconsBox" className="genn-IconsBox">
        <IconsBox iconsData={data.icons} />
      </div>

      {/* Видео отзывы */}
      <div id="genn-CommentsModal" className="genn-CommentsModal">
        <CommentsModal reviews={data.video_reviews} />
      </div>

      {/* Кнопки второй секции */}
      <div id="genn-TwoButtonV2" className="genn-TwoButtonV2">
        <TwoButtonV2 />
      </div>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;
