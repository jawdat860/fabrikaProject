

import Baner from "../../Baner/Baner";
import "./Perfectlayout.css";
function Perfectlayout({title,video,titleTextComponent,desTextComponent}) {
  return (
    <>
      <div className="genn-Perfectlayou-title">
        <div>{title}</div>
      </div>
      <div className="genn-Baner-container">
        <Baner videoBg={video} videoBg2={video} />
      </div>
      <div className="genn-Perfectlayou-bottom">
        <div className="genn-Perfectlayou-bottom-title">
          {titleTextComponent}
        </div>
        <div className="genn-Perfectlayou-bottom-des">
          {desTextComponent}
        </div>
      </div>
    </>
  );
}
export default Perfectlayout;
