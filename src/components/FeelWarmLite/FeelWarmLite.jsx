import React from "react";


function FeelWarmLite({ imageGallery }) {
  if (!imageGallery || imageGallery.length === 0) {
    return <div>Изображения недоступны</div>;
  }

  return (
    <div className="genn-Feelwarm">
      {/* Версия для десктопа */}
      <div className="genn-container-forPc bg-[#111]">
        <div className="genn-Feelwarm-forBc genn-container">
          {imageGallery.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className={`genn-feelwarm-image genn-Feelwarm-forBc-image${index + 1} bg-[#fff]`}
            >
              <img src={image.image} alt={`warm${index + 1}`} />
            </div>
          ))}
          <div className="  genn-Feelwarm-forBc-imagesBox bg-[#fff] ">
          {imageGallery.slice(2, 4).map((image, index) => (
            <div
              key={index}
              className={`genn-feelwarm-image genn-Feelwarm-forBc-imagesBox-${index === 0 ? 'image'+(index + 1) : 'omage'+(index + 1)} bg-[#fff]`}
            >
              <img src={image.image} alt={`warm${index + 1}`} />
            </div>
          ))}
          </div>
          {imageGallery.slice(4, 5).map((image, index) => (
            <div
              key={index}
              className={`genn-feelwarm-image genn-Feelwarm-forBc-image${index + 3} bg-[#fff]`}
            >
              <img src={image.image} alt={`warm${index + 1}`} />
            </div>
          ))}
          
        </div>
        <div className="genn-feelwarm-text">
          Почувствуйте тепло общения и вкус каждого мгновения
        </div>
        <div className="genn-feelwarm-buttonContainer">
          <button className="genn-Baner-button-v5 genn-feelwarm-textButton">
            Бесплатный дизайн проект
          </button>
        </div>
      </div>

      {/* Версия для мобильных устройств */}
      <div className="genn-container-mobile bg-[#000]">
        <div className="feelwarm-container-main">
          <div className="feelwarm-container feelwarm-container-1">
            <div className="feelwarm-container-image feelwarm-container-image-1">
              <div className="feelwarm-container-image-1-image-first">
                <div className="feelwarm-container-image-1-image-first-1">
                  <img src={imageGallery[0]?.image} alt="image1" />
                </div>
                <div className="feelwarm-container-image-1-image-first-2">
                  <img src={imageGallery[4]?.image} alt="image5" />
                </div>
              </div>
              <div className="feelwarm-container-image-1-image-second">
                <img src={imageGallery[1]?.image} alt="image2" />
              </div>
            </div>
            <div className="genn-text-feelwarm-1 genn-text-feelwarm">
              Почувствуйте тепло общения и вкус <br /> каждого мгновения
            </div>
          </div>
          <div className="feelwarm-container feelwarm-container-2">
            <div className="feelwarm-container-image feelwarm-container-image-2">
              {imageGallery.slice(2, 6).map((image, index) => (
                <div
                  key={index}
                  className="feelwarm-container-image-a feelwarm-container-image-2-first"
                >
                  <img src={image.image} alt={`image${index + 3}`} />
                </div>
              ))}
            </div>
            <div className="genn-text-feelwarm genn-text-feelwarm-2">
              Каждый элемент радует глаз и <br />
              удобен в использовании
            </div>
          </div>
        </div>
        <div className="feelwarm-button">
          <button className="genn-Baner-button-v1">
            Бесплатный дизайн проект
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeelWarmLite;
