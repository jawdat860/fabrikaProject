import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./VideoSlider.css";

import plac from "../../assets/images/bg-image/plac.png";
import image1 from "../../assets/images/bg-image/bg-banner.png";
import image2 from "../../assets/images/bg-image/bg-banner.png";
import image3 from "../../assets/images/bg-image/bg-banner.png";
import image4 from "../../assets/images/bg-image/bg-banner.png";
import image5 from "../../assets/images/bg-image/bg-banner.png";

import { LocalText } from "../LocalText/LocalText";
import { TitleModel } from "./TitleModel";
import VideoSliderMobileModel from "./VideoSliderMobileModel";

function VideoSlider() {
  const [currentPlaying, setCurrentPlaying] = useState(0); // Start with the first video
  const [progressArray, setProgressArray] = useState([0, 0, 0, 0, 0]); // Track progress for each video
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal visibility
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false); // State for mobile modal visibility

  const [modalImage, setModalImage] = useState(null); // Track the image for the modal

  const swiperRef = useRef();
  const ArrayText = [
    LocalText.VideoSlider.title,
    LocalText.VideoSlider.title2,
    LocalText.VideoSlider.title3,
    LocalText.VideoSlider.title4,
    LocalText.VideoSlider.title5,
  ];
  const videoRefs = useRef([]);

  const videos = [
    " https://l.okdeal.ru/video/SliderVideo1.mp4",
    " https://l.okdeal.ru/video/SliderVideo1.mp4",
    " https://l.okdeal.ru/video/SliderVideo1.mp4",
    " https://l.okdeal.ru/video/SliderVideo4.mp4",
    " https://l.okdeal.ru/video/SliderVideo1.mp4",
  ];
  const images = [image1, image2, image3, image4, image5];

  const updateProgress = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      const currentProgress = (video.currentTime / video.duration) * 100; // Calculate progress percentage
      setProgressArray((prevProgress) =>
        prevProgress.map((progress, i) =>
          i === index ? currentProgress : progress
        )
      );
    }
  };

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setCurrentPlaying(index);
    } else {
      video.pause();
      setCurrentPlaying(null);
    }
  };

  const openModal = (image) => {
    if (window.innerWidth < 768) {
      // If screen size is small, open mobile modal
      setIsMobileModalOpen(true);
    } else {
      // Otherwise, open regular modal
      setModalImage(image); // Set the image to be displayed in the modal
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; // Open the modal
    }
    // Disable scroll
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the regular modal
    setIsMobileModalOpen(false); // Close the mobile modal
    setModalImage(null); // Reset the modal image
    document.body.style.overflow = ""; // Re-enable scroll
  };

  useEffect(() => {
    // Automatically play the first video when the component mounts
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.play();
      setCurrentPlaying(0); // Set the first video as currently playing
    }
  }, []);

  useEffect(() => {
    if (currentPlaying !== null) {
      const interval = setInterval(() => updateProgress(currentPlaying), 100); // Update every 100ms
      return () => clearInterval(interval); // Cleanup when video stops
    }
  }, [currentPlaying]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        slidesPerView={5}
        breakpoints={{
          1920: { slidesPerView: 5 },
          1440: { slidesPerView: 4.3, loop: true },
          1200: { slidesPerView: 4.3, spaceBetween: 11, loop: true },
          700: {
            slidesPerView: 3,
            loop: true,
            slidesOffsetAfter: 100, // Adjust any trailing offset
            slidesOffsetBefore: 100,
            centeredSlides: true,
            spaceBetween: 11,
          },
          500: {
            slidesPerView: 2,
            loop: true,
            slidesOffsetAfter: 100, // Adjust any trailing offset
            slidesOffsetBefore: 100,
            centeredSlides: true,
            spaceBetween: 11,
          },
          414: {
            slidesPerView: 1.5,
            loop: true,

            centeredSlides: true,
            sapaceBetween: 10,
          },
          375: {
            centeredSlides: true,
            slidesPerView: 1.3,
            loop: true,

            spaceBetween: 10,
          },
          360: {
            centeredSlides: true,
            slidesPerView: 1.4,
            loop: true,

            spaceBetween: 10,
          },
          260: {
            centeredSlides: true,
            slidesPerView: 1.2,
            loop: true,

            spaceBetween: 10,
          },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {videos.map((video, index) => {
          const radius = 20;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset =
            circumference - (progressArray[index] / 100) * circumference;

          return (
            <SwiperSlide key={index}>
              <div
                className="genn-VideoSlider-card"
                onMouseEnter={() => {
                  if (currentPlaying !== index) {
                    videoRefs.current.forEach((video, i) => {
                      if (i !== index) video.pause();
                    });
                    videoRefs.current[index].play();
                    setCurrentPlaying(index);
                  }
                }}
                onMouseLeave={() => {
                  videoRefs.current[index].pause();
                  setCurrentPlaying(null);
                  setProgressArray((prev) =>
                    prev.map((progress, i) => (i === index ? 0 : progress))
                  ); // Reset progress on mouse leave
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  muted
                  loop
                  autoPlay={false} // autoPlay is false since we handle it manually
                  src={video}
                  onTimeUpdate={() => updateProgress(index)} // Sync progress during playback
                />
                <div className="videoSlider-banner">
                  <div
                    className="videoSlider-circular-progress"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <svg
                      className="videoSlider-progress-ring"
                      width="50"
                      height="50"
                    >
                      <circle
                        className="videoSlider-progress-ring__background"
                        cx="25"
                        cy="25"
                        r="20"
                        strokeWidth="5"
                      />
                      <circle
                        className="videoSlider-progress-ring__progress"
                        cx="25"
                        cy="25"
                        r="20"
                        strokeWidth="5"
                        style={{
                          strokeDasharray: `${circumference}`, // Circumference of the circle
                          strokeDashoffset: `${strokeDashoffset}`, // Offset for progress
                          transition: "stroke-dashoffset 0.1s linear", // Smooth transition
                        }}
                      />
                    </svg>
                    <button
                      onClick={() => togglePlay(index)}
                      className="videoSlider-circular-button"
                    >
                      {currentPlaying === index ? (
                        <i className="fa-solid fa-pause"></i>
                      ) : (
                        <i className="fa-solid fa-play"></i>
                      )}
                    </button>
                  </div>
                </div>
                <div
                  className={
                    index === currentPlaying
                      ? "genn-videoSlider-text1"
                      : "genn-videoSlider-text "
                  }
                >
                  <div className="genn-videoSlider-text2">
                    <div
                      className={
                        index !== currentPlaying
                          ? "genn-videoSlider-text-contain"
                          : "hidden"
                      }
                    >
                      {ArrayText[index]}{" "}
                      {/* Correctly reference the text for each video */}
                    </div>

                    <img
                      className="genn-videoSlider-text-img"
                      src={plac}
                      alt="plac"
                      onClick={() => openModal(images[index])} // Open modal with the corresponding image
                    />
                  </div>
                </div>
                {/* Custom Navigation Buttons */}
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button">
          <div
            className="swiper-button-prev"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          ></div>
          <div
            className="swiper-button-next"
            onClick={() => swiperRef.current.swiper.slideNext()}
          ></div>
        </div>
      </Swiper>
      <div className="swiper-button2">
        <div
          className="swiper-button-prev2"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="swiper-button-next2"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      {isMobileModalOpen && (
        <VideoSliderMobileModel
          isOpen={isMobileModalOpen}
          onClose={closeModal}
          modalImage={image1}
        />
      )}
      {/* Modal */}
      {isModalOpen && (
        <div className="videoSlider-modal-overlay" onClick={closeModal}>
          <div
            className="videoSlider-modal"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <button className="videoSlider-modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="videoSlider-modal-forImageAndText">
              {modalImage && (
                <img
                  className="videoSlider-modal-image"
                  src={modalImage}
                  alt="Modal Content"
                />
              )}
              <TitleModel />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoSlider;
