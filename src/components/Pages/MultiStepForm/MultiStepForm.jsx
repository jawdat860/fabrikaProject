import React, { useState, useEffect } from "react";
import "./MultiStepForm.css"; // Ensure to include your CSS styles
import kitchenico from "../../../assets/images/ico/menu/kuhna-1-b.svg";
import kitchenicoW from "../../../assets/images/ico/menu/kuhna-2-w.svg";
import shkadico from "../../../assets/images/ico/menu/skaf-2-b.svg";
import shkaficow from "../../../assets/images/ico/menu/skaf-1-w.svg";
import prihozaia from "../../../assets/images/ico/menu/prihozaia-1-b.svg";
import prihozaiaw from "../../../assets/images/ico/menu/prihozaia-2-w.svg";
import zona from "../../../assets/images/ico/menu/r-zona-1-b.svg";
import zonaw from "../../../assets/images/ico/menu/r-zona-2-w.svg";
import nextb from "../../../assets/images/ico/Buttons/next-1.svg";
import nextw from "../../../assets/images/ico/Buttons/next-2.svg";
import close from "../../../assets/images/ico/Buttons/closeIco2.svg";
import InputMask from "react-input-mask"; // Import the InputMask component
import axios from "axios";

const MultiStepForm = ({ isModalOpen, closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: [],
    layout: "",
    dimensions: { width: "" },
    materials: { material: "" },
    callback: { name: "", phone: "" },
  });
  const [error, setError] = useState(""); // To store error messages

  const handlePhoneChange = (value) => {
    clearError(); // Clear error when updating phone number
    setFormData({
      ...formData,
      callback: { ...formData.callback, phone: value },
    });
  };

  // Clear the error when interacting with inputs
  const clearError = () => {
    if (error) {
      setError(""); // Clear any existing error
    }
  };

  // Navigate to next step
  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
      setError(""); // Clear errors when proceeding
    }
  };

  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setError(""); // Clear any existing errors when going back
  };

  // Update form data
  const updateFormData = (field, value) => {
    clearError(); // Clear error on any field update
    setFormData((prev) => ({
      ...prev,
      ...field,
    }));
  };

  // Validate form for each step
  const validateStep = () => {
    let errorMessage = ""; // Default error message is empty

    switch (currentStep) {
      case 1:
        if (formData.product.length === 0) {
          errorMessage = "Пожалуйста, выберите хотя бы одно изделие.";
        }
        break;
      case 2:
        if (!formData.dimensions.width) {
          errorMessage = "Пожалуйста, укажите размеры.";
        }
        break;
      case 3:
        if (!formData.materials.material) {
          errorMessage = "Пожалуйста, укажите материалы.";
        }
        break;
      case 4:
        if (!formData.callback.phone) {
          errorMessage = "Пожалуйста, укажите ваш номер телефона.";
        }
        break;
      default:
        errorMessage = "";
    }

    if (errorMessage) {
      setError(errorMessage); // Set the error message if there's an issue
      return false;
    }

    return true; // Validation passed
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (validateStep()) {
      try {
        // Send formData to the API using axios
        const response = await axios.get(
          "https://l.okdeal.ru/api/send/",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-cache", // Better cache control header value
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );

        // Log the full response for debugging
        console.log("Full response:", response);

        // Check if the response is successful (status 200)
        if (response.status === 200 && response.data.success) {
          console.log("Form Submitted Successfully", formData);
          closeModal(); // Close the modal after submission

          // Reset the form state after successful submission
          setFormData({
            product: [],
            layout: "",
            dimensions: { width: "" },
            materials: { material: "" },
            callback: { name: "", phone: "" },
          });
          setCurrentStep(1); // Reset to the first step
        } else {
          throw new Error("Ошибка отправки данных на сервер.");
        }
      } catch (error) {
        // Handle any errors that occur during the API call
        console.log("Error response:", error.response); // Log the error response
        setError(
          error.response
            ? error.response.data.message || "Ошибка отправки данных на сервер."
            : "Ошибка отправки данных на сервер."
        );
      }
    }
  };

  // Render step content based on the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="ModelWindow-1-step1 text-[#000]">
            <h2 className="ModelWindow-1">Какое изделие вы<br/>хотите заказать?</h2>
            <div className="ModelWindow-4">
              {["Кухня", "Шкаф", "Гардеробная", "Рабочая зона", "Другое"].map(
                (product) => (
                  <div
                    key={product}
                    className={`product-option ${
                      formData.product.includes(product) ? "selected" : ""
                    }`}
                    onClick={() => handleProductSelection(product)}
                  >
                    <div>
                      <img
                        src={
                          formData.product.includes(product)
                            ? getImageForProduct(product, true)
                            : getImageForProduct(product, false)
                        }
                        alt={product}
                      />
                    </div>
                    <div className="product-option-text">{product}</div>
                  </div>
                )
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="ModelWindow-1">Есть ли размеры?</h2>
            <textarea
              placeholder="Ширина"
              className="text-[#000]"
              value={formData.dimensions.width}
              onFocus={clearError} // Clear error on focus
              onChange={(e) =>
                updateFormData({
                  dimensions: { ...formData.dimensions, width: e.target.value },
                })
              }
            />
            <div
              className={`product-option ${
                formData.dimensions.width === "Требуется замер"
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                clearError(); // Clear error when clicking this option
                setFormData((prevState) => ({
                  ...prevState,
                  dimensions: {
                    ...prevState.dimensions,
                    width:
                      prevState.dimensions.width === "Требуется замер"
                        ? ""
                        : "Требуется замер", // Toggle logic
                  },
                }));
              }}
            >
              <div className="product-option-text">Требуется замер</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="ModelWindow-1">Из каких материалов?</h2>
            <textarea
              placeholder="Введите материалы"
              className="text-[#000]"
              value={formData.materials.material}
              onFocus={clearError} // Clear error on focus
              onChange={(e) =>
                updateFormData({
                  materials: {
                    ...formData.materials,
                    material: e.target.value,
                  },
                })
              }
            />
            <div
              className={`product-option ${
                formData.materials.material === "Требуется замер"
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                clearError(); // Clear error when clicking this option
                setFormData((prevState) => ({
                  ...prevState,
                  materials: {
                    ...prevState.materials,
                    material:
                      prevState.materials.material === "Требуется замер"
                        ? ""
                        : "Требуется замер", // Toggle logic
                  },
                }));
              }}
            >
              <div className="product-option-text">Требуется замер</div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="ModelWindow-1-con">
            <h2 className="ModelWindow-1">Ваши данные для связи</h2>
            <input
              type="text"
              className="text-[#000]"
              placeholder={"Имя:"}
              style={{ fontFamily: "monospace", fontSize: "16px" }}
              value={formData.callback.name}
              onFocus={clearError} // Clear error on focus
              onChange={(e) =>
                updateFormData({
                  callback: { ...formData.callback, name: e.target.value },
                })
              }
            />

            <InputMask
              mask="+7(999)999-99-99"
              className="[#000]"
              value={formData.callback.phone}
              onFocus={clearError} // Clear error on focus
              onChange={(e) => handlePhoneChange(e.target.value)}
              maskChar="_"
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="text"
                  placeholder="+7(___)___-__-__"
                  value={formData.callback.phone}
                />
              )}
            </InputMask>
            <div className="ModelWindow-6-button-container">
              <button className="ModelWindow-6" onClick={handleSubmit}>
                Узнать стоимость
              </button>
            </div>
          </div>
        );
      default:
        return <h2 className="ModelWindow-1">Форма завершена! Спасибо!</h2>;
    }
  };

  // Get image based on the product type and selection state
  const getImageForProduct = (product, selected) => {
    switch (product) {
      case "Кухня":
        return selected ? kitchenicoW : kitchenico;
      case "Шкаф":
        return selected ? shkaficow : shkadico;
      case "Гардеробная":
        return selected ? prihozaiaw : prihozaia;
      case "Рабочая зона":
        return selected ? zonaw : zona;
      case "Другое":
        return selected ? kitchenicoW : kitchenico; // Use default image for "Other"
      default:
        return kitchenico;
    }
  };

  // Handle product selection (toggle selection of products)
  const handleProductSelection = (product) => {
    clearError(); // Clear error on product selection
    const isSelected = formData.product.includes(product);
    if (isSelected) {
      setFormData((prev) => ({
        ...prev,
        product: prev.product.filter((item) => item !== product),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        product: [...prev.product, product],
      }));
    }
  };

  // Calculate the width for the progress bar based on the current step
  const progressWidth = (currentStep - 1) * 33.33; // Each step is roughly 33.33% of the total width

  return (
    isModalOpen && (
      <div id="ModelWindow" className="overlay multform">
        <div className="conteniner gemm-ModelWindow">
          <button className="close" onClick={closeModal}>
            <img src={close} alt="close" />
          </button>
          <div className="step-content">{renderStep()}</div>
          {error && <p className="error-message">{error}</p>}
          <div className="ModelWindow-44">
            <div className="progress-bar-container">
              <div
                className="progress-tape"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>

            <div className="ModelWindow-44-buttonContainer">
              <button
                className="ModelWindow-button-5"
                onClick={currentStep !== 1 ? prevStep : () => {}}
              >
                <img src={nextw} />
              </button>
              <button
                className="ModelWindow-button-6"
                onClick={currentStep !== 4 ?nextStep : ()=>{}}
                disabled={!!error} // Disable button if there's an error
              >
                <img src={nextb} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MultiStepForm;
