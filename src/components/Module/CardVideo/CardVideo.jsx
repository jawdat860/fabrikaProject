import { useRef, useState, useEffect } from "react";
import "./CardVideo.css";

function CardVideo({ videoBg, poster, title, des, isActive }) {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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

  // Control playback based on `isActive` prop
  useEffect(() => {
    const videoElement = videoRef.current;
    if (isActive) {
      videoElement.play();
      setIsPlaying(true)
    } else {
      videoElement.pause();
      setIsPlaying(false)
      videoElement.currentTime = 0; // Reset the video when it's inactive
    }
  }, [isActive]);

  return (
    <div className="genn-CardVideo">
      <div className="genn-Baner-video">
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
          autoPlay={isActive} // Ensures autoplay only if active
          loop
          src={videoBg}
          ref={videoRef}
        />
      </div>
      <div className="genn-cardVideo-containerText">
        <div className="genn-cardVideo-title">{title}</div>
        <div className="genn-cardVideo-des">{des}</div>
      </div>
    </div>
  );
}

export default CardVideo;
