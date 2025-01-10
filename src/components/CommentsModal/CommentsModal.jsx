import { Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import menu5 from "../../assets/images/ico/menu/ico-gard-2-b.svg.svg";
import menu1 from "../../assets/images/ico/menu/kuhna-1-b.svg";
import menu6 from "../../assets/images/ico/menu/prihozaia-1-b.svg";
import menu8 from "../../assets/images/ico/menu/r-zona-1-b.svg";
import menu11 from "../../assets/images/ico/menu/skaf-2-b.svg";
import { LocalText } from "../LocalText/LocalText";
import activeMenu1 from "../../assets/images/ico/menu/kuhna-2-b.svg";
import activeMenu11 from "../../assets/images/ico/menu/skaf-1-b.svg";
import activeMenu5 from "../../assets/images/ico/menu/prihozaia-2-b.svg";
import activeMenu6 from "../../assets/images/ico/menu/ico-gard-1-b.svg";
import activeMenu8 from "../../assets/images/ico/menu/r-zona-2-b.svg";
import "./CommentsModal.css";
import GeneralMenu from "../Header/GeneralMenu/GeneralMenu";

const VideoPlayer = ({ src, className, defaultValue }) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(defaultValue);
  const VideoRef = useRef(null);
  const togglePlay = () => {
    const videoElement = VideoRef.current;
    if (!videoElement) return;
    setIsPlaying((prev) => {
      if (prev) {
        videoElement.pause();
        setIsPlaying(false);
      } else {
        videoElement.play();
        setIsPlaying(true);
      }
    });
  };

  const handleTimeUpdate = (e) => {
    const video = e.currentTarget;
    const progress = (video.currentTime / video.duration) * 100;
    setProgress(progress);
    if (circleRef.current) {
      const circumference = 2 * Math.PI * 20;
      circleRef.current.style.strokeDashoffset = String(
        circumference - (progress / 100) * circumference
      );
    }
  };
  useEffect(() => {
    const videoElement = VideoRef.current;
    if (VideoRef.current && defaultValue) {
      setIsPlaying(true);
      videoElement.play();
    }
    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [defaultValue]);
  return (
    <div className={`relative ${className}`}>
      <video
        ref={VideoRef}
        src={src}
        className="w-full rounded-lg"
        onTimeUpdate={handleTimeUpdate}
        loop
        playsInline
        muted
      />
      <div className="absolute z-40 bottom-4 left-4">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12" viewBox="0 0 50 50">
            <circle
              className="text-gray-300/30"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="25"
              cy="25"
            />
            <circle
              ref={circleRef}
              className="text-[#FF5A00]"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="25"
              cy="25"
              style={{
                strokeDasharray: `${2 * Math.PI * 20}`,
                strokeDashoffset: `${2 * Math.PI * 20}`,
              }}
            />
          </svg>
          <button
            className="absolute inset-0 flex items-center justify-center text-white"
            onClick={() => togglePlay()}
          >
            {isPlaying ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.displayName = "VideoPlayer";

const CommentsModal = ({ reviews = [] }) => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const videoRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (newIndex) => {
    if (currentPlaying !== null) {
      videoRefs.current[currentPlaying]?.pause();
    }
    // setCurrentPlaying(null);
  };

  const openModal = (index) => {
    if (window.innerWidth < 768) {
      setIsMobileModalOpen(true);
    } else {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
    setCurrentPlaying(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsMobileModalOpen(false);
    setCurrentPlaying(null);
    videoRefs.current.forEach((ref) => ref?.pause());
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (isModalOpen && videoRefs.current[0]) {
      videoRefs.current[0].play();
      setCurrentPlaying(0);
    }
  }, [isModalOpen]);

  return (
    <div className="py-4 md:py-6 relative bg-[#EEECEA]">
      <h3 className="text-3xl font-bold text-center mb-8">Видео отзывы</h3>
      <div className="relative">
        <Swiper
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-pagination-bullet"></span>`,
            bulletActiveClass: "swiper-pagination-bullet-active animate-scale",
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
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
              centeredSlides: true,
              spaceBetween: 14,
            },
            500: {
              slidesPerView: 2,
              loop: true,
              centeredSlides: true,
              spaceBetween: 14,
            },
            414: {
              slidesPerView: 1.7,
              loop: true,
              centeredSlides: true,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 1.6,
              loop: true,
              centeredSlides: true,
              spaceBetween: 14,
            },
            360: {
              slidesPerView: 1.6,
              loop: true,
              centeredSlides: true,
              spaceBetween: 18,
            },
          }}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col justify-end items-center p-6 aspect-[242/437] w-[242px] rounded-2xl bg-cover bg-center cursor-pointer relative overflow-hidden group"
                style={{ backgroundImage: `url(${review.image})` }}
                onClick={() => openModal(index)}
              >
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60"></div>
                <div className="relative z-10">
                  <div className="text-white text-center text-2xl mb-4 font-medium">
                    {review.title}
                  </div>
                  <button
                    className="bg-[#FF5A00] hover:bg-[#FF7A20] text-white py-2.5 px-6 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    onClick={openModal}
                  >
                    Смотреть сейчас
                    <i className="fas fa-plus text-xs"></i>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="next absolute rounded-none top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-transparent to-white/60 z-40 h-full text-black w-16 flex items-center justify-center">
          <i className="fa-solid text-gray-600 text-4xl fa-chevron-right"></i>
        </button>
        <button className="prev absolute rounded-none top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-l from-transparent to-white/60 z-40 h-full text-black w-16 flex items-center justify-center">
          <i className="fa-solid text-gray-600 text-4xl fa-chevron-left"></i>
        </button>
      </div>

      <div className="text-center mt-8 text-gray-600">
        Проконсультируем и с радостью решим ваши вопросы
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="px-6 py-2.5 bg-white text-gray-800 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
          {LocalText.Baner.button1}
        </button>
        <button className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-200">
          {LocalText.Baner.button2}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
          <div className=" h-screen mx-auto p-4">
            <div className="flex h-16 justify-between items-center">
              <button
                className="text-gray-400 bg-gray-500/40 size-10 rounded-full hover:text-white"
                onClick={closeModal}
              >
                <img src="/src/assets/images/ico/ico/Buttons/closeIco2.svg" />
              </button>
              <p onClick={() => console.log(currentPlaying)}>
                {reviews[currentPlaying].title}
              </p>
              <div className="flex space-x-4">
                <button
                  className="text-white bg-gray-500/40 size-10 rounded-full"
                  onClick={() => swiperInstance?.slidePrev()}
                >
                  <i className="fa-solid fa-chevron-left text-2xl"></i>
                </button>
                <button
                  className="text-white bg-gray-500/40 size-10 rounded-full"
                  onClick={() => swiperInstance?.slideNext()}
                >
                  <i className="fa-solid fa-chevron-right text-2xl"></i>
                </button>
              </div>
            </div>
            <GeneralMenu
              menu1={"src/assets/images/ico/ico/commentModelIcom1.svg"}
              menu11={"src/assets/images/ico/ico/commentModelIcon2.svg"}
              menu5={"src/assets/images/ico/ico/commentModelIcon4.svg"}
              menu6={"src/assets/images/ico/ico/commentModelIcon3.svg"}
              menu8={"src/assets/images/ico/ico/commentModelIcon5.svg"}
              activeMenu1={activeMenu1}
              activeMenu11={activeMenu11}
              activeMenu5={activeMenu5}
              activeMenu6={activeMenu6}
              activeMenu8={activeMenu8}
            />
            <Swiper
              onSwiper={setSwiperInstance}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              onSlideChange={(swiper) => handleSlideChange(swiper.realIndex)}
              className=""
              spaceBetween={16}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <VideoPlayer
                    src={review.video}
                    defaultValue={currentPlaying === index}
                    className="h-[calc(100vh_-_80px)]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {isMobileModalOpen && (
        <Modal
          header={<ModalHeader>Service Details</ModalHeader>}
          open={isMobileModalOpen}
          onOpenChange={closeModal}
          dismissible={true}
          className="bg-black min-h-screen flex flex-col overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex h-16 justify-between items-center">
              <button
                className="text-gray-400 bg-gray-500/40 size-10 rounded-full hover:text-white"
                onClick={closeModal}
              >
                <img src="/src/assets/images/ico/ico/Buttons/closeIco2.svg" />
              </button>
              <p onClick={() => console.log(currentPlaying)}>
                {reviews[currentPlaying].title}
              </p>
              <div className="flex space-x-4">
                <button
                  className="text-white bg-gray-500/40 size-10 rounded-full"
                  onClick={() => swiperInstance?.slidePrev()}
                >
                  <i className="fa-solid fa-chevron-left text-2xl"></i>
                </button>
                <button
                  className="text-white bg-gray-500/40 size-10 rounded-full"
                  onClick={() => swiperInstance?.slideNext()}
                >
                  <i className="fa-solid fa-chevron-right text-2xl"></i>
                </button>
              </div>
            </div>
            <GeneralMenu
              menu1={"src/assets/images/ico/ico/commentModelIcom1.svg"}
              menu11={"src/assets/images/ico/ico/commentModelIcon2.svg"}
              menu5={"src/assets/images/ico/ico/commentModelIcon4.svg"}
              menu6={"src/assets/images/ico/ico/commentModelIcon3.svg"}
              menu8={"src/assets/images/ico/ico/commentModelIcon5.svg"}
              activeMenu1={activeMenu1}
              activeMenu11={activeMenu11}
              activeMenu5={activeMenu5}
              activeMenu6={activeMenu6}
              activeMenu8={activeMenu8}
            />
            <Swiper
              onSwiper={setSwiperInstance}
              centeredSlides={true}
              loop={true}
              onSlideChange={(swiper) => {
                handleSlideChange(swiper.realIndex);
              }}
              className=" relative "
              spaceBetween={16}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="">
                  <VideoPlayer
                    src={review.video}
                    defaultValue={currentPlaying === index}
                    className="h-[calc(100vh_-_120px)]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommentsModal;
