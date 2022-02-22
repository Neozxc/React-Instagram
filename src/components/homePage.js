import React from "react";
import '../App.css';
import instagramlogo from "../instagram.png";
// get our fontawesome imports
import { faHome, faPaperPlane, faSquarePlus, faCompass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgAddPreset, { AddPreset } from "../components/img";

export const homePage = () => {
  return (
    <div>
      <div className="navbar">
        <div className="linetop"></div>
        {/* Logo */}
        <a href="#"><img className='instagramlogo' src={instagramlogo} alt="" /></a>
        {/* Button login make component for it */}
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faHome} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faPaperPlane} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faSquarePlus} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faCompass} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
        </ul>
        <div className="linebot"></div>
      </div>

      {/* Show image on */}
      <AddPreset/>
    </div>
  )
}

export default homePage