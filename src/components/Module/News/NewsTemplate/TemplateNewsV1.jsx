import React, { useRef, useState } from "react";
import { LocalText } from "../../../LocalText/LocalText";
import "./NewsTemplate.css";
import imagePhoto from "../../../../assets/images/bg-image/Rectangle.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import TemplateCardV1 from "../Card/templateCardV1";
import ModelCall from "../../ModelCall/ModelCall";

function TemplateNewsV1({ descriptionSlider }) {
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => {
    setIsModalOpen2(true); // Open modal when button is clicked
  };

  const closeModal2 = () => {
    setIsModalOpen2(false); // Close modal
  };

  const swiperRef = useRef(null); // Reference to Swiper instance
  const [isPlaying, setIsPlaying] = useState(true); // State to track autoplay status

  const swiperBreakpoints = {
    1920: { slidesPerView: 5, spaceBetween: 60 },
    1440: { slidesPerView: 5 },
    1200: { slidesPerView: 5, spaceBetween: 24 },
    700: {
      slidesPerView: 3,
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
      centeredSlides: true,
      spaceBetween: 11,
      loop: true,
    },
    500: {
      slidesPerView: 2,
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
      centeredSlides: true,
      spaceBetween: 11,
      loop: true,
    },
    414: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 18,
      loop: true,
    },
    375: {
      centeredSlides: true,
      slidesPerView: 1.3,
      spaceBetween: 10,
      loop: true,
    },
    360: {
      centeredSlides: true,
      slidesPerView: 1.7,
      spaceBetween: 10,
      loop: true,
    },
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current?.autoplay.stop(); // Stop autoplay
    } else {
      swiperRef.current?.autoplay.start(); // Start autoplay
    }
    setIsPlaying(!isPlaying);
  };

  if (!Array.isArray(descriptionSlider) || descriptionSlider.length === 0) {
    return (
      <div>
        {LocalText.Kitchen.KitchenCards.noData || "Нет данных для отображения"}
      </div>
    );
  }

  return (
    <>
      <div className="genn-templateCardV1-container">
        {/* Photo Section */}
        <div className="genn-templateCardV1-photo">
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
            <button className="genn-Baner-button-v5" onClick={openModal2}>
              {LocalText.Kitchen.KitchenCards.titleButton}
            </button>
          </div>
        </div>

        {/* Card Slider Section */}
        <div className="genn-templateCardV1-CardsContainer ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={swiperBreakpoints}
            navigation={{
              prevEl: ".prev", // Custom previous button
              nextEl: `.next`, // Custom next button
            }}
          >
            {descriptionSlider.map((item) => (
              <SwiperSlide key={item.id}>
                <TemplateCardV1
                  id={item.id}
                  imageSrc={item.image}
                  title={item.title}
                  des={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Play/Pause Button */}
          <div className="genn-templateCardV1-controls">
            <div className="grnn-prev-next">
              <div className="prev">
                {" "}
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="next">
                {" "}
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <button onClick={handlePlayPause} className="genn-autoplay-toggle">
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="genn-templateCardV1-text">
          <div className="genn-templateCardV1-text-first">
            {LocalText.Kitchen.KitchenCards.textUnder1}
          </div>
          <div className="genn-templateCardV1-text-second">
            {LocalText.Kitchen.KitchenCards.textUnder2}
          </div>
        </div>
      </div>
      {isModalOpen2 && <ModelCall setCloseModelHandler={closeModal2} />}
    </>
  );
}

export default TemplateNewsV1;
