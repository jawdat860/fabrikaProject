import Baner from "../../Baner/Baner";
import image from "../../../assets/images/imagVideophoto.png";
import opendoors from "../../../assets/images/bg-video/opendoors.mp4";
import "./ComponentVideoPhoto.css";
function ComponentVideoPhoto() {
  return (
    <div className="genn-ComponentVideoPhoto">
      <Baner videoBg={opendoors} videoBg2={opendoors} />
      <div className="genn-ComponentVideoPhoto-imageContainer">
        <div className="genn-ComponentVideoPhoto-title">
          Прихожая - это <br />
          первое впечатление
        </div>
        <div className="genn-ComponentVideoPhoto-image">
          <div className="genn-ComponentVideoPhoto-titleImage">
            <span className="genn-ComponentVideoPhoto-spanImage">Любые</span>
            воплощения ваших идей
          </div>
          <img src={image} alt="imagVideophoto" />
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
