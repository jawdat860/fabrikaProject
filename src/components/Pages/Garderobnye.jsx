import Baner from "../Baner/Baner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import video1 from "../../assets/images/bg-video/GarderobnyePc.mp4";
import video2 from "../../assets/images/bg-video/GarderobnyeMob.mp4";
import TextComponentbottom from "../Module/Text/TextComponentbottom";
import { LocalText } from "../LocalText/LocalText";
import SliderBaner from "../SliderBaner/SliderBaner";
import ShkafGategory from "./ShkafComponents/ShkafGategory";
import IconsBox from "../IconsBox/IconsBox";
import CommentsModal from "../CommentsModal/CommentsModal";
import Footer from "../Footer/Footer";
import video3 from "../../assets/images/bg-video/GarderobnyeN3.mp4";
import { apiUrl } from "../../config";
import CardVideoComponent from "../Module/GarderobnyeModel/CardVideoComponent";
import LoadingComponent from "../Module/LoadingComponent/LoadingComponent";
import Perfectlayout from "./ShkafComponents/Perfectlayout";
import "./GarderobnyeComponent/GarderobnyePerfectLayout.css";
function Garderobnye() {
  const [kitchenData, setKitchenData] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl + "/api/prikhozhie")
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
    return <LoadingComponent />;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <div
        id="genn-kitchen-Banner"
        className="genn-Baner-container kitchenBanerBlock"
      >
        <Baner
          v
          videoBg={"https://l.okdeal.ru/storage/" + data.video_url}
          videoBg2={video2}
        />
      </div>
      <div className="genn-Text-container  PrikhozhieTextbottom">
        <TextComponentbottom
          title={data.title_description}
          description={data.text_description}
          description2={LocalText.Prikhozhie.PrikhozhieTextBov.des2}
          titleButton={LocalText.Prikhozhie.PrikhozhieTextBov.titleButton}
          classNameComponent={"genn-PrikhozhieTextbottom-container"}
        />{" "}
      </div>
      <div className="genn-SliderBaner-container genn-Prikhozhie-SliderBaner ">
        <SliderBaner images={data.image_slider} />
      </div>
      <div className="genn-SliderImg genn-shkaf-img Prikhozhie ">
        <ShkafGategory categorySlide={data.category} />
      </div>
      <div className="genn-Garderobnye-BannerText">
        <Perfectlayout
          video={video3}
          title={"Идеальное пространство"}
          titleTextComponent={"Индивидуальный стиль с гардеробной на заказ"}
          desTextComponent={
            <>
              Гардеробная, созданная по индивидуальным размерам, позволит вам
              контролировать <br /> и адаптировать пространство под любое
              настроение и событие. Делайте выбор легко <br /> и с
              удовольствием!
            </>
          }
        />
        <div className="genn-Garderobnye-BannerText-des-ButtonContainer">
          <button className="genn-Baner-button-v2">Рассчитать стоимость</button>
        </div>
      </div>
      <CardVideoComponent />
      <div id="genn-IconsBox" className="genn-IconsBox genn-kitchen-IconsBox">
        <IconsBox iconsData={data.icons} />
      </div>
      <div
        id="genn-CommentsModal"
        className="genn-CommentsModal genn-kitchen-CommentsModal"
      >
        <CommentsModal reviews={data.video_reviews} />
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
export default Garderobnye;
