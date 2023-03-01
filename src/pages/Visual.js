/** @format */

import React, { useRef } from "react";
// import Anime from "../assets/Anime";



const Visual = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어 ) */}
        I
        <img src={`${path}/images/visual.png`} alt="visual" />
      </div>
    </div>
  );
};

export default Visual;
