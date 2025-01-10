import Baner from "../../Baner/Baner";
import image from "../../../assets/images/imagVideophoto.png";
import opendoors from "../../../assets/images/bg-video/opendoors.mp4";
import "./ComponentVideoPhoto.css";
function ComponentVideoPhoto() {
  return (
    <div className="genn-ComponentVideoPhoto">
      <div className="genn-ComponentVideoPhoto-title mob">
        <div className="genn-ComponentVideoPhoto-title1 mob">
          Прихожая - это <br />
          первое впечатление
        </div>
      </div>
      <Baner videoBg={opendoors} videoBg2={opendoors} />
      <div className="genn-ComponentVideoPhoto-imageContainer">
        <div className="genn-ComponentVideoPhoto-title">
          <div className="genn-ComponentVideoPhoto-title1">
            Прихожая - это <br />
            первое впечатление
          </div>
        </div>
        <div className="genn-ComponentVideoPhoto-image">
          <div className="genn-ComponentVideoPhoto-titleImage">
            <span className="genn-ComponentVideoPhoto-spanImage">Любые</span>{" "}
            воплощения
            <br /> ваших идей
          </div>
          <img src={image} alt="imagVideophoto" className="!h-[100%]" />
          <div className="genn-ComponentVideoPhoto-buttoncontainer">
            <button className="genn-Baner-button-v1">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComponentVideoPhoto;
