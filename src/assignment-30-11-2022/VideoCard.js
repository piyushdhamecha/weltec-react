import { useRef } from "react";

const VideoCard = (props) => {
  console.log(props);
  const videoRef = useRef();

  const handlePlayClick = () => {
    videoRef.current.play();
  };

  const handlePauseClick = () => {
    videoRef.current.pause();
  };

  const handleMuteClick = () => {
    // const newValue = !videoRef.current.muted;
    const newValue = videoRef.current.muted === true ? false : true;

    videoRef.current.muted = newValue;
  };

  return (
    <div>
      <video
        ref={videoRef}
        height="100px"
        width="180px"
        muted={true}
        src={props.source}
      />
      <div>
        <button onClick={handlePlayClick}>Play</button>
        <button onClick={handlePauseClick}>Pause</button>
        <button onClick={handleMuteClick}>Mute/Unmute</button>
      </div>
    </div>
  );
};

export default VideoCard;
