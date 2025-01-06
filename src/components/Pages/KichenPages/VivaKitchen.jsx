import video1 from "../../../assets/images/bg-video/z1.mp4";
import video2 from "../../../assets/images/bg-video/z2.mp4";
import BannerTextShadow from "../../Module/BannerTextShadow/BannerTextShadow";
import TextComponent from "../../Module/Text/TextComponent";
import TwoButtonV2 from "../../TwoButtonV2/TwoButtonV2";
import "./VivaKitchen.css";
import ImageCategoryKitchen from "../../Module/ImageCategoryKitchen/ImageCategoryKitchen";
import image1 from "../../../assets/images/bg-image/viva1.jpeg";
import image2 from "../../../assets/images/bg-image/viva2.jpeg";
import imagebg from "../../../assets/images/bg-image/vivabg.png";
import imagewarm2 from "../../../assets/images/bg-image/feelWarm2.png";
import imagewarm1 from "../../../assets/images/bg-image/feelwarm1.jpeg";
import imagewarm3 from "../../../assets/images/bg-image/feelwarm3.jpeg";
import imagewarm4 from "../../../assets/images/bg-image/feelwarm4.jpeg";
import imagewarm5 from "../../../assets/images/bg-image/feelwarm5.jpeg";
import imagewarmMb3 from "../../../assets/images/bg-image/feelwarmMb3.jpeg";
import imagewarmMb1 from "../../../assets/images/bg-image/feelwarmMb1.png";
import imagewarmMb2 from "../../../assets/images/bg-image/feelwarmMb2.jpeg";
import bgadvantageskitchen1 from "../../../assets/images/bg-image/bgadvantageskitchen1.jpeg";
import bgadvantageskitchen2 from "../../../assets/images/bg-image/bgadvantageskitchen2.png";
import bgadvantageskitchen3 from "../../../assets/images/bg-image/bgadvantageskitchen3.png";
import bgadvantageskitchen4 from "../../../assets/images/bg-image/bgadvantageskitchen4.jpeg";
import AdvantageskitchenBox from "../../Module/advantageskitchenBox/advantageskitchenBox";
import bgImage1 from "../../../assets/images/bg-image/bgadvantageskitchenBox.jpeg";
import TextForKitchenPages from "../../Module/TextForKitchenPages/TextForKitchenPages";

import FooterW from "../../Footer/FooterW";
function VivaKitchen() {
  const ArrayText = [
    "Природная гармония: Зелёный цвет в интерьере создает чувство спокойствия и умиротворения, способствуя повышению креативности и свободе мысли",
    "Натуральные материалы и экологически чистые решения создают здоровую атмосферу для всей семьи",
    "Зелёная кухня — это стиль и функциональность. Уникальный дизайн с гармоничными формами и текстурами превратит каждый прием пищи в настоящий праздник для глаз",
  ];
  return (
    <div id="VivaKitchen" className="genn-VivaKitchen">
      <BannerTextShadow video1={video1} video2={video2} text={"Кухня Вива"} />
      <div className="genn-VivaKitchen-TextComponent">
        <TextComponent
          classNameTextTitle={"genn-EmeraldKitchen-TextComponent-container"}
          classNameTitle={"hidden"}
          classNamedescription={"genn-EmeraldKitchen-TextComponent-des"}
          title={""}
          description={
            <>
              БЕЛЫЕ КУХНИ ВСЕГДА АКТУАЛЬНЫ
              <br />
              Это классический вариант, подходящий для любого дома. Белый цвет
              нейтральный и универсальный.
            </>
          }
        />
        <div className="genn-EmeraldKitchen-TextComponent-buttons">
          <TwoButtonV2 text1={"Перейти в WhatsApp"} text2={"Заказать звонок"} />
        </div>
      </div>
      <ImageCategoryKitchen image1={image1} image2={image2} />

      <div className="genn-VivaKitchen-imageButton">
        <div className="genn-VivaKitchen-imageButton-image-container">
          <img src={imagebg} alt="viva" className="min-h-[129px]" />
        </div>
        <div className="genn-VivaKitchen-imageButton-buttonContainer">
          <button className="genn-Baner-button-v5">
            Бесплатный дизайн проект
          </button>
        </div>
      </div>
      <div className="genn-Feelwarm ">
        {/* for the desktop  */}
        <div className="genn-container-forPc bg-[#111]">
          <div className="genn-Feelwarm-forBc genn-container">
            <div className="genn-feelwarm-image genn-Feelwarm-forBc-image1 bg-[#fff] ">
              {" "}
              <img src={imagewarm1} alt="warm1" />
            </div>
            <div className="genn-feelwarm-image genn-Feelwarm-forBc-image2 bg-[#fff] ">
              <img src={imagewarm2} alt="warm1" />
            </div>
            <div className="  genn-Feelwarm-forBc-imagesBox bg-[#fff] ">
              <div className="genn-feelwarm-image genn-Feelwarm-forBc-imagesBox-image1 bg-[#fff] ">
                <img src={imagewarm3} alt="warm1" />
              </div>
              <div className=" genn-feelwarm-image genn-Feelwarm-forBc-imagesBox-omage2 bg-[#fff]">
                <img src={imagewarm4} alt="warm1" />
              </div>
            </div>
            <div className="genn-feelwarm-image genn-Feelwarm-forBc-image3 bg-[#fff] ">
              <img src={imagewarm5} alt="warm1" />
            </div>
          </div>
          <div className="genn-feelwarm-text">
            Почувствуйте тепло общения и вкус каждого мгновения
          </div>
          <div className="genn-feelwarm-buttonContainer">
            <button className="genn-Baner-button-v5  genn-feelwarm-textButton">
              {"Бесплатный дизайн проект"}
            </button>
          </div>
        </div>
        {/* for the mobail */}
        <div className="genn-container-mobile  bg-[#000]">
          <div className="feelwarm-container-main">
            <div className=" feelwarm-container feelwarm-container-1">
              <div className=" feelwarm-container-image feelwarm-container-image-1">
                <div className="feelwarm-container-image-1-image-first">
                  <div className="feelwarm-container-image-1-image-first-1">
                    <img src={imagewarm1} alt="image" />
                  </div>
                  <div className="feelwarm-container-image-1-image-first-2">
                    <img src={imagewarm5} alt="image" />
                  </div>
                </div>
                <div className="feelwarm-container-image-1-image-second">
                  <img src={imagewarm2} alt="image" />
                </div>
              </div>
              <div className="genn-text-feelwarm-1 genn-text-feelwarm">
                Почувствуйте тепло общения и вкус <br /> каждого мгновения
              </div>
            </div>
            <div className=" feelwarm-container feelwarm-container-2">
              <div className=" feelwarm-container-image feelwarm-container-image-2">
                <div className="feelwarm-container-image-a feelwarm-container-image-2-first">
                  <img src={imagewarm3} alt="image" />
                </div>
                <div className="feelwarm-container-image-a feelwarm-container-image-2-first">
                  <img src={imagewarmMb3} alt="image" />
                </div>
                <div className="feelwarm-container-image-a feelwarm-container-image-2-first">
                  <img src={imagewarmMb1} alt="image" />
                </div>
                <div className="feelwarm-container-image-a feelwarm-container-image-2-first">
                  <img src={imagewarmMb2} alt="image" />
                </div>
              </div>
              <div className="genn-text-feelwarm genn-text-feelwarm-2 ">
                Каждый элемент радует глаз и <br />
                удобен в использовании
              </div>
            </div>
          </div>
          <div className="feelwarm-button">
            <button className="genn-Baner-button-v1">
              Бесплатный дизайн проект
            </button>
          </div>
        </div>
      </div>
      <div className="genn-advantageskitchen-ImageCategoryKitchen">
        <ImageCategoryKitchen image1={image1} image2={image2} />
      </div>
      <div className="genn-advantageskitchen">
        {/* first section */}
        <div className="genn-advantageskitchen-category">
          <div
            className="genn-advantageskitchen-category-image genn-advantageskitchen-category-image-first"
            style={{ backgroundImage: `url(${bgadvantageskitchen1})` }}
          ></div>
          <div
            className="genn-advantageskitchen-category-image genn-advantageskitchen-category-image-second"
            style={{ backgroundImage: `url(${bgadvantageskitchen2})` }}
          ></div>
          <div className="genn-advantageskitchen-category-image-container">
            <div
              className="genn-advantageskitchen-category-image genn-advantageskitchen-category-image-therd"
              style={{ backgroundImage: `url(${bgadvantageskitchen3})` }}
            ></div>
            <div
              className="genn-advantageskitchen-category-image genn-advantageskitchen-category-image-four"
              style={{ backgroundImage: `url(${bgadvantageskitchen4})` }}
            ></div>
          </div>
        </div>
        {/* second section */}
        <AdvantageskitchenBox
          title={"Преимущества зеленой кухни"}
          ArrayText={ArrayText}
          classNameComponent={"EmeraldKitchen"}
          bgImage={bgImage1}
        />
      </div>
      <TextForKitchenPages />
      <FooterW />
    </div>
  );
}
export default VivaKitchen;
