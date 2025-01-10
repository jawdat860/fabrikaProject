import { useState } from "react";
import "./TwoButtonV1.css"
import MultiStepForm from "../Pages/MultiStepForm/MultiStepForm";
function TwoButtonV1() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true); // Open modal when button is clicked
    };
  
    const closeModal = () => {
      setIsModalOpen(false); // Close modal
    };
    return (
      <>        
        <div className="genn-TwoButtonV1-block">
            <button className="genn-Baner-button-v5" onClick={openModal}>Рассчитать стоимость</button>
            <button className="genn-Baner-button-v3-1">Звонок</button>
        </div>   
        {isModalOpen && (
        <MultiStepForm isModalOpen={openModal} closeModal={closeModal}/>
      )}    
      </>
    );
  }
  export default TwoButtonV1;
  