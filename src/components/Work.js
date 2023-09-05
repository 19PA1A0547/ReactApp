import "./WorkCardStyles.css"
import WorkCard from './WorkCard';
import WorkCarddata from './WorkCarddata';

import React from 'react';
import StretLight from "../assets/StreetLight.jfif"
import {navLink} from 'react-router-dom';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCarddata.map((val,ind)=>{
            return(
              <WorkCard 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              />  
            )
        })}
      </div>
    </div>
  );
}

export default Work;
