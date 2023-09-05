import "./AboutContentStyles.css"

import React from 'react';
import react1 from "../assets/React";
import react2 from '../assets/React2.png';
import {Link} from 'react-router-dom';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a reac front-end developer.I create responsive secure websites for my clients</p>
            <Link to="/Contact" className="btn">Contact</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"/>
                </div>
            </div>
        </div>
     
    </div>
  );
}

export default AboutContent;
