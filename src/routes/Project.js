import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyImg from '../components/MyImg';
import Pricingcard from '../components/Pricingcard';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
    <Navbar/>
    <MyImg heading="PROJECTS." text="Some Of My Recent Works"/>
    <Work/>
    <Pricingcard/>
    <Footer/>
    
    </div>
  );
}

export default Project;
