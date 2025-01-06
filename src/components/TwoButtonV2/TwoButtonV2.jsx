import { useState } from "react";
import { LocalText } from "../LocalText/LocalText";
import "./TwoButtonV2.css";
import MultiStepForm from "../Pages/MultiStepForm/MultiStepForm";
import ModelCall from "../Module/ModelCall/ModelCall";
function TwoButtonV2({
  text1 = "Рассчитать стоимость",
  text2 = "Выезд замерщика",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => {
    setIsModalOpen2(true); // Open modal when button is clicked
  };

  const closeModal2 = () => {
    setIsModalOpen2(false); // Close modal
  };

  return (
    <>
      {/* Buttons */}
      <button className="genn-Baner-button-v1" onClick={openModal}>
        {text1}
      </button>
      <button className="genn-Baner-button-v2-1" onClick={openModal2}>
        {text2}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <MultiStepForm isModalOpen={openModal} closeModal={closeModal} />
      )}
      {isModalOpen2 && <ModelCall setCloseModelHandler={closeModal2} />}
    </>
  );
}
export default TwoButtonV2;
