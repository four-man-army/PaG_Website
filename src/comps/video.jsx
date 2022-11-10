import React from "react";
import Videom from "../assets/mexico.webm";
import"./video.css";

const Video = () => {
    return(
    
<video  className="play" autoplay loop>
<source src={Videom} type="video/webm/"/>
</video>
    );
}

export default Video
