import { LocalText } from "../../LocalText/LocalText";

import Baner from "../../Baner/Baner";
import "./ShkafVideoButton.css";
import { useState } from "react";
import MultiStepForm from "../MultiStepForm/MultiStepForm";
function ShkafVideoButton({
  title,
  description,
  title2,
  description2,
  videoBg,
  videoBg2,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };
  console.log("videoBg " + videoBg);
  return (
    <>
      <div className="genn-ShkafVideoButton-title">
        <span className="genn-ShkafVideoButton-title-span1">{title}</span>
        <span className="genn-ShkafVideoButton-title-span2">{description}</span>
      </div>
      <div className="genn-Baner-container">
        <Baner videoBg={videoBg} videoBg2={videoBg2} />
      </div>
      <div className="genn-ShkafVideoButton-bottom">
        <div className="genn-ShkafVideoButton-bottom-title">{title2}</div>
        <div className="genn-ShkafVideoButton-bottom-des">{description2}</div>
        <div className="genn-ShkafVideoButton-bottom-buttonContainer">
          <button
            className="genn-ShkafVideoButton-bottom-button"
            onClick={openModal}
          >
            {LocalText.shkaf.shkafVideoButton.titleButtonTextComponent}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <MultiStepForm isModalOpen={openModal} closeModal={closeModal} />
      )}
    </>
  );
}
export default ShkafVideoButton;
