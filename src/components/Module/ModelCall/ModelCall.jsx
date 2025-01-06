import React, { useEffect, useState } from "react";
import "./ModelCall.css";
import imageClose from "../../../assets/images/ico/Buttons/closeIco2.svg";
import InputMask from "react-input-mask";
import buttonNext from "../../../assets/images/ico/Buttons/next-2.svg";
import CustomDropUpSelect from "../o/CustomDropUpSelect";
import sunIco from "../../../assets/images/ico/sun.svg";
import cloudIco from "../../../assets/images/ico/cloud1.svg";
import cloudIco2 from "../../../assets/images/ico/cloud3.svg";
import cloudIco3 from "../../../assets/images/ico/cloud4.svg";
import moon from "../../../assets/images/ico/moon.svg";
import star1 from "../../../assets/images/ico/Star1.svg";
import star2 from "../../../assets/images/ico/Star2.svg";
import star3 from "../../../assets/images/ico/Star3.svg";

// Function to get today's name in Russian
const getDayNameInRussian = () => {
  const daysInRussian = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const today = new Date().getDay();
  return daysInRussian[today];
};

// Function to get the current time range
const getCurrentTimeRange = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const timeRanges = [
    "08:00-10:00",
    "10:00-12:00",
    "12:00-14:00",
    "14:00-16:00",
    "16:00-18:00",
    "18:00-20:00",
  ];

  for (let range of timeRanges) {
    const [start, end] = range.split("-").map((time) => {
      const [hh, mm] = time.split(":");
      return parseInt(hh) * 60 + parseInt(mm);
    });
    const nowInMinutes = hours * 60 + minutes;

    if (nowInMinutes >= start && nowInMinutes <= end) {
      return range;
    }
  }
  return timeRanges[0];
};

function ModelCall({ setCloseModelHandler }) {
  const [isNightTime, setIsNightTime] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [formData, setFormData] = useState({
    callback: {
      name: "",
      phone: "",
    },
    day: getDayNameInRussian(),
    time: getCurrentTimeRange(),
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    day: "",
    time: "",
  });

  useEffect(() => {
    const checkNightTime = () => {
      const now = new Date();

      // Convert to Moscow time (UTC+3)
      const moscowOffset = 3;
      const currentHour = (now.getUTCHours() + moscowOffset) % 24;

      // Check if the time is between 20:00 and 08:00
      setIsNightTime(currentHour >= 20 || currentHour < 8);
    };

    checkNightTime(); // Run the check immediately
    const interval = setInterval(checkNightTime, 60000); // Re-check every minute

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  const handleNameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      callback: {
        ...prevData.callback,
        name: e.target.value,
      },
    }));
    setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({
      ...prevData,
      callback: {
        ...prevData.callback,
        phone,
      },
    }));
    setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
  };

  const handleDayChange = (selectedDay) => {
    setFormData((prevData) => ({
      ...prevData,
      day: selectedDay,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, day: "" }));
  };

  const handleTimeChange = (selectedTime) => {
    setFormData((prevData) => ({
      ...prevData,
      time: selectedTime,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, time: "" }));
  };

  const toggleTimeSelection = () => {
    setShowTime(!showTime);
  };

  const handleSubmit = () => {
    const { callback, day, time } = formData;
    const newErrors = {};

    if (!callback.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения.";
    }

    if (!callback.phone.trim()) {
      newErrors.phone = "Телефон обязателен для заполнения.";
    }

    if (showTime) {
      if (!day) {
        newErrors.day = "Выберите день.";
      }
      if (!time) {
        newErrors.time = "Выберите время.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", {
        name: callback.name,
        phone: callback.phone,
        day: showTime ? day : "No day selected",
        time: showTime ? time : "No time selected",
      });
      setCloseModelHandler(); // Close the modal on successful submission
    }
  };

  return (
    <div
      id="ModelCall"
      className="gemm-ModelWindow overlay"
      onClick={setCloseModelHandler}
    >
      <div className="conteniner" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={setCloseModelHandler}>
          <img src={imageClose} alt="Close" />
        </div>
        <div className="content">
          <div className={!isNightTime ? `sun` : `sun night`}>
            <img src={!isNightTime ? sunIco : moon} alt="Sun" />
          </div>
          <div className={!isNightTime ? `cloud1` : "cloud1 night"}>
            <img src={!isNightTime ? cloudIco : star1} alt="Cloud1" />
          </div>
          <div className={!isNightTime ? `cloud2` : "cloud2 night"}>
            <img src={!isNightTime ? cloudIco2 : star2} alt="Cloud2" />
          </div>
          <div className={!isNightTime ? `cloud3` : "cloud3 night"}>
            <img src={!isNightTime ? cloudIco3 : star3} alt="Cloud3" />
          </div>

          <div className="genn-ModelCall-title-small">
            {!isNightTime ? (
              <>
                Напишите удобное время для <br />
                бесплатной консультации
              </>
            ) : (
              <>
                Сейчас сотрудники отдыхают.
                <br />
                Напишите удобное время <br />
                для бесплатной консультации
              </>
            )}
          </div>
          <div className="genn-ModelCall-title-main">Обратный звонок</div>

          <div className="genn-ModelCall-inpunts">
            <input
              type="text"
              placeholder="Имя:"
              style={{ fontFamily: "monospace", fontSize: "16px" }}
              value={formData.callback.name}
              onChange={handleNameChange}
            />
            {errors.name && (
              <div className="error-message text-[red]">{errors.name}</div>
            )}

            <InputMask
              mask="+7(999)999-99-99"
              value={formData.callback.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              maskChar="_"
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="text"
                  placeholder="+7(___)___-__-__"
                />
              )}
            </InputMask>
            {errors.phone && (
              <div className="error-message text-[red]">{errors.phone}</div>
            )}
          </div>

          <div className="genn-ModelCall-textButtonDay">
            <div className="genn-ModelCall-textButtonDay-text">
              <div className="genn-ModelCall-textButtonDay-text-contain">
                {!showTime ? "Хотите указать удобное время?" : "Удобное время"}
              </div>
              <div
                className={
                  !showTime
                    ? "genn-ModelCall-textButtonDay-button closethrow"
                    : " genn-ModelCall-textButtonDay-button openthrow"
                }
                onClick={toggleTimeSelection}
              >
                <img src={buttonNext} alt="Next" />
              </div>
            </div>

            {showTime && (
              <div className="genn-buttons-select">
                <CustomDropUpSelect
                  options={[
                    "Понедельник",
                    "Вторник",
                    "Среда",
                    "Четверг",
                    "Пятница",
                    "Суббота",
                  ]}
                  value={formData.day}
                  onChange={handleDayChange}
                  placeholder="Выберите день"
                />
                {errors.day && (
                  <div className="error-message">{errors.day}</div>
                )}

                <CustomDropUpSelect
                  options={[
                    "08:00-10:00",
                    "10:00-12:00",
                    "12:00-14:00",
                    "14:00-16:00",
                    "16:00-18:00",
                    "18:00-20:00",
                  ]}
                  value={formData.time}
                  onChange={handleTimeChange}
                  placeholder="Выберите время"
                />
                {errors.time && (
                  <div className="error-message">{errors.time}</div>
                )}
              </div>
            )}
          </div>

          <div className="genn-ModelCall-buttonSubmit">
            <button className="genn-Baner-button-v2" onClick={handleSubmit}>
              Отправить
            </button>
          </div>
          <div className="genn-des-right">
            Нажимая кнопку «Отправить», я даю свое согласие на обработку моих
            персональных данных, в соответствии с Федеральным законом от
            27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
            целей, определенных в Согласии на обработку персональных данных.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCall;
