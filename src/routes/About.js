import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyImg from '../components/MyImg';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
     <Navbar/>
     <MyImg heading="About" text="I'm a Friendly Front-End Developer"/>
     <AboutContent/>
     <Footer/>
    </div>
  );
}

export default About;
