import React from 'react';
import './SectionFive.scss';
import Footer from '../footer/Footer';
import Form from '../form/Form.js';
import location from '../../assets/contacticons/location.png'
import mail from '../../assets/contacticons/email.png'
import phone from '../../assets/contacticons/phone-call.png'

const SectionFive = () => {
  return (
    <div className="section-5-content">
      <Form />
      <div className="contact-info">
        <h1>Want to say hello?</h1>
        <p>Ask me a question or connect via social media</p>
          <div className="contact-links">
            <p><img src ={location} alt="location"/>Barcelona, Spain</p>
            <p><img src ={mail} alt="mail"/>polina2001sokolovas@gmail.com</p>
            <p><img src ={phone} alt="phone"/>+34664607961</p>
          </div>
      </div>
      <Footer />
    </div>
  )
};
export default SectionFive;
