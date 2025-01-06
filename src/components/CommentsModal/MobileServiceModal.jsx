import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Modal } from "@telegram-apps/telegram-ui";

const MobileServiceModal = ({ isMobileModalOpen, closeModal, videos, icons, LocalText }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const videoRefs = useRef([]);
  const progressRefs = useRef([]);
  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;

  const handleTimeUpdate = (timeUpdateTarget) => {
    const currentTime = timeUpdateTarget.currentTime;
    const duration = timeUpdateTarget.duration || 1; // Avoid division by zero
    const progressPercentage = (currentTime / duration) * circumference;
    return circumference - progressPercentage;
  };

  const handlePlayPause = (index) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (currentPlaying === index) {
      currentVideo.pause();
      setCurrentPlaying(null);
    } else {
      videoRefs.current.forEach((video, idx) => {
        if (video && idx !== index) video.pause();
      });
      currentVideo.play();
      setCurrentPlaying(index);
    }
  };

  const handlePrevSlide = () => {
    swiperInstance?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperInstance?.slideNext();
  };

  const swiperConfig = {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      1920: { slidesPerView: 5 },
      1440: { slidesPerView: 4.3 },
      1200: { slidesPerView: 4.3, spaceBetween: 11 },
      700: { slidesPerView: 3, loop: true, slidesOffsetAfter: 100 },
      500: { slidesPerView: 2, loop: true },
      414: { slidesPerView: 1.5, loop: true },
    },
  };

  return (
    <Modal  open={isMobileModalOpen}
    onOpenChange={(open) => closeModal(open)}
    dismissible={true}>
      {/* Modal Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium text-white">
          {LocalText?.header || "Service Details"}
        </h2>
        <button
          className="text-white"
          onClick={closeModal}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-4">
        {/* Icons Section */}
        <div className="flex justify-between mb-4">
          {/* {icons.map((icon, idx) => (
            <div
              className="text-center text-white"
              key={idx}
              style={{ width: "60px" }}
            >
              <img src={icon.src} alt={icon.alt} className="mb-2" />
              <span>{icon.text}</span>
            </div>
          ))} */}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevSlide}
            className="p-2 bg-gray-800 rounded-full text-white"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={handleNextSlide}
            className="p-2 bg-gray-800 rounded-full text-white"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Swiper */}
        <Swiper {...swiperConfig} onSwiper={setSwiperInstance}>
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video}
                preload="none"
                loop
                onTimeUpdate={(e) => {
                  const offset = handleTimeUpdate(e.target);
                  if (progressRefs.current[index]) {
                    progressRefs.current[index].style.strokeDashoffset = offset;
                  }
                }}
              />
              <svg className={`progress-${index}`} viewBox="0 0 40 40">
                <circle
                  r={circleRadius}
                  cx="20"
                  cy="20"
                  fill="none"
                  stroke="white"
                  strokeDasharray={circumference}
                  ref={(el) => (progressRefs.current[index] = el)}
                />
              </svg>
              <div className="text-center mt-2">
                <button
                  onClick={() => handlePlayPause(index)}
                  className="p-2 bg-gray-800 rounded-full text-white"
                >
                  {currentPlaying === index ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

export default MobileServiceModal;
