import "./Heroimg2Styles.css";
import React, { Component } from 'react';

class MyImg extends Component {
  render(){
    return (
      <div className="hero-image">
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
      </div>
    );
  }
}

export default MyImg;
