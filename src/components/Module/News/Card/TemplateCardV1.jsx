import "./templateCardV1.css";
function TemplateCardV1({ id, imageSrc, title, des }) {
  return (
    <div id={id} className="genn-templateCardV1-card">
      <div
        className="genn-templateCardV1-card-imageContainer h-[260px]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        
      </div>
      <div className="genn-templateCardV1-card-title">
        <h4 className="genn-templateCardV1-card-title-head">{title}</h4>
        <p className="genn-templateCardV1-card-title-des">{des}</p>
      </div>
    </div>
  );
}
export default TemplateCardV1;
