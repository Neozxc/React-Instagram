import React from "react";
import './App.css';
import instagramlogo from "./instagram.png";
// get our fontawesome imports
import { faHome, faPaperPlane, faSquarePlus, faCompass, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddPreset } from "./components/img";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const pisau = () => {
  return (
    <div>
      <h1>asdasd</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
    <div>
      <div className="navbar">
        <form className="search">
          <input type="text" placeholder='Search'/><FontAwesomeIcon className="magglass" icon={faMagnifyingGlass}/>
        </form>
        <div className="linetop"></div>
        <a href="#"><img className='instagramlogo' src={instagramlogo} alt="" /></a>
        <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faHome}/></Link></li>
          <li><Link to="/messages"><FontAwesomeIcon icon={faPaperPlane} /></Link></li>
          <li><Link to="/upload"><FontAwesomeIcon icon={faSquarePlus} /></Link></li>
          <li><Link to="/compass"><FontAwesomeIcon icon={faCompass} /></Link></li>
          <li><Link to="/likes"><FontAwesomeIcon icon={faHeart} /></Link></li>
        </ul>
        <div className="linebot"></div>
      </div>

      {/* Show image on load */}
      <AddPreset/>
    </div>

  </Router>
  )
};

export default App;

