import { LocalText } from "../../LocalText/LocalText";
import "./TopLevel.css";
import image from "../../../assets/images/bg-image/shkafTopLevel.jpg";
import { useState } from "react";
import ModelCall from "../../Module/ModelCall/ModelCall";
function TopLevel({ imageBg, title, title2, description }) {
  const [isModelOpen, setIsModelOpen] = useState(false); // State to manage model visibility

  const openModelHandler = () => {
    setIsModelOpen(true); // Open the model
  };

  const closeModelHandler = () => {
    setIsModelOpen(false); // Close the model
  };
  return (
    <>
      <div className="genn-TopLevel-title-sm">
        <div>{LocalText.shkaf.TopLevel.title}</div>
      </div>
      <div className="genn-TopLevel-imag-container">
        <img
          className="genn-TopLevel-imag"
          src={image}
          alt={LocalText.shkaf.TopLevel.title}
        />
      </div>
      <div className="genn-TopLevel-Text">
        <div className="genn-TopLevel-Text-title">{title}</div>
        <div className="genn-TopLevel-Text-desContainer">
          <div className="genn-TopLevel-Text-des1">{title2}</div>
          <div
            className="genn-TopLevel-Text-des2"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className="genn-TopLevel-Text-buttonContainer">
          <button
            className="genn-TopLevel-Text-button1"
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=79585008556&text&type=phone_number&app_absent=0",
                "_blank"
              );
            }}
          >
            {LocalText.shkaf.TopLevel.buttonTiTle1}
          </button>
          <button
            className="genn-TopLevel-Text-button2"
            onClick={openModelHandler}
          >
            {LocalText.shkaf.TopLevel.buttonTiTle2}
          </button>
          <button
            className="genn-TopLevel-Text-button3"
            onClick={openModelHandler}
          >
            {LocalText.shkaf.TopLevel.buttonTiTle3}
          </button>
        </div>
      </div>
      {isModelOpen && <ModelCall setCloseModelHandler={closeModelHandler} />}
    </>
  );
}
export default TopLevel;
