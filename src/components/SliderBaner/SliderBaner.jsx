import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LocalText } from "../LocalText/LocalText";
import image1 from "../../assets/images/bg-image/SliderBaner1.png";
import image2 from "../../assets/images/bg-image/SliderBaner2.png";
import image3 from "../../assets/images/bg-image/SliderBaner3.png";
import image4 from "../../assets/images/bg-image/SliderBaner4.png";
import image5 from "../../assets/images/bg-image/SliderBaner5.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "./SliderBaner.css";

function SliderBaner({images = []}) {
  const defaultImages = [
    { src: image1, alt: LocalText.SliderBaner.altImage1 },
    { src: image2, alt: LocalText.SliderBaner.altImage2 },
    { src: image3, alt: LocalText.SliderBaner.altImage3 },
    { src: image4, alt: LocalText.SliderBaner.altImage4 },
    { src: image5, alt: LocalText.SliderBaner.altImage5 },
  ];
console.log('images.length ' + images.length);
  const sliderImages = images.length > 0
    ? images.map((img) => ({
        src: img.image,
        alt: img.title || LocalText.SliderBaner.defaultAlt,
      }))
    : defaultImages;

  return (
    <div className="genn-SliderBaner-image-container">
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={sliderImages.length > 5} // Включаем loop только если слайдов больше 5
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        breakpoints={{
          1920: { slidesPerView: 5 },
          1440: { slidesPerView: 4 },
          1200: { slidesPerView: 3.2 },
          768: { slidesPerView: 2.1 },
          414: {
            slidesPerView: 1.1,
            centeredSlides: true,
            spaceBetween: 10,
          },
          375: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 10 },
          360: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 10 },
          260: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 10 },
        }}
        className="genn-SliderBaner-swiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="genn-SliderBaner-image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="genn-SliderBaner-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     {/* Custom Navigation Buttons */}
     <div
          className="custom-next"
       
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div
          className="custom-prev"

        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
  );
}

export default SliderBaner;
