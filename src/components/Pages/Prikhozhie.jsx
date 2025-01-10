import Baner from "../Baner/Baner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextComponentbottom from "../Module/Text/TextComponentbottom";
import SliderBaner from "../SliderBaner/SliderBaner";
import { LocalText } from "../LocalText/LocalText";
import "./ShkafComponents/TextComponentShkaf.css";
import ShkafGategory from "./ShkafComponents/ShkafGategory";
import Perfectlayout from "./ShkafComponents/Perfectlayout";
import video2 from "../../assets/images/bg-video/PrikhozhieMob.mp4";
import TextComponent from "../Module/Text/TextComponent";
import "./PrikhozhieComponents/TextComponentsBov.css";
import "./PrikhozhieComponents/PrikhozhieTextbottom.css";
import "./PrikhozhieComponents/PrikhozhieSliderBaner.css";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import Footer from "../Footer/Footer";
import "./PrikhozhieComponents/PrikhozhiePerfectlayou.css";
import { apiUrl } from "../../config";
import ComponentVideoPhoto from "../Module/ComponentVideoPhoto/ComponentVideoPhoto";
import GategoryCardPrikhozhie from "./PrikhozhieComponents/GategoryCardPrikhozhie/GategoryCardPrikhozhie";
import imagePhoto from "../../assets/images/imagVideophoto.png";
import LoadingComponent from "../Module/LoadingComponent/LoadingComponent";
import ModelCall from "../Module/ModelCall/ModelCall";
function Prikhozhie() {
  const [kitchenData, setKitchenData] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false); // State to manage model visibility

  const openModelHandler = () => {
    setIsModelOpen(true); // Open the model
  };

  const closeModelHandler = () => {
    setIsModelOpen(false); // Close the model
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl + "/api/prikhozhie")
      .then((response) => {
        if (response.data.success && response.data.data.length > 0) {
          setData(response.data.data[0]);
        } else {
          console.error("Unexpected API response structure", response.data);
          setData(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div id="genn-Prikhozhie" className="Prikhozhie-component">
        <div
          id="genn-Prikhozhie-TextBov"
          className="genn-Baner-container  text-[#000]"
        >
          <TextComponent
            title={LocalText.Kitchen.bannen.title}
            description={LocalText.Kitchen.bannen.description}
            classNameTextTitle={"    PrikhozhieTextBov"}
            classNameTitle={"genn-kitchenBaner-title"}
            classNamedescription={"genn-kitchenBaner-des"}
          />
        </div>
        <div
          id="genn-Prikhozhie-Banner"
          className="genn-Baner-container shkafBanerBlock"
        >
          <Baner
            videoBg={"https://l.okdeal.ru/storage/" + data.video_url}
            videoBg2={video2}
          />
        </div>
        <div className="genn-Text-container  PrikhozhieTextbottom">
          <TextComponentbottom
            title={data.title_description}
            description={data.text_description}
            titleButton={LocalText.Prikhozhie.PrikhozhieTextBov.titleButton}
            classNameComponent={"genn-PrikhozhieTextbottom-container"}
          />{" "}
        </div>
        <div className="genn-SliderBaner-container genn-Prikhozhie-SliderBaner ">
          <SliderBaner images={data.image_slider} />
        </div>
        <div className="genn-SliderImg genn-shkaf-img Prikhozhie ">
          <ShkafGategory categorySlide={data.category} />
        </div>
        <ComponentVideoPhoto />
        <div className="genn-GategoryCardPrikhozhie-container">
          <GategoryCardPrikhozhie />
        </div>
        <div className="genn-Perfectlayou Prikhozhie ">
          <Perfectlayout
            title={data.title_h2}
            video={"https://l.okdeal.ru/storage/" + data.video_url_2}
            titleTextComponent={data.title_description_2}
            desTextComponent={data.text_description_2}
          />
        </div>

        <div id="genn-TwoButtonV2" className="genn-TwoButtonV2 Prikhozhie">
          <TwoButtonV2 />
        </div>
        <div className="genn-Prikhozhie-text-TwoButtonV2-container">
          <div className="genn-Prikhozhie-text-TwoButtonV2">
            Наша прихожая — это визитная карточка вашего дома
          </div>
          <div className="genn-Prikhozhie-text2-TwoButtonV2">
            Заказать мебель стало проще
          </div>
        </div>
        <div className="genn-templateCardV1-container Prikhozhie">
          {/* Photo Section */}
          <div className="genn-templateCardV1-photo Prikhozhie2">
            <div className="genn-templateCardV1-photo-title">
              <span>{LocalText.Kitchen.KitchenCards.titlePhotoFirstWord}</span>{" "}
              {LocalText.Kitchen.KitchenCards.titlePhotoSecondWord}
            </div>
            <div className="genn-templateCardV1-photo-image">
              <img
                src={imagePhoto}
                alt={LocalText.Kitchen.KitchenCards.titleButton}
              />
            </div>
            <div className="genn-templateCardV1-photo-button">
              <button
                className="genn-Baner-button-v5"
                onClick={openModelHandler}
              >
                {LocalText.Kitchen.KitchenCards.titleButton}
              </button>
            </div>
          </div>
        </div>
        <div id="genn-IconsBox" className="genn-IconsBox genn-kitchen-IconsBox">
          <IconsBox iconsData={data.icons} />
        </div>
        <div
          id="genn-CommentsModal"
          className="genn-CommentsModal genn-kitchen-CommentsModal"
        >
          <CommentsModal reviews={data.video_reviews} />
        </div>
        <div
          id="genn-TwoButtonV2"
          className="genn-TwoButtonV2 genn-kitchen-TwoButtonV2"
        >
          <TwoButtonV2 />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
      {isModelOpen && <ModelCall setCloseModelHandler={closeModelHandler} />}
    </>
  );
}
export default Prikhozhie;
