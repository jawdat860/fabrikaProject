import Baner from "../Baner/Baner";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import TextComponentbottom from "../Module/Text/TextComponentKitchen";
import SliderBaner from "../SliderBaner/SliderBaner";
import { LocalText } from "../LocalText/LocalText";
import "./ShkafComponents/TextComponentShkaf.css";
import ShkafGategory from "./ShkafComponents/ShkafGategory";
import ShkafVideoButton from "./ShkafComponents/ShkafVideoButton";
import Perfectlayout from "./ShkafComponents/Perfectlayout";
import TopLevel from "./ShkafComponents/TopLevel";
import CustomCabinet from "./ShkafComponents/CustomCabinet";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import FooterW from "../Footer/FooterW";
import TemplateCardV1 from "../Module/News/Card/templateCardV1";
import TemplateNewsV1 from "../Module/News/NewsTemplate/TemplateNewsV1";
import TextComponentbottom from "../Module/Text/TextComponentbottom";
import { apiUrl } from "../../config";

function Shkaf() {

  const [kitchenData, setKitchenData] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
  .get(apiUrl+"/api/shkaf")
  .then((response) => {
    if (response.data.success && response.data.data.length > 0) {
      setData(response.data.data[0]);
     
    } else {
      console.error("Unexpected API response structure", response.data);
      setData(null);
    }
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }


console.log('data ' + {data});


console.log(data.video_url);

  return (
    <div id="genn-shkaf" className="shkafComponent text-[#000]">
      <div
        id="genn-shkaf-Banner"
        className="genn-Baner-container shkafBanerBlock"
      >
        <Baner
          videoBg={apiUrl+"/storage/" + data.video_url}
         
        />
      </div>
      <div className="genn-Text-container">
        <TextComponentbottom 
        title={LocalText.shkaf.sliderBanner.title}
        description={data.description_text}
        description2={LocalText.shkaf.sliderBanner.des2}
        titleButton={LocalText.shkaf.sliderBanner.textButton}
        classNameComponent={"genn-shkaff"}
        />
        
      </div>
      <div className="genn-SliderBaner-container">
        <SliderBaner images={data.image_slider } />
      </div>
      <div className="genn-SliderImg genn-shkaf-img">
        <ShkafGategory categorySlide={data.category_slide}/>
      </div>
      <div className="genn-shkafVideoButton ">
        <ShkafVideoButton 
        title={'Встроенный шкаф - '} 
        description={'скрытый порядок'} 
        videoBg={apiUrl+"/storage/" + data.video_url_2}
        title2={'Гармония с пространством.'} 
        description2={'Шкаф, изготовленный по индивидуальным размерам, прекрасно вписывается даже в самые нестандартные уголки вашего дома. Вы можете использовать все пространство, от стены до стены, от пола до потолка'} 
        />
      </div> 
      <div id="genn-KitchenCards " className="genn-KitchenCards genn-shkaf ">
      <TemplateNewsV1 descriptionSlider={data.description_slider} />
      </div>
      <div className="genn-Perfectlayou ">
        <Perfectlayout
          title={data.title_h2_3}
          video={apiUrl+"/storage/" + data.video_url_3}
          titleTextComponent={LocalText.shkaf.Perfectlayout.titleTextComponent}
          desTextComponent={LocalText.shkaf.Perfectlayout.desTextComponent}
        />
      </div>
      <div className="genn-TopLevel ">
        <TopLevel 
        imageBg
        title={'Функциональность на высшем уровне2'}
        title2={'Оптимизация функциональности.'}
        description={data.call_tocation}
        /> 
      </div>
      <div className="genn-CustomCabinet">
        <CustomCabinet
        image
        title={'шкаф на заказ'}
        description={data.call_tocation_2}/>
      </div>
      <div className="genn-Perfectlayou genn-Perfectlayout-2 ">
        <Perfectlayout
          title={LocalText.shkaf.EmotionalConnection.title}
          video={apiUrl+"/storage/" + data.video_url_4}
          titleTextComponent={ 
            LocalText.shkaf.EmotionalConnection.titleTextComponent
          }
          desTextComponent={
            LocalText.shkaf.EmotionalConnection.desTextComponent
          }
        />
      </div>
      <div id="genn-IconsBox" className="genn-IconsBox ">
      <IconsBox iconsData={data.icons}/>
      </div>
      <div id="genn-CommentsModal" className="genn-CommentsModal ">
      <CommentsModal reviews={data.video_reviews} />
      </div>
      <div id="genn-TwoButtonV2" className="genn-TwoButtonV2 ">
      <TwoButtonV2
          text1={LocalText.TwoButtonV2.button1}
          text2={LocalText.TwoButtonV2.button2}
        />
      </div>
      <footer className="footer">
        <FooterW />
      </footer>
    </div>
  );
}
export default Shkaf;
