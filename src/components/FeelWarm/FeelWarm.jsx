import React from "react";
//import "./FeelWarm.css"; // Стиль для компонента
import AdvantageskitchenBox from "../Module/advantageskitchenBox/advantageskitchenBox";
import { image } from "framer-motion/client";
function FeelWarm({ imageGallery }) {
  if (!imageGallery || imageGallery.length === 0) {
    //return <div className="genn-Feelwarm">Нет изображений для отображения</div>;
  } 

  const classes =[
    'first',
    'second',
    'therd',
    'four'
  ];
  const idx = 0; 
  return (
    <div className="genn-advantageskitchen">
        {/* first section */}
        <div className="genn-advantageskitchen-category">
            
            {imageGallery.map((image, index) => {
                if (index === 2  ) {
                    const cont = ' <div className="genn-advantageskitchen-category-image-container">';
                    
                    return (
                       
                        <div className="genn-advantageskitchen-category-image-container">
                        <div
                          className={`genn-advantageskitchen-category-image genn-advantageskitchen-category-image-${classes[index]}`}
                          style={{ backgroundImage: `url(${image.image})` }}
                        ></div>
                         <div
                          className={`genn-advantageskitchen-category-image genn-advantageskitchen-category-image-${classes[index+1]}`}
                          style={{ backgroundImage: `url(${imageGallery[3].image})` }}
                        ></div>
                      </div>
                    );
                  } else if(index === 3 || index > 3){
                    return
                  } else { 
                    return (
                      <div
                        key={index}
                        className={`genn-advantageskitchen-category-image genn-advantageskitchen-category-image-${classes[index]}`}
                        style={{ backgroundImage: `url(${image.image})` }}
                      ></div>
                    );
                  } 
            })}
          
          
        </div>
        {/* second section */}
        { <AdvantageskitchenBox
          title={imageGallery[4].title}
          ArrayText={imageGallery[4].description}
          classNameComponent={"EmeraldKitchen"}
          bgImage={imageGallery[4].image}
        /> }
      </div>
  );
}

export default FeelWarm;
