import React, { useState, useEffect } from "react";
import { LocalText } from "../LocalText/LocalText";
import "./CommentsModal.css";

import image1 from "../../assets/images/bg-image/commentVideo2.png";
import image2 from "../../assets/images/bg-image/commentVideo1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import icon1 from "../../assets/images/ico/commentModelIcom1.svg";
import icon2 from "../../assets/images/ico/commentModelIcon2.svg";
import icon3 from "../../assets/images/ico/commentModelIcon3.svg";
import icon4 from "../../assets/images/ico/commentModelIcon4.svg";
import icon5 from "../../assets/images/ico/commentModelIcon5.svg";
import { Navigation, Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Modal, VisuallyHidden } from "@telegram-apps/telegram-ui";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import CommentsModalMobail from "./MobileServiceModal";
import MobileServiceModal from "./MobileServiceModal";
function CommentsModal(reviews) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false); // State for mobile modal visibility

  const [currentPlaying, setCurrentPlaying] = useState(null);
  const videoRefs = React.useRef([]); // Change to useRef to handle DOM element refs
  const [swiperInstance, setSwiperInstance] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + +"</span>";
    },
  };
    
  // Проверяем, что reviews передан и является массивом
  const videos = Array.isArray(reviews.reviews) ? reviews.reviews : [];


  if (videos.length === 0) {
    return <div>nodata</div>;
  }

  
  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;

  const openModal = (image) => {
    if (window.innerWidth < 768) {
      // If screen size is small, open mobile modal
      setIsMobileModalOpen(true);
    } else {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; // Open the modal
    }
    // Disable scroll
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the regular modal
    setIsMobileModalOpen(false); // Close the mobile modal
    setCurrentPlaying(null); // Reset the modal image
    videoRefs.current.forEach((ref) => ref?.pause());
    document.body.style.overflow = ""; // Re-enable scroll
  };
  useEffect(() => {
    // Play the first video when the modal opens
    if (isModalOpen && videoRefs.current[0]) {
      videoRefs.current[0].play();
      setCurrentPlaying(0);
    }
  }, [isModalOpen]);

  const handlePlayPause = (index) => {
    const videoEl = videoRefs.current[index];
    if (!videoEl) return;

    if (currentPlaying === index) {
      videoEl.pause();
      setCurrentPlaying(null);
    } else {
      if (currentPlaying !== null) videoRefs.current[currentPlaying]?.pause();
      videoEl.play();
      setCurrentPlaying(index);
    }
  };

  const handlePrevSlide = () => {
    if (swiperInstance) {
      if (currentPlaying !== null) {
        videoRefs.current[currentPlaying]?.pause();
      }

      swiperInstance.slidePrev();

      const newIndex = swiperInstance.realIndex;
      setTimeout(() => {
        videoRefs.current[newIndex]?.play();
        setCurrentPlaying(newIndex);
      }, 100);
    }
  };

  const handleNextSlide = () => {
    if (swiperInstance) {
      if (currentPlaying !== null) {
        videoRefs.current[currentPlaying]?.pause();
      }

      swiperInstance.slideNext();

      const newIndex = swiperInstance.realIndex;
      setTimeout(() => {
        videoRefs.current[newIndex]?.play();
        setCurrentPlaying(newIndex);
      }, 100);
    }
  };

  const handleTimeUpdate = (videoEl) => {
    const progress = videoEl.currentTime / videoEl.duration;
    return progress * circumference;
  };

  return (
    <>
      <h3 className="genn-CommentsModal-title">
        {LocalText.CommentsModal.title}
      </h3>
      <div className="genn-CommentsModal-containerCard genn-fl-row">
        <Swiper
          pagination={true}
          navigation={{
            prevEl: ".prev", // Custom previous button
            nextEl: ".next", // Custom next button
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 10000 }}
          breakpoints={{
            2200: { slidesPerView: 9, spaceBetween: 40, loop: true },
            1920: { slidesPerView: 7, spaceBetween: 40, loop: true },
            1440: { slidesPerView: 5.3, spaceBetween: 40, loop: true },
            1200: { slidesPerView: 4.3, spaceBetween: 11, loop: true },
            700: {
              slidesPerView: 3.1,
              loop: true,
              slidesOffsetAfter: 100, // Adjust any trailing offset
              slidesOffsetBefore: 100,
              centeredSlides: true,
              spaceBetween: 14,
            },
            500: {
              slidesPerView: 2,
              loop: true,
              slidesOffsetAfter: 100, // Adjust any trailing offset
              slidesOffsetBefore: 100,
              centeredSlides: true,
              spaceBetween: 14,
            },
            414: {
              slidesPerView: 1.7,
              loop: true,

              centeredSlides: true,
              sapaceBetween: 10,
            },
            375: {
              centeredSlides: true,
              slidesPerView: 1.6,
              loop: true,

              spaceBetween: 14,
            },
            360: {
              centeredSlides: true,
              slidesPerView: 1.6,
              loop: true,

              spaceBetween: 14,
            },
          }}
        >
          {videos.map((data, index) => {
          const src = data.video; // Просто берем значение из объекта
          const img = data.image; // Просто берем значение из объекта

        

          return (
            <SwiperSlide key={index}>
              <div
                className="genn-CommentsModal-card"
                style={{
                  backgroundImage: `url(${img})`, // Используем значение img
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={openModal}
              >
                
                <div>{data.title}</div>
                <button onClick={openModal}>
                  {LocalText.CommentsModal.button}
                </button>
              </div>
            </SwiperSlide>
          );
        })}

        </Swiper>
        <div className="next">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="prev">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
      <div className="genn-CommentsModal-description">
        {" "}
        <div>{LocalText.CommentsModal.description}</div>
      </div>
      {isModalOpen && (
        <div className="genn-CommentsModal-overlay" onClick={closeModal}>
          <div
            className="genn-CommentsModal-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="genn-CommentsModal-model-title">
              {LocalText.CommentsModal.title}
            </h4>

            <div className="genn-CommentsModal-modalcontainIcons ds">
              <div className="genn-CommentsModal-close" onClick={closeModal}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="genn-fl-row genn-CommentsModel-2-block">
                <div className="genn-CommentsModel-2-block-menu">
                  <img src={icon1} alt={LocalText.Header.MenuIco.mi1} />
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi1}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <img src={icon2} alt={LocalText.Header.MenuIco.mi2} />
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi2}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <img src={icon3} alt={LocalText.Header.MenuIco.mi3} />
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi3}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <img src={icon4} alt={LocalText.Header.MenuIco.mi4} />
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi4}
                  </div>
                </div>

                <div className="genn-CommentsModel-2-block-menu">
                  <img src={icon5} alt={LocalText.Header.MenuIco.mi5} />
                  <div className="genn-CommentsModel-2-block-menu-text w-[66px]">
                    {LocalText.Header.MenuIco.mi5}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <div className="genn-CommentsModel-2-block-menu icon"></div>
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi4}
                  </div>
                </div>
              </div>
              <div className="genn-CommentsModal-buttons-model">
                <button onClick={handlePrevSlide}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={handleNextSlide}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="genn-CommentsModal-modalcontainIcons mb">
              <div className="genn-CommentsModal-icon-arrwo">
                <div className="genn-CommentsModal-close" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="genn-CommentsModal-buttons-model">
                  <button onClick={handlePrevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button onClick={handleNextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              <div className="genn-fl-row genn-CommentsModel-2-block">
                <div className="genn-CommentsModel-2-block-menu">
                  <div className="w-[40px] h-[40px]">
                    <img src={icon1} alt={LocalText.Header.MenuIco.mi1} />
                  </div>
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi1}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <div className="w-[40px] h-[40px]">
                    <img src={icon2} alt={LocalText.Header.MenuIco.mi2} />
                  </div>
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi2}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <div className="w-[40px] h-[40px]">
                    <img src={icon3} alt={LocalText.Header.MenuIco.mi3} />
                  </div>
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi3}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <div className="w-[40px] h-[40px]">
                    <img src={icon4} alt={LocalText.Header.MenuIco.mi4} />
                  </div>
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi4}
                  </div>
                </div>

                <div className="genn-CommentsModel-2-block-menu">
                  <div className="w-[40px] h-[40px]">
                    <img src={icon5} alt={LocalText.Header.MenuIco.mi5} />
                  </div>
                  <div className="genn-CommentsModel-2-block-menu-text w-[66px]">
                    {LocalText.Header.MenuIco.mi5}
                  </div>
                </div>
                <div className="genn-CommentsModel-2-block-menu">
                  <div className="genn-CommentsModel-2-block-menu icon"></div>
                  <div className="genn-CommentsModel-2-block-menu-text">
                    {LocalText.Header.MenuIco.mi4}
                  </div>
                </div>
              </div>
            </div>
            <div className="genn-Model-slider-overlay">
              <Swiper
                onSwiper={setSwiperInstance}
                slidesPerView={6}
                spaceBetween={30}
                centeredSlides={true}
                loop
                breakpoints={{
                  1920: { slidesPerView: 6 },
                  1440: { slidesPerView: 5.3, loop: true },
                  1200: { slidesPerView: 5.3, spaceBetween: 11, loop: true },
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
                    slidesPerView: 1.2,
                    loop: true,

                    spaceBetween: 10,
                  },
                }}
                className=""
              >
                {videos.map((video, index) => (
                  <SwiperSlide key={index}>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.video}
                      loop
                      onTimeUpdate={(e) => {
                        const progressCircle = document.querySelector(
                          `.progress-${index}`
                        );
                        const offset =
                          circumference - handleTimeUpdate(e.target);
                        progressCircle.style.strokeDashoffset = offset;
                      }}
                    />
                    <div className="videoSlider-banner">
                      <div
                        className="videoSlider-circular-progress"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <svg width="50" height="50">
                          <circle
                            className="videoSlider-progress-ring__background"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="transparent"
                            stroke="#ccc"
                            strokeWidth="3"
                          />
                          <circle
                            className={`videoSlider-progress-ring__progress progress-${index}`}
                            cx="25"
                            cy="25"
                            r={circleRadius}
                            fill="transparent"
                            stroke="#4caf50"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference}
                          />
                        </svg>
                        <button
                          onClick={() => handlePlayPause(index)}
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
      {isMobileModalOpen && (
        <Modal
          header={<ModalHeader>Service Details</ModalHeader>}
          open={isMobileModalOpen}
          onOpenChange={closeModal}
          dismissible={true}
          style={{
            backgroundColor: "transparent",
            bottom: "0",
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            overflow: "hidden",
          }}
        >
          <div className="genn-CommentsModal-mobil bg-black">
            {/* Close Icon */}
            <div className="genn-CommentsModal-modalcontainIcons">
              <div className="genn-CommentsModal-modalcontainIconsone">
                <div className="genn-CommentsModal-close" onClick={closeModal}>
                  <i className="fa-solid fa-xmark text-white"></i>
                </div>
                <div className="genn-CommentsModal-buttons-model mt-4">
                  <button onClick={handlePrevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button onClick={handleNextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              {/* Menu Icons Section */}

              {/* Navigation Buttons */}
              <div className="genn-fl-row genn-CommentsModel-2-block text-white">
                {[icon1, icon2, icon3, icon4, icon5].map((icon, idx) => (
                  <div key={idx} className="genn-CommentsModel-2-block-menu">
                    <div className="w-[40px] h-[40px]">
                      <img
                        src={icon}
                        alt={LocalText.Header.MenuIco[`mi${idx + 1}`]}
                      />
                    </div>
                    <div className="genn-CommentsModel-2-block-menu-text">
                      {LocalText.Header.MenuIco[`mi${idx + 1}`]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Section */}
            <div className="genn-Model-slider-overlay flex-1 flex">
              <Swiper
                onSwiper={setSwiperInstance}
                spaceBetween={30}
                centeredSlides={true}
                loop
                breakpoints={{
                  700: {
                    slidesPerView: 3,
                    slidesOffsetAfter: 100,
                    slidesOffsetBefore: 100,
                    centeredSlides: true,
                    spaceBetween: 11,
                  },
                  500: {
                    slidesPerView: 2,
                    slidesOffsetAfter: 100,
                    slidesOffsetBefore: 100,
                    centeredSlides: true,
                    spaceBetween: 11,
                  },
                  414: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                    spaceBetween: 10,
                  },
                  375: {
                    slidesPerView: 1.3,
                    centeredSlides: true,
                    spaceBetween: 10,
                  },
                  360: {
                    slidesPerView: 1.4,
                    centeredSlides: true,
                    spaceBetween: 10,
                  },
                }}
              >
                {videos.map((video, index) => (
                  <SwiperSlide key={index}>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video}
                      loop
                      onTimeUpdate={(e) => {
                        const progressCircle = document.querySelector(
                          `.progress-${index}`
                        );
                        const offset =
                          circumference -
                          handleTimeUpdate(e.target.currentTime);
                        progressCircle.style.strokeDashoffset = offset;
                      }}
                    />
                    <div className="videoSlider-banner">
                      <div
                        className="videoSlider-circular-progress"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <svg width="50" height="50">
                          <circle
                            className="videoSlider-progress-ring__background"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="transparent"
                            stroke="#ccc"
                            strokeWidth="3"
                          />
                          <circle
                            className={`videoSlider-progress-ring__progress progress-${index}`}
                            cx="25"
                            cy="25"
                            r={circleRadius}
                            fill="transparent"
                            stroke="#4caf50"
                            strokeWidth="3"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference}
                          />
                        </svg>
                        <button
                          onClick={() => handlePlayPause(index)}
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default CommentsModal;
