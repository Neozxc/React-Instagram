import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperPlane, faSquarePlus, faCompass, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./frontPage.css";
import { AddPreset } from "./img";
import instagramlogo from "../instagram.png";

export const FrontPage = () => {
  return (
    <div>
      <div className="navbar">
        <form className="search">
          <input type="text" placeholder='Search'/><FontAwesomeIcon className="magglass" icon={faMagnifyingGlass}/>
        </form>
        <div className="linetop"></div>
        <a href="#"><img className='instagramlogo' src={instagramlogo} alt="" /></a>
        <ul>
          <li><FontAwesomeIcon icon={faHome}/></li>
          <li><FontAwesomeIcon icon={faPaperPlane}/></li>
          <li><FontAwesomeIcon icon={faSquarePlus}/></li>
          <li><FontAwesomeIcon icon={faCompass}/></li>
          <li><FontAwesomeIcon icon={faHeart}/></li>
        </ul>
        <div className="linebot"></div>
      </div>

      {/* Show image on load */}
      <AddPreset/>
    </div>
  )
};