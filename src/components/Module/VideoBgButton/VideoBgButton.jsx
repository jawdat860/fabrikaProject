import "./VideoBgButton.css";

function VideoBgButton({ video1, poster, text, textButton }) {
  // Проверяем, является ли video1 изображением
  const isImage = video1?.match(/\.(jpeg|jpg|png|gif|webp)$/i);

  return (
    <div className="genn-VideoBgButton">
      <video
        controls={false}
        muted
        poster={isImage ? video1 : poster} // Если video1 изображение, используем его как poster
        autoPlay={!isImage} // Не автозапускать, если это изображение
        loop={!isImage} // Не зацикливать, если это изображение
        src={isImage ? null : video1} // Если это изображение, video1 не используется
      />
      {/* {isImage && (
        <img
          className="genn-VideoBgButton-poster"
          src={video1}
          alt="Background"
        />
      )} */}
      <div className="genn-VideoBgButton-text">{text}</div>
      <div className="genn-VideoBgButton-buttonContainer">
        <button className="genn-Baner-button-v5 genn-VideoBgButton-textButton">
          {textButton}
        </button>
      </div>
    </div>
  );
}

export default VideoBgButton;
