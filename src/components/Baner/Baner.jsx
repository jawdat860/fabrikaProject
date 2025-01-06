import { LocalText } from "../LocalText/LocalText";
import { useState, useRef, useEffect } from "react";
import "./Baner.css";
import image1 from "../../assets/images/bg-image/BanerBg.png";
import image3 from "../../assets/images/bg-image/BanerBgsmall.png";

function Baner({ videoBg, videoBg2 }) {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [poster, setPoster] = useState(image1); // Default poster
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const updatePoster = () => {
      if (window.innerWidth >= 360 && window.innerWidth <= 767) {
        setPoster(image3);
        setVideo(videoBg2);
      } else {
        setPoster(image1);
        setVideo(videoBg);
      }
    };

    updatePoster(); // Initial check
    window.addEventListener("resize", updatePoster); // Listen for resize

    // Cleanup
    return () => {
      window.removeEventListener("resize", updatePoster);
    };
  }, [videoBg, videoBg2]);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Update current time
    const updateCurrentTime = () => {
      setCurrentTime(videoElement.currentTime);
    };

    // Set duration when metadata is loaded
    const handleMetadataLoaded = () => {
      setDuration(videoElement.duration);
    };

    videoElement.addEventListener("timeupdate", updateCurrentTime);
    videoElement.addEventListener("loadedmetadata", handleMetadataLoaded);

    // Cleanup
    return () => {
      videoElement.removeEventListener("timeupdate", updateCurrentTime);
      videoElement.removeEventListener("loadedmetadata", handleMetadataLoaded);
    };
  }, []);

  // Play/Pause toggle
  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div
        className="genn-Baner-video"
        // Smooth transition
      >
        <div className="banner">
          <div
            className="circular-progress"
            style={{ width: "50px", height: "50px" }}
          >
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
                  strokeDasharray: `${2 * Math.PI * 20}`, // Circumference of the circle
                  strokeDashoffset: `${
                    2 * Math.PI * 20 -
                    ((currentTime / duration) * 2 * Math.PI * 20 || 0)
                  }`,
                }}
              />
            </svg>
            <button onClick={togglePlay} className="circular-button">
              {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </button>
          </div>
        </div>
        <video
          controls={false}
          muted
          poster={poster}
          autoPlay
          loop
          src={video}
          ref={videoRef}
          // Smooth fade-in for the video
        />
      </div>

      <div className="genn-Baner-button-container genn-fl-row">
        <button className="genn-Baner-button-v1">
          {LocalText.Baner.button1}
        </button>
        <button className="genn-Baner-button-v2">
          {LocalText.Baner.button2}
        </button>
      </div>
    </>
  );
}

export default Baner;
