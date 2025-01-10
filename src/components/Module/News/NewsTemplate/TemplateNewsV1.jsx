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
import nextImage from "../../../../assets/images/ico/Buttons/next-2.svg";
import pley from "../../../../assets/images/ico/Buttons/pley-1.svg";
import loading from "../../../../assets/images/ico/Buttons/loading-g.svg";

function TemplateNewsV1({ descriptionSlider }) {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Track autoplay state
  const swiperRef = useRef(null); // Reference to Swiper instance

  const openModal2 = () => {
    setIsModalOpen2(true); // Open modal when button is clicked
  };

  const closeModal2 = () => {
    setIsModalOpen2(false); // Close modal
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev(); // Move to previous slide
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext(); // Move to next slide
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current?.autoplay.stop(); // Stop autoplay
    } else {
      swiperRef.current?.autoplay.start(); // Start autoplay
    }
    setIsPlaying(!isPlaying); // Toggle playing state
  };

  const swiperBreakpoints = {
    1920: { slidesPerView: 5, spaceBetween: 60 },
    1440: { slidesPerView: 5 },
    1200: { slidesPerView: 5, spaceBetween: 24 },
    700: {
      slidesPerView: 3,
      slidesOffsetAfter: 50,
      slidesOffsetBefore: 50,
      centeredSlides: true,
      spaceBetween: 32,
      loop: true,
    },
    500: {
      slidesPerView: "auto",
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
      centeredSlides: true,
      spaceBetween: 11,
      loop: true,
    },
    414: {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 18,
      loop: true,
    },
    375: {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
    },
    360: {
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
    },
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
            autoplay={{ delay: 3000 }} // Autoplay with 3s delay
            loop={true} // Enable looping
            navigation={{
              prevEl: ".genn-CardVideoComponent-prev", // Custom previous button
              nextEl: ".genn-CardVideoComponent-next", // Custom next button
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
          <div className="genn-TemplateNexsV1-CardVideoComponent-controls">
            {/* Custom Navigation Controls */}
            <div className="genn-CardVideoComponent-controls">
              {/* Play/Pause Button */}
              <div
                className="genn-CardVideoComponent-play"
                onClick={handlePlayPause}
              >
                <img src={isPlaying ? loading : pley} alt="Play/Pause" />
              </div>
              {/* Prev/Next Buttons */}
              <div className="genn-TemplateNexsV1-CardVideoComponent-buttons">
                <div
                  className="genn-CardVideoComponent-prev"
                  onClick={handlePrevClick}
                >
                  <img src={nextImage} alt="Previous" className="!w-[35px] " />
                </div>
                <div
                  className="genn-CardVideoComponent-next"
                  onClick={handleNextClick}
                >
                  <img src={nextImage} alt="Next" className="!w-[35px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Text Section */}
        <div className="genn-templateCardV1-text">
          <div className="genn-templateCardV1-text-first">
            {LocalText.Kitchen.KitchenCards.textUnder2}
          </div>
        </div>
      </div>
      {isModalOpen2 && <ModelCall setCloseModelHandler={closeModal2} />}
    </>
  );
}

export default TemplateNewsV1;
