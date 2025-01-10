import { Fragment } from "react";
import "./AdvantageskitchenBox.css";

function AdvantageskitchenBox({
  title,
  ArrayText,
  classNameComponent,
  bgImage,
   // Pass the image URL as a prop
}) {
  return (
    <div
      className={`genn-AdvantageskitchenBox genn-${classNameComponent}-AdvantageskitchenBox`}
    >
      <div className="genn-AdvantageskitchenBox-title">{title}</div>
      <div className="genn-AdvantageskitchenBox-container1">
        <div className="genn-AdvantageskitchenBox-container">
          <ul className="genn-AdvantageskitchenBox-ul" dangerouslySetInnerHTML={{ __html: ArrayText}}>
            
          </ul>
        </div>
        <div
          className="genn-AdvantageskitchenBox-container1-image"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
       
      </div>
      <div className="genn-AdvantageskitchenBox-button-container">
            <button className="genn-Baner-button-v2">Заказать звонок</button>
        </div>
    </div>
  );
}

export default AdvantageskitchenBox;
