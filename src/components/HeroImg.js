import "./HeroimgStyles.css";

import React from 'react';
import Introimg from "../assets/bg1.jfif";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg"></img>
      </div>
      <div className="content">
        <h1>HI, I'M A LEARNER</h1>
        <h1>React Developer</h1>
        <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
