import React, { useEffect, useState } from "react";
import Tech from "./News/Tech";
import Recent from "./News/Recent";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="heading">
        <p>we believe that every story we tell is a reflection of our team</p>
        <div className="main-header">
          <h1>Featured Blog Posts</h1>
          <hr />
        </div>
      </div>
      <div className="hero-container">
          <Recent/>
          <Tech />
      </div>
    </div>
  );
};

export default Hero;
