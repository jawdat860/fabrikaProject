import Baner from "../../Baner/Baner";
import "./BannerTextShadow.css";
function BannerTextShadow({ video1, video2, text }) {
  return (
    <div className="genn-BannerTextShadow">
      <Baner videoBg={video1} videoBg2={video2} />
      <div className="genn-BannerTextShadow-textContainer">
 
      </div>
      <div className="genn-BannerTextShadow-text">{text}</div>
    </div>
  );
}
export default BannerTextShadow;
