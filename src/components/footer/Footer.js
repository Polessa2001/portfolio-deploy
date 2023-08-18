import React from 'react';
import './Footer.scss';
import gitHub from '../../assets/contacticons/github.png';
import linkedIn from '../../assets/contacticons/linkedin.png';
import portfolio from '../../assets/contacticons/bag.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-links-footer">
        <a href="https://www.linkedin.com/in/polinasokolovadev/"><img src ={linkedIn} alt=""/></a>
        <a href="https://github.com/Polessa2001"><img src={gitHub} alt="" /></a>
        <a href="https://troopl.com/polinasokolovadev"><img src = {portfolio} alt=""/></a>
      </div>
      <p>Copyright@ Polina Sokolova</p>
    </div>
  );
};
export default Footer;
