import React, { useRef, useState } from "react";
import { StyledButtonContainer, StyledContainer } from "./VideoCartStyled";

const VideoCard = (props) => {
  const [displayButton, setDisplayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();

  const handlePlayClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  // const handleMuteClick = () => {
  //   // const newValue = !videoRef.current.muted;
  //   const newValue = videoRef.current.muted === true ? false : true;

  //   videoRef.current.muted = newValue;
  // };
  console.log(videoRef);
  const handleMouseOver = () => {
    setDisplayButton(true);
  };

  const handleMouseOut = () => {
    setDisplayButton(false);
  };

  return (
    <StyledContainer
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      {displayButton ? (
        <StyledButtonContainer>
          {isPlaying === true ? (
            <button onClick={handlePauseClick}>Pause</button>
          ) : (
            <button onClick={handlePlayClick}>Play</button>
          )}
          {/* <button onClick={handleMuteClick}>Mute/Unmute</button> */}
        </StyledButtonContainer>
      ) : null}

      <div>
        <video
          ref={videoRef}
          height="100px"
          width="180px"
          muted={true}
          src={props.source}
        />
      </div>
    </StyledContainer>
  );
};

export default VideoCard;
