import React, { useEffect, useState } from "react";
import axios from "axios";
import Baner from "../Baner/Baner";
import { LocalText } from "../LocalText/LocalText";
import "./KitchenComponents/BannerKitchen/BannerKitchen.css";
import "./KitchenComponents/IconBoxKitchen.css";
import SliderBaner from "../SliderBaner/SliderBaner";
// import TextComponentbottom from "../Module/Text/TextComponentKitchen";
import "./KitchenComponents/SliderBanner/SliderBanner.css";
import KitchenGategory from "./KitchenComponents/KitchenGategory/KitchenGategory";

import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import TwoButtonV2 from "../TwoButtonV2/TwoButtonV2";
import TemplateNewsV1 from "../Module/News/NewsTemplate/TemplateNewsV1";
import TextComponent from "../Module/Text/TextComponent";
import Footer from "../Footer/Footer";
import TextComponentbottom from "../Module/Text/TextComponentbottom";
import apiService from "../Services/apiServisc";
import { apiUrl } from "../../config";
function KitchenPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
  .get(apiUrl+"/api/kitchen")
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

  return (
    <>
      <div
        id="genn-kitchen-Banner"
        className="genn-Baner-container kitchenBanerBlock text-[#000]"
      >
        <TextComponent
          title={data.title_h2}
          description={data.description_text}
          classNameTextTitle={"genn-Baner-text  kitchenBaner"}
          classNameTitle={"genn-kitchenBaner-title"}
          classNamedescription={"genn-kitchenBaner-des"}
        />
      </div>
      <div className="k relative">
        <Baner
          videoBg={apiUrl+"/storage/" + data.video_url}
         
        />
      </div>
      <div id="genn-kitchen-SliderBaner" className="genn-SliderBaner-container">
        <TextComponentbottom
          title={data.title_h2}
          description={data.description_text}
        description2={LocalText.Kitchen.sliderBanner.description2}
        titleButton={LocalText.Kitchen.sliderBanner.titleButton}
        classNameComponent={"genn-TextComponentKitchen"}
        />
  
    <SliderBaner images={data.image_slider } />
      </div>
      <div
        id="genn-Categoryes "
        className="genn-Categoryes genn-kitchen-category"
      >
        <KitchenGategory />
      </div>
      <div id="genn-KitchenCards " className="genn-KitchenCards ">
      <TemplateNewsV1 descriptionSlider={data.description_slider} />

      </div>
      <div id="genn-IconsBox" className="genn-IconsBox genn-kitchen-IconsBox">
      <IconsBox iconsData={data.icons}/>
      </div>
      <div
        id="genn-CommentsModal"
        className="genn-CommentsModal genn-kitchen-CommentsModal"
      >
        <CommentsModal reviews={data.video_reviews} />
      </div>
      <div
        id="genn-TwoButtonV2"
        className="genn-TwoButtonV2 genn-kitchen-TwoButtonV2"
      >
        <TwoButtonV2 />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
export default KitchenPage;
