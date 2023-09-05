import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyImg from '../components/MyImg';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MyImg heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default Contact;
