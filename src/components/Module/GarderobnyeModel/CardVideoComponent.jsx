import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import CardVideo from "../CardVideo/CardVideo";
import video1 from "../../../assets/images/bg-video/Dressingrooms1.mp4";
import video2 from "../../../assets/images/bg-video/Dressingrooms2.mp4";
import room from "../../../assets/images/bg-image/room.png";
import "./CardVideoComponent.css";
import nextImage from "../../../assets/images/ico/Buttons/next-2.svg";
import pley from "../../../assets/images/ico/Buttons/pley-1.svg";
import loading from "../../../assets/images/ico/Buttons/loading-g.svg";

const cardArray = [
  {
    id: "card1",
    video: video1,
    title: "Ваше пространство —ваш холст!",
    des: "Создайте уникальную гардеробную. Каждый элемент — это кисть на вашем холсте. Выбирая дизайн, отделку и функциональные зоны, вы задаёте стиль своему пространству.",
  },
  {
    id: "card2",
    video: video2,
    title: "Функциональный мир порядка",
    des: "Забудьте о беспорядке и хаосе! Индивидуальные размеры гардеробной помогут вам эффективно организовать вещи, создавая пространство, где каждая вещь будет на своем месте.",
  },
  {
    id: "card3",
    video: video2,
    title: "Функциональный мир порядка",
    des: "Забудьте о беспорядке и хаосе! Индивидуальные размеры гардеробной помогут вам эффективно организовать вещи, создавая пространство, где каждая вещь будет на своем месте.",
  },
];

function CardVideoComponent() {
  const swiperRef = useRef(null); // Reference to Swiper instance
  const [isPlaying, setIsPlaying] = useState(true); // State to track autoplay status
  const [activeIndex, setActiveIndex] = useState(0); // Active slide index

  const swiperBreakpoints = {
    375: {
      centeredSlides: true,
      slidesPerView: 1.5,
      spaceBetween: 19,
      loop: true,
    },
    360: {
      centeredSlides: true,
      slidesPerView: 1.5,
      spaceBetween: 19,
      loop: true,
    },
  };

  // Play/Pause handler
  const handlePlayPause = () => {
    if (isPlaying) {
      swiperRef.current?.autoplay.stop(); // Stop autoplay
    } else {
      swiperRef.current?.autoplay.start(); // Start autoplay
    }
    setIsPlaying(!isPlaying);
  };

  // Debugging: Log activeIndex and realIndex whenever they change
  useEffect(() => {
    if (swiperRef.current) {
      console.log("Active Index (with Loop):", swiperRef.current.activeIndex);
      console.log("Real Index (corrected):", swiperRef.current.realIndex);
    }
  }, [activeIndex]);

  return (
    <div className="genn-CardVideoComponent">
      {/* for PC */}
      <div className="genn-CardVideoComponent-imageCard pc">
        <div className="genn-CardVideoComponent-imageCard-img">
          <img src={room} alt="room" />
        </div>
        <div className="genn-CardVideoComponent-imageCard-textContainer">
          <div className="genn-CardVideoComponent-imageCard-title">
            “Форма следует функции”
          </div>
          <div className="genn-CardVideoComponent-imageCard-des">
            Принципы «Модулор» Ле Корбюзье:
            <br /> продуманные пропорции, оптимальное <br />
            использование пространства.
          </div>
          <div className="genn-CardVideoComponent-imageCard-buttonContainer">
            <button className="genn-Baner-button-v2-1">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
      {/* end for Pc */}

      {/* for mobile */}
      <div className="genn-CardVideoComponent-imageCard mobile">
        <div className="genn-CardVideoComponent-imageCard-title mobile">
          “Форма следует <br /> функции”
        </div>
        <div className="genn-CardVideoComponent-imageCard-img mobile">
          <img src={room} alt="room" />
        </div>
        <div className="genn-CardVideoComponent-imageCard-textContainer mobile">
          <div className="genn-CardVideoComponent-imageCard-des mobile">
            Принципы «Модулор» Ле Корбюзье:
            <br /> продуманные пропорции, оптимальное <br />
            использование пространства.
          </div>
          <div className="genn-CardVideoComponent-imageCard-buttonContainer mobile">
            <button className="genn-Baner-button-v1">Выезд замерщика</button>
          </div>
        </div>
      </div>
      {/* end for mobile */}

      {/* for pc videos */}
      <div className="genn-cardVideo-main-1">
        <CardVideo
          videoBg={video2}
          title={"Ваше пространство —ваш холст!"}
          des={
            "Создайте уникальную гардеробную. Каждый элемент — это кисть на вашем холсте. Выбирая дизайн, отделку и функциональные зоны, вы задаёте стиль своему пространству."
          }
        />
      </div>
      <div className="genn-cardVideo-main-2">
        <CardVideo
          videoBg={video1}
          title={"Функциональный мир порядка"}
          des={
            "Забудьте о беспорядке и хаосе! Индивидуальные размеры гардеробной помогут вам эффективно организовать вещи, создавая пространство, где каждая вещь будет на своем месте."
          }
        />
      </div>
      {/* end pc videos */}

      {/* for the mobile videos */}
      {/* for the mobile videos */}
      <div className="genn-CardVideoComponent-CardsContainer ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Save Swiper instance
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={5}
          spaceBetween={18}
          breakpoints={swiperBreakpoints}
          navigation={{
            prevEl: ".CardVideoComponent-prev", // Custom previous button
            nextEl: `.CardVideoComponent-next`, // Custom next button
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex); // Use realIndex instead of activeIndex
          }}
        >
          {cardArray.map((item, index) => (
            <SwiperSlide key={item.id}>
              <CardVideo
                videoBg={item.video}
                title={item.title}
                des={item.des}
                isActive={index === activeIndex} // Use activeIndex instead of realIndex
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Play/Pause Button */}
        <div className="genn-CardVideoComponent-controls">
          <div
            className="genn-CardVideoComponent-play"
            onClick={handlePlayPause}
          >
            <img src={isPlaying ? loading : pley} alt="Play/Pause" />
          </div>
          <div className="genn-CardVideoComponent-prev-next">
            <div className="CardVideoComponent-prev">
              <img src={nextImage} alt="Previous" />
            </div>
            <div className="CardVideoComponent-next">
              <img src={nextImage} alt="Next" />
            </div>
          </div>
        </div>
      </div>
      {/* end the mobile videos */}
    </div>
  );
}

export default CardVideoComponent;
