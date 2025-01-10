import axios from "axios";
import { useEffect, useState } from "react";

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

  console.log(data);

  return (
    <div className={`${classNameComponent}`}>
      <div className={`${classNameComponent}-title`}>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} className={`${classNameComponent}-description `}>
        
      </div>
      
      <div
        className={`${classNameComponent}-buttonContainer  genn-Baner-button-v5`}
      >
        <button className={`${classNameComponent}-buttonContainer-button`}>
          {titleButton}
        </button>
      </div>
    </div>
  );
}
export default TextComponentbottom;
