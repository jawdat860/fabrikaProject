import { LocalText } from "../LocalText/LocalText";
import { useState, useRef, useEffect } from "react";
import image1 from "../../assets/images/bg-image/BanerBg.png";
import image3 from "../../assets/images/bg-image/BanerBgsmall.png";
import "./baner.css";
function Baner({ videoBg, videoBg2, className }) {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [poster, setPoster] = useState(image1);
  const [video, setVideo] = useState(videoBg);

  useEffect(() => {
    const updatePosterAndVideo = () => {
      if (window.innerWidth >= 360 && window.innerWidth <= 767) {
        setPoster(image3);
        setVideo(videoBg2);
      } else {
        setPoster(image1);
        setVideo(videoBg);
      }
    };

    updatePosterAndVideo();
    window.addEventListener("resize", updatePosterAndVideo);

    return () => {
      window.removeEventListener("resize", updatePosterAndVideo);
    };
  }, [videoBg, videoBg2]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateCurrentTime = () => setCurrentTime(videoElement.currentTime);
    const handleMetadataLoaded = () => setDuration(videoElement.duration);

    videoElement.addEventListener("timeupdate", updateCurrentTime);
    videoElement.addEventListener("loadedmetadata", handleMetadataLoaded);

    return () => {
      videoElement.removeEventListener("timeupdate", updateCurrentTime);
      videoElement.removeEventListener("loadedmetadata", handleMetadataLoaded);
    };
  }, []);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const calculateStrokeOffset = () => {
    const circumference = 2 * Math.PI * 20;
    return circumference - ((currentTime / duration) * circumference || 0);
  };

  return (
    <div className={`genn-Baner-video ${className}`}>
      <div className="banner">
        {/* <div className="circular-progress">
          <svg className="progress-ring" width="50" height="50">
            <circle
              className="progress-ring__background"
              cx="25"
              cy="25"
              r="20"
              strokeWidth="3"
            />
            <circle
              className="progress-ring__progress"
              cx="25"
              cy="25"
              r="20"
              strokeWidth="3"
              style={{
                strokeDasharray: `${2 * Math.PI * 20}`,
                strokeDashoffset: calculateStrokeOffset(),
              }}
            />
          </svg>
          <button onClick={togglePlay} className="circular-button">
            <i className={`fa-solid fa-${isPlaying ? "pause" : "play"}`}></i>
          </button>
        </div> */}
      </div>
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        autoPlay
        loop
        controls={false}
        className=" "
      />
      {/* <div className="genn-Baner-button-container genn-fl-row">
        <button className="genn-Baner-button-v1">
          {LocalText.Baner.button1}
        </button>
        <button className="genn-Baner-button-v2">
          {LocalText.Baner.button2}
        </button>
      </div> */}
    </div>
  );
}

export default Baner;
