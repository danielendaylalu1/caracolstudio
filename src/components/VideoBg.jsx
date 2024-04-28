"use client";
import React, { useEffect, useRef } from "react";

const VideoBg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log(videoRef.current);
      videoRef.current.play();
    }
  });
  return (
    <video muted loop id="bgvid" ref={videoRef}>
      <source src="./video-bg.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBg;
