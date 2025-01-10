import { title } from "framer-motion/client";
import card1 from "../../../../assets/images/bg-image/kitxhenCard1.png";
import card2 from "../../../../assets/images/bg-image/kitxhenCard2.png";
import card3 from "../../../../assets/images/bg-image/kitxhenCard3.png";
import nextImage from "../../../../assets/images/ico/Buttons/next-2.svg";
import pley from "../../../../assets/images/ico/Buttons/pley-1.svg";
import loading from "../../../../assets/images/ico/Buttons/loading-g.svg";

import TemplateCardV1 from "../../../Module/News/Card/templateCardV1";
import "./GategoryCardPrikhozhie.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useRef } from "react";
function GategoryCardPrikhozhie() {
  const [isPlaying, setIsPlaying] = useState(true); // Track autoplay state
  const swiperRef = useRef(null); // Reference to Swiper instance
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
    700: {
      slidesPerView: 3,
      slidesOffsetAfter: 100,
      slidesOffsetBefore: 100,
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
      slidesPerView: 1.3,
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
      slidesPerView: 1.3,
      spaceBetween: 15,
      loop: true,
    },
  };

  const dataGategoryCardPrikhozhie = [
    {
      title: "Прихожая: первое впечатление",
      des: "Шкаф становится вашей визитной карточкой. Он не просто хранит вещи, но и производит впечатление на гостей, демонстрируя ваш безупречный вкус и внимание к деталям. ",
      id: "1",
      imageSrc: card1,
    },
    {
      title: "Ваш стиль в каждом сантиметре!",
      des: "Индивидуальные размеры и дизайн позволяют создать уникальный шкаф, который не просто вместит вещи, но и станет выразителем вашей личности и вкуса.",
      id: "2",
      imageSrc: card2,
    },
    {
      title: "Как выбрать прихожую?",
      des: "Шкаф становится вашей визитной карточкой. Он не просто хранит вещи, но и производит впечатление на гостей, демонстрируя ваш безупречный вкус и внимание к деталям. ",
      id: "3",
      imageSrc: card3,
    },
    {
      title: "Как выбрать прихожую?",
      des: "Шкаф становится вашей визитной карточкой. Он не просто хранит вещи, но и производит впечатление на гостей, демонстрируя ваш безупречный вкус и внимание к деталям. ",
      id: "3",
      imageSrc: card3,
    },
    {
      title: "Как выбрать прихожую?",
      des: "Шкаф становится вашей визитной карточкой. Он не просто хранит вещи, но и производит впечатление на гостей, демонстрируя ваш безупречный вкус и внимание к деталям. ",
      id: "3",
      imageSrc: card3,
    },
    {
      title: "Как выбрать прихожую?",
      des: "Шкаф становится вашей визитной карточкой. Он не просто хранит вещи, но и производит впечатление на гостей, демонстрируя ваш безупречный вкус и внимание к деталям. ",
      id: "3",
      imageSrc: card3,
    },
  ];
  return (
    <>
      <div className="genn-GategoryCardPrikhozhie">
        {dataGategoryCardPrikhozhie.slice(0, 3).map((card) => (
          <TemplateCardV1
            key={card.id}
            title={card.title}
            des={card.des}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
      <div className="genn-templateCardV1-CardsContainer genn-Prikhozhie ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          breakpoints={swiperBreakpoints}
          autoplay={{ delay: 3000 }} // Autoplay with 3s delay
          loop={true} // Enable looping
          navigation={{
            prevEl: ".genn-CardVideoComponent-prev", // Custom previous button
            nextEl: ".genn-CardVideoComponent-next", // Custom next button
          }}
        >
          {dataGategoryCardPrikhozhie.map((item) => (
            <SwiperSlide key={item.id}>
              <TemplateCardV1
                id={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                des={item.des}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="genn-TemplateNexsV1-CardVideoComponent-controls">
          <div className="genn-CardVideoComponent-controls">
            <div
              className="genn-CardVideoComponent-play"
              onClick={handlePlayPause}
            >
              <img src={isPlaying ? loading : pley} alt="Play/Pause" />
            </div>

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
    </>
  );
}
export default GategoryCardPrikhozhie;
