import axios from "axios";
import { useEffect, useState } from "react";
import MultiStepForm from "../../Pages/MultiStepForm/MultiStepForm";

function TextComponentbottom({
  title,
  description,
  description2,
  titleButton,
  classNameComponent,
}) {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://l.okdeal.ru/api/local-text")
      .then((resp) => {
        // Accessing the correct path inside 'data'
        const allPersons = resp.data.LocalText;
        setData(allPersons);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div className={`${classNameComponent}`}>
        <div className={`${classNameComponent}-title`}>{title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={`${classNameComponent}-description `}
        ></div>

        <div
          className={`${classNameComponent}-buttonContainer  genn-Baner-button-v5`}
        >
          <button
            className={`${classNameComponent}-buttonContainer-button`}
            onClick={openModal}
          >
            {titleButton}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <MultiStepForm isModalOpen={openModal} closeModal={closeModal} />
      )}
    </>
  );
}
export default TextComponentbottom;
