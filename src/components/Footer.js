import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
               <FaHome size={20} style={{color:'#fff', marginRight :"2rem"}}/> 
               <div>
                <p>3-180 Kasipadu Tadepalligudem</p>
                <p>West godavari Andhra Pradesh</p>
               </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:'#fff', marginRight :"2rem"}}/> 9390308699</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:'#fff', marginRight :"2rem"}}/>karthikeya879@gmail.com </h4>
            </div>
        </div>
        <div className="right">
            <h4>About the Company</h4>
            <p>This is karthikeya Completed Graduation in the 2023 and got placed in the stellantis Company</p>
            <div className="social">
            <FaFacebook size={30} style={{color:'#fff', marginRight :"2rem"}}/>
            <FaTwitter size={30} style={{color:'#fff', marginRight :"2rem"}}/>
            <FaLinkedin size={30} style={{color:'#fff', marginRight :"2rem"}}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
